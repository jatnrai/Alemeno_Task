import React from "react";
import { Card, Container, Row, Col, ProgressBar } from "react-bootstrap";

export default function EnrolledCourses({ EnrolledCourseArr }) {
  return (
    <>
      <div className="my-4">
        <Container>
        <h3 className="text-center">Your All Enrolled Course are here </h3>
          {EnrolledCourseArr.map((course, index) => (
            <Row className="justify-content-center my-4" key={index}>
              <Col md={11}>
                <Card>
                  <Card.Body>
                    <Row>
                      <Col md={3}>
                        <Card.Img
                          src={course.thumbnail} // Assuming there's an 'image' property in your course object
                          alt={`Card Image for ${course.name}`} // Update accordingly
                          className="img-fluid"
                        />
                      </Col>
                      <Col md={9}>
                        <Card.Title
                          className="CardTitle m-0"
                          style={{ fontFamily: "ui-rounded" }}
                        >
                          {course.name}
                        </Card.Title>
                        <Card.Text style={{ fontFamily: "system-ui" }}>
                          {course.instructor}
                        </Card.Text>
                        <div className="CourseCardDuration d-flex justify-content-between flex-row pe-2">
                          <Card.Text className="InnerText mb-3">
                            {course.duration + " Week"}
                          </Card.Text>
                        </div>
                      </Col>
                    </Row>
                    <ProgressBar
                       now={75} 
                       label={`${75}%`}
                      className="mt-3"
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </>
  );
}
