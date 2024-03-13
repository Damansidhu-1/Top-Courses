import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData,apiUrl} from './data'
import { toast } from "react-toastify";

const App = () => {

  const[courses , setCourses] = useState(null);
  const[loading , setLoading] = useState(true);

  // i forgot to do ap call
  // doing api call first time in react
  // doing api call 
  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
      // save data into a variable
      // piche .data output dekh ke laea 
      // kyuki output vich ik hor key aa jide ch sara data 
      // console.log(output);
      console.log(output.data);
      
    } 
    catch (error) {
      toast.error("Something went Wrong ");
    }
    setLoading(false);
  }

  useEffect ( () => {
    fetchData();
  } ,[]) 
  
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Filter 
          filterData = {filterData}
        />
      </div>

      <div>
        <Cards 
          courses = {courses}
        />
      </div>

      
    </div>
  );
};

export default App;
