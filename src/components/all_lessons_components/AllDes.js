// Importing Lesson component
import Lesson from "../Lesson"

// Importing Bootstrap Components 
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

// Importing Styling
import '../../styles/home_styles/list.scss'

function AllDes({desLessons}) {

    const lessons = []

    for(let lesson of desLessons){
        lessons.push(
            <Lesson {...lesson} key={lesson.id}/>
        )
    }


    return (
            <Container fluid>
                <Row>
                    {lessons}
                </Row>
            </Container>
    )
}

export default AllDes;