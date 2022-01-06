import { useState } from 'react';

// Importing Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubHero from '../components/all_lessons_components/SubHero';

// Importing Styling
import '../styles/form.scss';

function Form (props) {
    const [newForm, setNewForm] = useState({
        title: "",
        description: "",
        url: "",
        category: ""
    })

    const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createLessons(newForm)
        setNewForm({
            title: "",
            description: "",
            url: "",
            category: ""
        })
    }
    

    return (
        <>
            <SubHero icon="create"/>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col id='form-card' className="mt-4" xs={10} sm={10} md={8} xl={6}>
                        <h2>Create Lesson:</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label for="titleInput" className="form-label">Title of the lesson:</label>
                                <input type="text" className="form-control" id="titleInput" value={newForm.title} name='title' placeholder="What's your lesson title?" onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label for="descriptionInput" className="form-label">Description of the lesson:</label>
                                <textarea type="textarea" className="form-control" id="descriptionInput" value={newForm.description} name='description' placeholder='Enter a description of your lesson' onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label for="urlInput" className="form-label">Link to the lesson:</label>
                                <input type="url" className="form-control" id="urlInput" value={newForm.url} name='url' placeholder='Example: https://google.com' onChange={handleChange}/>
                            </div>
                            <div>
                                <p className="form-label">What category does this belong to?</p>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="category" id="devInput" value="dev" onChange={handleChange}/>
                                <label className="form-check-label" for="categoryInput">
                                    Development
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="category" id="desInput" value="design" onChange={handleChange}/>
                                <label className="form-check-label" for="categoryInput">
                                    Design
                                </label>
                            </div>
                            <div className="mt-3">
                                <button type="submit" className="btn btn-success">Create Lesson</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
        
    )
}

export default Form;