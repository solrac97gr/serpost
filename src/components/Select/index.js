import React from "react";

export const Select = ({ value, handleChange }) => {
  return (
    <select name="country" id="country" value={value} onChange={handleChange}>
      <option value="2019" defaultValue>2019</option>
      <option value="2018">2018</option>
      <option value="2017">2017</option>
      <option value="2016">2016</option>
      <option value="2015">2015</option>
      <option value="2014">2014</option>
      <option value="2013">2013</option>
      <option value="2012">2012</option>
    </select>
  );
};
