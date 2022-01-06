// Importing Lesson component
import Lesson from "../Lesson"

// Importing Bootstrap Components 
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CardGroup from "react-bootstrap/CardGroup"

// Importing Styling
import '../../styles/all_lessons_styles/sub-page.scss'

function AllDev({devLessons}) {
console.log(devLessons)
    const lessons = []

    if(devLessons.length !== 0){
        for(let lesson of devLessons){
            lessons.push(
                <Lesson sm={12} md={6} lg={3} {...lesson} key={lesson.id}/>
            )
        }
    } else {
        return(
            <>
            <Container className="mb-4 mt-3">
                <Row>
                    <Col>
                        <h2>Development Lessons</h2>
                        <h5>Let's develop a better world. One new skill at a time.</h5>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <CardGroup>
                        <h3>It looks like no lessons have been added yet... add some!</h3>
                    </CardGroup>
                </Row>
            </Container>
        </>       
        )
    }
    


    return (
        <>
            <Container className="mb-4 mt-3">
                <Row>
                    <Col>
                        <h2>Development Lessons</h2>
                        <h5>Let's develop a better world. One new skill at a time.</h5>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <CardGroup>
                        {lessons}
                    </CardGroup>
                </Row>
            </Container>
        </>       
    )
}

export default AllDev;