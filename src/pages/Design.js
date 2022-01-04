import AllDes from "../components/all_lessons_components/AllDes";

function Design({allLessons}) {

    // Filtering through all of the lessons, returning ones that are marked "design"
    const desLessons = allLessons.filter((lesson) => lesson.category === "design")

    return(
        <>
            <AllDes desLessons={desLessons.sort((a,b) => a.id - b.id)}/>
        </>
    )
}

export default Design;