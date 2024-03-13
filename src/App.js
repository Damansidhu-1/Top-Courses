import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData,apiUrl} from './data'
import { toast } from "react-toastify";
import Loader from "./components/Loader";

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
      // console.log(output.data);
      
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
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2">
        <div>
          <Filter 
            filterData = {filterData}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? ( <Loader />) : ( <Cards courses ={courses} />)
          }
        </div>
      </div>

      
    </div>
  );
};

export default App;
