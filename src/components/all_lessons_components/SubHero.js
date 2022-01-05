// Importing Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaLaptopCode, FaPaintBrush } from 'react-icons/fa';

// Importing Styling
import '../../styles/all_lessons_styles/sub-hero.scss'

function SubHero ({icon}) {
    if(icon === "dev"){
        return (
            <Container className='mb-5' fluid id="sub-hero" style={{backgroundImage: "url(https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)"}}>
                <Row>
                    <Col>
                        <FaLaptopCode className='icon'/>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <Container className='mb-5' fluid id="sub-hero" style={{backgroundImage: "url(https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80)"}}>
                <Row>
                    <Col>
                        <FaPaintBrush className='icon'/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SubHero;