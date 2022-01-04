// Importing Style 
import '../../styles/home_styles/hero.scss';

function Hero () {
    return(
        <section id="home-hero">
            <div id="home-hero-circle">
                <h1>OR</h1>    
            </div>    
            <div className="home-hero-box">
                <h1>DEV</h1>
            </div>
            <div className="home-hero-box">
                <h1>DESIGN</h1>
            </div>
        </section>
    )
}

export default Hero;