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
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [filteredEvents, setFilteredEvents] = useState(events);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3038/categories')
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

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

      setFilteredEvents(events);
    } else {

      let filteredList = events;

      setFilteredEvents(filteredList);
    }
  };


  const filterCategory = (c) => {

    if (c === "hepsi") {
      setFilteredEvents(events)
    } else {

      const filtered = events?.filter((i) => i.category == c);
      setFilteredEvents(filtered)
    }


  }

  const handleDate = () => {
    const filtered = events.filter(event => {
      const eventDate = new Date(event.startDate);
      return eventDate >= new Date(startDate) && eventDate <= new Date(endDate);
    });
    setFilteredEvents(filtered);
  };

  const handleClearDate = () => {
    setStartDate('');
    setEndDate('');
    setFilteredEvents(events);
  };
  if (user) {
    return (
      <>
        <Filter
          onFilterChange={handleFilterChange}
          query={query}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          handleFilter={handleDate}
          startDate={startDate}
          endDate={endDate}
          handleClearDate={handleClearDate}
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
