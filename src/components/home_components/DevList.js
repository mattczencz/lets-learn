// Importing Lesson component
import Lesson from "../Lesson"

// Importing Bootstrap Components 
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import CardGroup from "react-bootstrap/CardGroup"

// Importing Styling
import '../../styles/home_styles/list.scss'

function DevList({devLessons}) {

    // Array to hold 4 Lessons
    const cappedLessons = []

    let i = 0;
    while(i < 4){
        
        // If there are no lesson to pull from, display a message
        if(i === 0 && devLessons[i] === undefined){
            return (
                <div className="list-container my-5">
                    <div className="list-container-top mb-2">
                        <h3>Development:</h3>
                        <a href="/development">View All</a>
                    </div>
                    <Container fluid>
                        <Row>
                            <CardGroup>
                                <h2>There are no lessons yet... add some!</h2>
                            </CardGroup>
                        </Row>
                    </Container>
                </div>
            )
        } 
        // If the count is higher than the available lessons, exit the loop
        else if(devLessons[i] === undefined){
            break;
        }

        cappedLessons.push(
            <Lesson sm={12} md={6} lg={3} {...devLessons[i]} key={devLessons[i].id}/>
        )

        i++
    }


    return (
        <div className="list-container my-5">
            <div className="list-container-top mb-2">
                <h3>Development:</h3>
                <a href="/development">View All</a>
            </div>
            <Container fluid>
                <Row>
                    <CardGroup>
                        {cappedLessons}
                    </CardGroup>
                </Row>
            </Container>
        </div>
    )
}

export default DevList;