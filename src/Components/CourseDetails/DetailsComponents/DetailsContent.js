import React, { useState } from 'react'
import { Button, Container, Row, Col } from "react-bootstrap";


export default function DetailsContent( { coursInfo }) {
    const [showAll, setShowAll] = useState(false);

  return (
    <div>
        <div className="CourseInfo_content">
      <Container>
      <div className="CourseBasicSection">
        <Row className="basicSection">
        <h2>This course includes</h2>
      <Col xs={12} md={6}>
        <p style={{ margin: ".5rem 0 .3rem 0", fontFamily: "serif"}}>
          Duration: {coursInfo.duration + " Weeks"}
        </p>
      </Col>
      <Col xs={12} md={6}>
        <p style={{ margin: ".5rem 0 .3rem 0", fontFamily: "serif"}}>
          Schedule: {coursInfo.schedule ?  coursInfo.schedule.split(",")[0] : "no data found"}
        </p>
      </Col>
      <Col xs={12} md={6}>
        <p style={{ margin: ".5rem 0 .3rem 0", fontFamily: "serif"}}>
          Timings: {coursInfo.schedule ?  coursInfo.schedule.split(",")[1] : "no data found"}
        </p>
      </Col>
      <Col xs={12} md={6}>
        <p style={{ margin: ".5rem 0 .3rem 0", fontFamily: "serif"}}>
          Location: {coursInfo.location}
        </p>
      </Col>
    </Row>
      </div>

    <div className="PreRequirment">
    <h2>Pre-Requisites</h2>
    <div className="Prerequirment">
        {coursInfo.prerequisites == undefined ? "no data found" : coursInfo.prerequisites.map((prerequisite, index) => (
            <li className="requirements" key={index}>
            {prerequisite}
            </li>
        ))}
    </div>
    </div>

    <div className="fullSyllabus">
      <h2>syllabus</h2>
      <div className="syllabus">
        {coursInfo.syllabus === undefined
          ? "no data found"
          : coursInfo.syllabus.slice(0, showAll ? coursInfo.syllabus.length : 2).map((syllabus, index) => (
              <div key={index} className="syllabusCard mb-3">
                <div className="syllabusWeek">{"Week " + syllabus.week}</div>
                <div className="SyllabusContentSection">
                <div>{syllabus.topic}</div>
                <div>{syllabus.content}</div>
                </div>
                  
              </div>
            ))}
      </div>
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </div>

      </Container>
      </div>
    </div>
  )
}
