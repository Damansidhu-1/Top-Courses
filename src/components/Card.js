import {FcLike} from "react-icons/fc"

const Card = (props) => {

    let course =props.course
    // console.log("printing data in card");
    // console.log(course);
    return (
        <div>
            
            <div>
                <img src={course.image.url} alt={course.image.alt} ></img>

            </div>

            <div>
                <button>
                    <FcLike fontSize="1.75rem" />
                </button>
            </div>

            <div>
                <p>{course.title}</p>
                <p>{course.description}</p>
            </div>

        </div>
    );
}

export default Card;