import Card from "./Card";

const Cards = (props) => {

    let courses = props.courses;
    let allCourses = [];

    // converting data into one array
    // kyuki pehla 4 array bne hoe c (see console for that)
    // return you a list of all courses recieved from the api response
    const getCourses = () => {

        Object.values(courses).forEach( (courseCategory) =>{
            // ethe charo different categoryis aa jaangia
            courseCategory.forEach( (course) => {
                // ethe har category de vich de object aa jaange
                allCourses.push(course);
            } )
        } )
        return allCourses;

    }

    return (
        <div>
            {!courses ? (
                <div>
                    <p> No Data Found</p>
                </div>
            ) :(
                getCourses().map( (course) => {
                    return (
                        <Card key ={course.id}  course={course} />
                    );
                } )
            ) }
        </div>
    );
}

export default Cards;