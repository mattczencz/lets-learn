import { useState } from 'react';

// Importing Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        <Container>
            <Row>
                <Col></Col>
                <Col id='form-card'>
                    <h2>Create Lesson:</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="titleInput" class="form-label">Title of the lesson:</label>
                            <input type="text" class="form-control" id="titleInput" value={newForm.title} name='title' placeholder="What's your lesson title?" onChange={handleChange}/>
                        </div>
                        <div class="mb-3">
                            <label for="descriptionInput" class="form-label">Description of the lesson:</label>
                            <textarea type="textarea" class="form-control" id="descriptionInput" value={newForm.description} name='description' placeholder='Enter a description of your lesson' onChange={handleChange}/>
                        </div>
                        <div class="mb-3">
                            <label for="urlInput" class="form-label">Link to the lesson:</label>
                            <input type="url" class="form-control" id="urlInput" value={newForm.url} name='url' placeholder='Example: https://google.com' onChange={handleChange}/>
                        </div>
                        <div>
                            <p class="form-label">What category does this belong to?</p>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="category" id="devInput" value="dev" onChange={handleChange}/>
                            <label class="form-check-label" for="categoryInput">
                                Development
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="category" id="desInput" value="design" onChange={handleChange}/>
                            <label class="form-check-label" for="categoryInput">
                                Design
                            </label>
                        </div>
                        <div class="mt-3">
                            <button type="submit" class="btn btn-success">Create Lesson</button>
                        </div>
                    </form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default Form;