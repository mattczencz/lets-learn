// Importing Hero Component
import Hero from "../components/home_components/Hero";

// Importing List Components
import DevList from "../components/home_components/DevList";
import DesList from "../components/home_components/DesList";

function Home({allLessons}) {

    // Filtering through all of the lessons, returning ones that are marked "dev"
    const devLessons = allLessons.filter((lesson) => lesson.category === "dev")

    // Filtering through all of the lessons, returning ones that are marked "design"
    const desLessons = allLessons.filter((lesson) => lesson.category === "design")

    return(
        <>
        {/* Hero component */}
        <Hero/>
        
        {/* List components */}
        <DevList devLessons={devLessons}/>
        <DesList desLessons={desLessons}/>
        </>
    )
}

export default Home;