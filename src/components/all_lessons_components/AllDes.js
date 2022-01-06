// Importing Lesson component
import Lesson from "../Lesson"

// Importing Bootstrap Components 
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CardGroup from "react-bootstrap/CardGroup"

// Importing Styling
import '../../styles/home_styles/list.scss'


function AllDes({desLessons}) {

    const lessons = []

    if(desLessons.length !== 0){
        for(let lesson of desLessons){
            lessons.push(
                <Lesson sm={12} md={6} lg={3} {...lesson} key={lesson.id}/>
            )
        }
    } else {
        return (
            <>
                <Container className="mb-4 mt-3">
                    <Row>
                        <Col>
                            <h2>Design Lessons</h2>
                            <h5>Let's design natural interactions that keep our users coming back.</h5>
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
                        <h2>Design Lessons</h2>
                        <h5>Let's design natural interactions that keep our users coming back.</h5>
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

export default AllDes;