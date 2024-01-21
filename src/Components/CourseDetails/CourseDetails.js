import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import "./CourseDetails.css";
import DetailsHeader from "./DetailsComponents/DetailsHeader";
import DetailsContent from "./DetailsComponents/DetailsContent";
import { useSelector } from "react-redux";

export default function CourseDetails() {
  const course = useSelector((state) => state.course);
  // console.log("Course Data:", course.courseData);
  const courseData = course.courseData;

  return (
    <div>
      <Header />
      <Container className="CourseDetailsContain">
        <>
          {courseData ? (
            <>
              <DetailsHeader coursInfo={courseData} />

              <DetailsContent coursInfo={courseData} />
            </>
          ) : (
            <p>No Data Found</p>
          )}
        </>
      </Container>
      <Footer />
    </div>
  );
}
