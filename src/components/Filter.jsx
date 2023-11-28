
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Filter = ({ onFilterChange,filterDate,showAll}) => {
  const [category, setCategory] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    axios
      .get('http://localhost:3038/categories')
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    const selectedCategory = e.target.value;
    const newCategory = selectedCategory === 'Hepsi' ? undefined : selectedCategory;
    searchParams.set('order', 'asc');
    setSearchParams(searchParams);
    onFilterChange({ category: newCategory });
  };


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
      <div  className='filter-left'>
        <label className="">Kategori Seç</label>
        <select value={searchParams.get('category')} onChange={handleChange} className="">
          <option>Hepsi</option>
          {category?.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-btn">
        <button onClick={()=>filterDate("2023")} type="button" className="btn btn-warning">2023 Yılı Etkinlikleri</button>
        <button onClick={()=>filterDate("2024")} type="button" className="btn btn-success">2024 Yılı Etkinlikleri</button>
        <button onClick={()=>showAll()} type="button" className="btn btn-danger">Tümü</button>

      </div>



      <form onSubmit={handleSubmit} className="d-flex gap-1">
        <input placeholder="Etkinlik & Mekan Ara" className="form-control" type="text" />
        <button className="btn btn-success">Search</button>
      </form>
    </div>
  );
};

export default Filter;