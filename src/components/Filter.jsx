
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Filter = ({ onFilterChange, selectedOption, setSelectedOption,events, filterDate, showAll }) => {
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
    const newCategory = selectedCategory
  
    console.log(newCategory);
  
    // Arama parametrelerini güncelle
    searchParams.set('category', newCategory);
    setSearchParams(searchParams);
  
    // Filtre değişikliğini tetikle
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

  const uniqueDistricts = [...new Set(events.map(event => event.district))];

 
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onFilterChange({ district: selectedValue }); // ilçe seçildiğinde filtreleme yap
  };

  return (
    <div className="filter">
      <div className='filter-left'>
        <label className="">Kategori Seç</label>
        <select value={searchParams.get('category')} onChange={handleChange} className="">
          {category?.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-btn">
        <button onClick={() => filterDate("2023")} type="button" className="btn btn-warning">2023 Yılı Etkinlikleri</button>
        <button onClick={() => filterDate("2024")} type="button" className="btn btn-success">2024 Yılı Etkinlikleri</button>
        <button onClick={() => showAll()} type="button" className="btn btn-danger">Tümü</button>
      </div>
      <div className='filter-left'>
      <label className="">İlçe Seç</label>
        <select  value={selectedOption} onChange={handleSelectChange} >
          {uniqueDistricts?.map((u)=> <option value={u}>{u}</option> )}
        </select>

      </div>



      <form onSubmit={handleSubmit} className="d-flex gap-1">
        <input placeholder="Etkinlik & Mekan Ara" className="form-control" type="text" />
        <button className="btn btn-success">Search</button>
      </form>
    </div>
  );
};

export default Filter;
