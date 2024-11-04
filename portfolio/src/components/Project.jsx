const projects = [
  {
      id: 1,
      src: "https://storage.googleapis.com/a1aa/image/q4JRmkkinXq7BFjzCA4ZfY4U7Oagup8I82GCpdmmgHHJG02JA.jpg",
      alt: "Project 1: A product designer with passion to web"
  },
  {
      id: 2,
      src: "https://storage.googleapis.com/a1aa/image/vTHRvAIxHZZCLxf8Jqf8qRLiasTJwTuaWdrsRmmSFNsPMotTA.jpg",
      alt: "Project 2: Benefits About Online Learning Expertise"
  },
  {
      id: 3,
      src: "https://storage.googleapis.com/a1aa/image/QrIhhbtTpJZeK6S1fCK7cUp6nWdOfJE37FTRTl6sfLeBiBtdC.jpg",
      alt: "Project 3: Up to 50% off the most popular services"
  },
  {
      id: 4,
      src: "https://storage.googleapis.com/a1aa/image/lVNzYytaAuoONNXDF4ZzPpj7cnsoUT5RhVffTTKIu3dTMotTA.jpg",
      alt: "Project 4: Softdash Product & Sass HTML5 Landing & Multiple Template"
  }
];

function Project() {
  return (
      <div>
          <h1>Projects</h1>
          <div className="project-row">
              {projects.map(project => (
                  <div key={project.id} className="project-col">
                      <img src={project.src} alt={project.alt} className="project-img" />
                  </div>
              ))}
          </div>
      </div>
  );
}

export default Project;