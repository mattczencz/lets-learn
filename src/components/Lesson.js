import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import {FaTrash, FaEdit} from 'react-icons/fa';

import '../styles/lesson.scss';

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
                <Card.Footer className='d-flex justify-content-between'>
                    <small className="text-muted"><a rel="noreferrer" target="_blank" href={`${props.url}`}>View Lesson</a></small>
                    <small id="buttons">
                        <a href={`/edit/${props.id}`}><FaEdit/> / <FaTrash/></a>
                    </small>
                </Card.Footer>
            </Card>
        </Col>  
    )
}

export default Lesson;