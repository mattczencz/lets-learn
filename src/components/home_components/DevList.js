// Importing Lesson component
import Lesson from "../Lesson"

// Importing Bootstrap Components 
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

// Importing Styling
import '../../styles/home_styles/list.scss'

function DevList({devLessons}) {

    // Array to hold 4 Lessons
    const cappedLessons = []

    for(let i = 0; i < 4; i++){
        cappedLessons.push(
            <Lesson {...devLessons[i]} key={devLessons[i].id}/>
        )
    }


    return (
        <div className="list-container my-5">
            <div className="list-container-top mb-2">
                <h3>Development:</h3>
                <a href="/development">View All</a>
            </div>
            <Container fluid>
                <Row>
                    {cappedLessons}
                </Row>
            </Container>
        </div>
    )
}

export default DevList;