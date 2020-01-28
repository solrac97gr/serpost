import React from 'react'
import {Select} from '../Select'

export const  Form = ({handleSubmit,year,handleChange,tracking,setTracking}) =>{
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Datos de búsqueda</h2>
        <hr />
        <div className="form-group year">
          <label htmlFor="country">Año del envío</label>
          <Select value={year} handleChange={handleChange}/>
        </div>
        <div className="form-group tracking">
          <label htmlFor="tracking">Nro de tracking</label>
          <input
            type="text"
            className="form-input"
            value={tracking}
            onChange={e => setTracking(e.target.value)}
            required
          />
        </div>
        <div className="form-group cta">
          <button id="btn-search">Buscar</button>
        </div>
      </form>


    </div>
  );
}
