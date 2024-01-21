import React from 'react';
import Header from "../Common/Header"
import Footer from "../Common/Footer"
import EnrolledCourse from './DashboardComponent/EnrolledCourse';
import { Col, Row } from 'react-bootstrap';
import "./Dashboard.css"
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


export default function StudentDashbord() {
  const erolledCourse = useSelector((state) => state.course);
  console.log("Your All Enrolled Course:", erolledCourse.enrolledCoursesArr);

  const EnrolledCourses = erolledCourse.enrolledCoursesArr;

  return (
    <div>
    <Header />
    {EnrolledCourses.length === 0 ? (
    <Row className='justify-content-center text-center NoCourseYet'>
    <Col sm={8}>
    <h5>You haven't Enrolled in course yet .!</h5>
    <Link to="/" className="EnrollBTN btn" style={{ backgroundColor: "#a435f0", color: "#fff", width: "60%" }}>Explore Courses</Link>
    </Col>
    </Row>
    ) : (
    <EnrolledCourse EnrolledCourseArr={EnrolledCourses}/>
    )}
    <Footer />
    </div>
  )
}
