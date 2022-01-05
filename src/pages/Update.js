import { useState } from 'react';

// Importing Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubHero from '../components/all_lessons_components/SubHero';

// Importing Style
import '../styles/form.scss';

function Update (props) {
    const id = props.match.params.id
    const allLessons = props.allLessons
    const lesson = allLessons.find(l => l.id.toString() === id)

    const [editForm, setEditForm] = useState(lesson)

    const handleChange = event => {
        setEditForm({...editForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.updateLessons(editForm, lesson.id)
        props.history.push("/")
    }

    const removeLesson = () => {
        props.deleteLesson(lesson.id)
        props.history.push("/")
    }
    
    if(lesson.category === 'dev'){
        return (
            <>
                <SubHero icon="edit"/>
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col id='form-card' className="mt-4" xs={10} sm={10} md={8} xl={6}>
                            <h2>Update Lesson:</h2>
                            <form onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <label for="titleInput" class="form-label">Title of the lesson:</label>
                                    <input type="text" class="form-control" id="titleInput" value={editForm.title} name='title' placeholder="What's your lesson title?" onChange={handleChange}/>
                                </div>
                                <div class="mb-3">
                                    <label for="descriptionInput" class="form-label">Description of the lesson:</label>
                                    <textarea type="textarea" class="form-control" id="descriptionInput" value={editForm.description} name='description' placeholder='Enter a description of your lesson' onChange={handleChange}/>
                                </div>
                                <div class="mb-3">
                                    <label for="urlInput" class="form-label">Link to the lesson:</label>
                                    <input type="url" class="form-control" id="urlInput" value={editForm.url} name='url' placeholder='Example: https://google.com' onChange={handleChange}/>
                                </div>
                                <div>
                                    <p class="form-label">What category does this belong to?</p>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="category" id="devInput" value="dev" onChange={handleChange} checked/>
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
                                <div class="mt-3 d-flex">
                                    <button type="submit" class="btn btn-success me-auto">Update Lesson</button>
                                </div>
                            </form>
                            <button id='delete-btn' onClick={removeLesson} class="btn btn-danger">Delete Lesson</button>

                        </Col>
                    </Row>
                </Container>
            </>
            
        )
    }
    else {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col id='form-card'>
                        <h2>Update Lesson:</h2>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="titleInput" class="form-label">Title of the lesson:</label>
                                <input type="text" class="form-control" id="titleInput" value={editForm.title} name='title' placeholder="What's your lesson title?" onChange={handleChange}/>
                            </div>
                            <div class="mb-3">
                                <label for="descriptionInput" class="form-label">Description of the lesson:</label>
                                <textarea type="textarea" class="form-control" id="descriptionInput" value={editForm.description} name='description' placeholder='Enter a description of your lesson' onChange={handleChange}/>
                            </div>
                            <div class="mb-3">
                                <label for="urlInput" class="form-label">Link to the lesson:</label>
                                <input type="url" class="form-control" id="urlInput" value={editForm.url} name='url' placeholder='Example: https://google.com' onChange={handleChange}/>
                            </div>
                            <div>
                                <p class="form-label">What category does this belong to?</p>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="category" id="devInput" value="dev" onChange={handleChange} />
                                <label class="form-check-label" for="categoryInput">
                                    Development
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="category" id="desInput" value="design" onChange={handleChange} checked/>
                                <label class="form-check-label" for="categoryInput">
                                    Design
                                </label>
                            </div>
                            <div class="mt-3 d-flex">
                                <button type="submit" class="btn btn-success me-auto">Update Lesson</button>
                            </div>
                        </form>
                        <button onClick={removeLesson} class="btn btn-danger">Delete Lesson</button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
    
}

export default Update;