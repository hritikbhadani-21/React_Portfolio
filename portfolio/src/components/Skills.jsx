const Skills = () => {
  return (
    <Container className="skills-container">
      <Fade bottom>
        <h2>Skills</h2>
      </Fade>
      <Fade bottom cascade>
        <Row className="skill-row">
          <Col className="skill-label">MACHINE LEARNING</Col>
          <Col>
            <ProgressBar now={90} className="progress-bar-custom" />
          </Col>
          <Col className="skill-label">JAVA</Col>
          <Col>
            <ProgressBar now={50} className="progress-bar-custom" />
          </Col>
        </Row>
        <Row className="skill-row">
          <Col className="skill-label">LOGO</Col>
          <Col>
            <ProgressBar now={70} className="progress-bar-custom" />
          </Col>
          <Col className="skill-label">PYTHON</Col>
          <Col>
            <ProgressBar now={40} className="progress-bar-custom" />
          </Col>
        </Row>
        <Row className="skill-row">
          <Col className="skill-label">WEB DISEGN</Col>
          <Col>
            <ProgressBar now={80} className="progress-bar-custom" />
          </Col>
          <Col className="skill-label">COMMUNICATION</Col>
          <Col>
            <ProgressBar now={20} className="progress-bar-custom" />
          </Col>
        </Row>
        <Row className="skill-row">
          <Col className="skill-label">FIGMA</Col>
          <Col>
            <ProgressBar now={50} className="progress-bar-custom" />
          </Col>
          <Col className="skill-label">CANVA</Col>
          <Col>
            <ProgressBar now={10} className="progress-bar-custom" />
          </Col>
        </Row>
      </Fade>
    </Container>
  );
};

export default Skills;