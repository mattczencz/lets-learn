import AllDev from "../components/all_lessons_components/AllDev";
import SubHero from "../components/all_lessons_components/SubHero";

function Development({allLessons}) {

    // Filtering through all of the lessons, returning ones that are marked "dev"
    const devLessons = allLessons.filter((lesson) => lesson.category === "dev")

    return(
        <>
            <SubHero img="" icon=""/>
            <AllDev devLessons={devLessons.sort((a,b) => a.id - b.id)}/>
        </>
    )
}

export default Development;