import Card from '../components/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from '../components/Filter';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ToAuthPage from '../components/ToAuthPage';
import Sidebar from '../components/Sidebar';


const ListView = ({ events, user, }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [filteredEvents, setFilteredEvents] = useState(events);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3038/categories')
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);


  console.log(categories)

  const options = {
    params: {
      _sort: "name",
      q: query,
    },
  };
  useEffect(() => {
    axios
      .get('http://localhost:3038/events', options)
      .then((res) => setFilteredEvents(res.data))
      .catch((err) => console.log(err));
  }, [query]);


  useEffect(() => {
    axios
      .get('http://localhost:3038/events')
      .then((res) => setFilteredEvents(res.data))
      .catch((err) => console.log(err));
  }, []);


  const handleFilterChange = ({ query }) => {
    if (!query) {
      // Hepsi seçildiyse, tüm etkinlikleri listeleyin
      setFilteredEvents(events);
    } else {
      // Diğer durumlarda filtreleme işlemlerini gerçekleştir
      let filteredList = events;

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

  const filterCategory = (c) => {

    if (c === "hepsi") {
      setFilteredEvents(events)
    } else {

      const filtered = events?.filter((i) => i.category == c);
      setFilteredEvents(filtered)
    }


  }




  if (user) {
    return (
      <>
        <Filter
          filterDate={filterDate}
          showAll={showAll}
          events={events}
          onFilterChange={handleFilterChange}
          query={query}
        />
        <div className='main-section'>
          <Sidebar
            categories={categories}
            filterCategory={filterCategory}
          />
          <div className="card-container">
            {filteredEvents?.map((event) => (
              <Card key={event.id} event={event} />
            ))}
          </div>

        </div>

      </>
    );
  }

  return (
    <ToAuthPage />
  );
};

export default ListView;
