import Card from "./Card";

const Cards = (props) => {

    let courses = props.courses;
    // console.log("Printing data in cards");
    // console.log(courses);
    
    // converting data into one array
    // kyuki pehla 4 array bne hoe c (see console for that)
    // return you a list of all courses recieved from the api response
    function getCourses() {

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

    return (
        <div>
            {
                getCourses().map( (course) => {
                    return (
                        <Card key ={course.id}  course={course} />
                    );

                    
                } )
            }
        </div>
    );
}

export default Cards;