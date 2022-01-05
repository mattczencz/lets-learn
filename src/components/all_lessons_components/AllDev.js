// Importing Lesson component
import Lesson from "../Lesson"

// Importing Bootstrap Components 
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import CardGroup from "react-bootstrap/CardGroup"

// Importing Styling
import '../../styles/home_styles/list.scss'

function AllDev({devLessons}) {

    const lessons = []

    for(let lesson of devLessons){
        lessons.push(
            <Lesson sm={12} md={6} lg={3} {...lesson} key={lesson.id}/>
        )
    }


    return (
            <Container fluid>
                <Row>
                    <CardGroup>
                        {lessons}
                    </CardGroup>
                </Row>
            </Container>
    )
}

export default AllDev;