import Col from 'react-bootstrap/Col';

function Lesson (props) {
    return (
        <Col sm md={6} lg={3}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.category}</p>
        </Col>
    )
}

export default Lesson;