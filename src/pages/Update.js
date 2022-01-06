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
                                <div className="mb-3">
                                    <label for="titleInput" className="form-label">Title of the lesson:</label>
                                    <input type="text" className="form-control" id="titleInput" value={editForm.title} name='title' placeholder="What's your lesson title?" onChange={handleChange}/>
                                </div>
                                <div className="mb-3">
                                    <label for="descriptionInput" className="form-label">Description of the lesson:</label>
                                    <textarea type="textarea" className="form-control" id="descriptionInput" value={editForm.description} name='description' placeholder='Enter a description of your lesson' onChange={handleChange}/>
                                </div>
                                <div className="mb-3">
                                    <label for="urlInput" className="form-label">Link to the lesson:</label>
                                    <input type="url" className="form-control" id="urlInput" value={editForm.url} name='url' placeholder='Example: https://google.com' onChange={handleChange}/>
                                </div>
                                <div>
                                    <p className="form-label">What category does this belong to?</p>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="category" id="devInput" value="dev" onChange={handleChange} checked/>
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
                                <div className="mt-3 d-flex">
                                    <button type="submit" className="btn btn-success me-auto">Update Lesson</button>
                                </div>
                            </form>
                            <button id='delete-btn' onClick={removeLesson} className="btn btn-danger">Delete Lesson</button>

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
                            <div className="mb-3">
                                <label for="titleInput" className="form-label">Title of the lesson:</label>
                                <input type="text" className="form-control" id="titleInput" value={editForm.title} name='title' placeholder="What's your lesson title?" onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label for="descriptionInput" className="form-label">Description of the lesson:</label>
                                <textarea type="textarea" className="form-control" id="descriptionInput" value={editForm.description} name='description' placeholder='Enter a description of your lesson' onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label for="urlInput" className="form-label">Link to the lesson:</label>
                                <input type="url" className="form-control" id="urlInput" value={editForm.url} name='url' placeholder='Example: https://google.com' onChange={handleChange}/>
                            </div>
                            <div>
                                <p className="form-label">What category does this belong to?</p>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="category" id="devInput" value="dev" onChange={handleChange} />
                                <label className="form-check-label" for="categoryInput">
                                    Development
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="category" id="desInput" value="design" onChange={handleChange} checked/>
                                <label className="form-check-label" for="categoryInput">
                                    Design
                                </label>
                            </div>
                            <div className="mt-3 d-flex">
                                <button type="submit" className="btn btn-success me-auto">Update Lesson</button>
                            </div>
                        </form>
                        <button onClick={removeLesson} className="btn btn-danger">Delete Lesson</button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
    
}

export default Update;