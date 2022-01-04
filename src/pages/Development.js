function Development({allLessons}) {
    const devLessons = allLessons.map((lesson) => {
        return(
            <h1>{lesson.title}</h1>
        )
    })

    return(
        <div>
            {devLessons}
        </div>
    )
}

export default Development;