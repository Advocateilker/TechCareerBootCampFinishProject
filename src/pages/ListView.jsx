
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from '../components/Filter';
import { useSearchParams } from 'react-router-dom';


const ListView = ({ events, user, setEvents }) => {
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




  const handleFilterChange = ({ category, query }) => {
    // Sıfırlama işlemi
    if (category === undefined && query === undefined) {
      setSearchParams('');
    } else {
      if (category !== undefined) {
        searchParams.set('category', category);
      }
      if (query !== undefined) {
        searchParams.set('query', query);
      }
      setSearchParams(searchParams);
    }
  };

  const filterDate=(date)=>{
    const filtered = events?.filter((i) => i.startDate.includes(date));
    setFilteredEvents(filtered)
  }

  const showAll=()=>{
    setFilteredEvents(events)
  }


  if (user) {
    return (
      <>
        <Filter
        filterDate={filterDate}
        showAll={showAll}

          setEvents={setEvents}

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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90%', marginTop: '88px' }}>
      Yetkisiz Sayfadasınız Lütfen Giriş Yapmak İçin{' '}
      <span style={{ color: 'red', textDecoration: 'underline' }} onClick={() => navigate('/')}>
        Tıklayınız
      </span>{' '}
    </div>
  );
};

export default ListView;
