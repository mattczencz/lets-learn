import Card from 'react-bootstrap/Card';

function Lesson (props) {
    return (
        <Card>
            <Card.Img variant="top" src={`https://via.placeholder.com/100x50/242424/fff?text=${props.category}+lesson`} />
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
    )
}

export default Lesson;