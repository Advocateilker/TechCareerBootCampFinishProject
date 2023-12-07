import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const Filter = ({ onFilterChange, query, setStartDate, setEndDate, handleFilter, startDate, endDate, handleClearDate }) => {
  const [searchParams, setSearchParams] = useSearchParams();
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
      <div className=' date-filter'>
        <div className=' date-input'>
          <label> Start Date </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className=' date-input'>
          <label> End Date </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className='date-buttons'>
          <button className='btn date-btn' onClick={()=>{
            handleFilter();
            toast.success(`${startDate} ve ${endDate} tarihleri arası filtrelendi.`)
            }}> Filtrele </button>
          <button className='btn date-btn' onClick={()=>{
            handleClearDate();
            toast.warning(`tarih filteresi temizlendi`)
            }}> Temizle </button>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input placeholder="Etkinlik & Mekan Ara" className="form-control" type="text" />
        <button className="btn btn-success">{!query ? "Ara" : "Temizle"}</button>
      </form>
    </div>
  );
};

export default Filter;
