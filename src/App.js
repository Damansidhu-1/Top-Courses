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
  const[category , setCategory] = useState(filterData[0].title);
  // the above line set default value of category to all 
  // filterdata[0].title points to all (for more see data.js)

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
            category={category}
            setCategory={setCategory}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? ( <Loader />) : ( <Cards courses ={courses} category = {category} />)
          }
        </div>
      </div>

      
    </div>
  );
};

export default App;
