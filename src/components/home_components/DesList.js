// Importing Lesson component
import Lesson from "../Lesson";

// Importing Bootstrap Components 
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

// Importing Styling
import '../../styles/home_styles/list.scss'

function DesList({desLessons}) {

    // Array to hold 4 Lessons
    const cappedLessons = []

    for(let i = 0; i < 4; i++){
        cappedLessons.push(
            <Lesson {...desLessons[i]} key={desLessons[i].id}/>
        )
    }

    return (
        <div className="list-container">
            <div className="list-container-top">
                <h3>Design:</h3>
                <a href="/design">View All</a>
            </div>
            <Container fluid>
                <Row>
                    {cappedLessons}
                </Row>
            </Container>
        </div>
    )
}

export default DesList;