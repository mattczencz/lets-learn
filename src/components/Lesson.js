import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Lesson (props) {
    return (
        <Col sm={props.sm} md={props.md} lg={props.lg} className='mb-3'>
            <Card>
                <Card.Img variant="top" src={`https://dummyimage.com/600x400/242424/ffffff&text=${props.category}+lesson`} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">View Lesson</small>
                </Card.Footer>
            </Card>
        </Col>  
    )
}

export default Lesson;