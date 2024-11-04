function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
              <a className="navbar-brand" href="#">
                  <img src="https://storage.googleapis.com/a1aa/image/Ma1BAkkrwj5rGJqWzj6pQGYfejw1FMtr7GCMLnOvfrayhNbnA.jpg" alt="Profile picture of a person" />
                  Hritik Raj Veer
              </a>
              <div className="collapse navbar-collapse">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">About Me</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Skills</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Project</a>
                      </li>
                  </ul>
                  <form className="d-flex">
                      <button className="btn btn-custom" type="submit">Let's connect</button>
                  </form>
              </div>
          </div>
      </nav>
  );

  
}

export default Navbar;

