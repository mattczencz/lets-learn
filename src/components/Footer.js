function Footer () {
    return (
        <div className="container-fluid">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-5 border-top">
                <p className="col-md-4 mb-0 text-muted">Let's Learn ~ Matt Czencz</p>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="/development" className="nav-link px-2 text-muted">Development</a></li>
                    <li className="nav-item"><a href="/design" className="nav-link px-2 text-muted">Design</a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;