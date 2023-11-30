
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Filter = ({ onFilterChange, query, setStartDate, setEndDate,handleFilter,startDate,endDate,handleClearDate }) => {
  const [category, setCategory] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    axios
      .get('http://localhost:3038/categories')
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));
  }, []);



  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target[0].value;
    searchParams.set('query', query);
    setSearchParams(searchParams);
    onFilterChange({ query });
    e.target[0].value = '';
  };



  return (
    <div className="filter">

      <div className='date-filter'>
        <div className='date-input'>
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className='date-input'>
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className='date-buttons'>
        <button className='btn date-btn' onClick={handleFilter}>Filtrele</button>
        <button className='btn date-btn' onClick={handleClearDate}>Temizle</button>

        </div>


      </div>



      <form onSubmit={handleSubmit} className="d-flex gap-1">
        <input placeholder="Etkinlik & Mekan Ara" className="form-control" type="text" />
        <button className="btn btn-success">{!query ? "Ara" : "Temizle"}</button>
      </form>
    </div>
  );
};

export default Filter;
