import { useState } from "react";
import Card from "./Card";

const Cards = (props) => {

    let courses = props.courses;
    // console.log("Printing data in cards");
    // console.log(courses);

    let category = props.category;
    const[likedCourses , setLikedCourses] = useState([]);
    
    // converting data into one array
    // kyuki pehla 4 array bne hoe c (see console for that)
    // return you a list of all courses recieved from the api response
    function getCourses() {

        if(category === "All") {
            // ethe thalle likhe allCourses di declaration ch mistake hoe c 
            // ehnu bahr define krta c getCourses de
            let allCourses = [];

            Object.values(courses).forEach( array =>{
                // ethe charo different categoryis aa jaangia
                array.forEach( courseData => {
                    // ethe har category de vich de object aa jaange
                    allCourses.push(courseData);
                } )
            } )
            return allCourses;
        }
        else{
            //main sirf specific categiry ka data array krunga  
            return courses[category];
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map( (course) => {
                    return (
                        <Card key ={course.id}  course={course} likedCourses ={likedCourses} setLikedCourses = {setLikedCourses} />
                    );

                    
                } )
            }
        </div>
    );
}

export default Cards;