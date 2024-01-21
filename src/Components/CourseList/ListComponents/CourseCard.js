import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../CourseList.css";
import { Link } from "react-router-dom";
import { getCourse } from "../../../Redux/Slices/IndividualCourseSlice"
import { useDispatch } from "react-redux";


export default function CourseCard({ CourseData }) {
  const dispatch = useDispatch();


  const truncateWords = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };

  
  const StoreData = (Course) => {
    if (Course) {
      dispatch(getCourse(Course));
      // console.log("CourseId I'm from component", Course);
    } else {
      console.error("Course data is undefined or null.");
    }
  };
  
  

  var CourseName;
  return (
    <Container className="CourseList">
      <Row xs={1} md={2} lg={3} className="justify-content-around">
        {CourseData == undefined
          ? "no data found"
          : CourseData.map((Course, index) => (
            <Col key={index} className="mb-4">
              <Card
                style={{ width: "18rem", borderRadius: ".8rem" }}
              >
              
              <Link className="CourseLink" to="/course-details" onClick={() => StoreData(Course)}>
                <div className="CourseImgContainer">
                  <Card.Img
                    variant="top"
                    src={Course.thumbnail}
                    className="CourseCardImage"
                    style={{ borderRadius: ".8rem  .8rem 0 0" }}
                  />

                </div>
                  <Card.Body className="p-2">
                    <Card.Title
                      className="CardTitle m-0"
                      style={{ fontFamily: "ui-rounded" }}
                    >
                     { CourseName = truncateWords(Course.name, 4)}
                    </Card.Title>
                    <Card.Text style={{ fontFamily: "system-ui" }}>
                      {Course.instructor}
                    </Card.Text>
                    <div className="CourseCardDuration d-flex justify-content-between flex-row pe-2">
                      <Card.Text className="InnerText mb-3">
                        {Course.duration + " Weeks"}
                      </Card.Text>
                      <Card.Text className="InnerText mb-3">
                        {Course.location + " Live Classes"}
                      </Card.Text>
                    </div>
                    <Card.Text className="InnerText">
                      {"Admissions are " + Course.enrollmentStatus}{" "}
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
              </Col>
            ))}
      </Row>
    </Container>
  );
}
