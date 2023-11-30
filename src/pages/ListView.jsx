import Card from '../components/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from '../components/Filter';
import { useSearchParams,useNavigate } from 'react-router-dom';
import ToAuthPage from '../components/ToAuthPage';


const ListView = ({ events, user, }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const category = searchParams.get('category');

  const [filteredEvents, setFilteredEvents] = useState(events);

  const options = {
    params: {
      _sort: "name",


      q: query,

      category: category,
    },
  };
  useEffect(() => {
    axios
      .get('http://localhost:3038/events', options)
      .then((res) => setFilteredEvents(res.data))
      .catch((err) => console.log(err));
  }, [query, category]);


  useEffect(() => {
    axios
      .get('http://localhost:3038/events')
      .then((res) => setFilteredEvents(res.data))
      .catch((err) => console.log(err));
  }, []);


  const handleFilterChange = ({ category, query, district }) => {
    if (!query && !category && district === 'all') {
      // Hepsi seçildiyse, tüm etkinlikleri listeleyin
      setFilteredEvents(events);
    } else {
      // Diğer durumlarda filtreleme işlemlerini gerçekleştir
      let filteredList = events;
  
      if (district !== 'all') {
        // Eğer ilçe belirtilmişse, sadece ilçeye göre filtrele
        filteredList = filteredList.filter((event) => event.district === district);
      }
  
      if (category !== undefined) {
        // Kategori belirtilmişse, kategoriye göre filtrele
        filteredList = filteredList.filter((event) => event.category === category);
      }
  
      setFilteredEvents(filteredList);
    }
  };
  
  

  const filterDate = (date) => {
    const filtered = events?.filter((i) => i.startDate.includes(date));
    setFilteredEvents(filtered)
  }

  const showAll = () => {
    setFilteredEvents(events)
  }

  console.log(selectedOption)


  if (user) {
    return (
      <>
        <Filter
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
          filterDate={filterDate}
          showAll={showAll}
          events={events}
          onFilterChange={handleFilterChange} />
        <div className="card-container">
          {filteredEvents?.map((event) => (
            <Card key={event.id} event={event} />
          ))}
        </div>
      </>
    );
  }

  return (
<ToAuthPage/>
  );
};

export default ListView;
