import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import CourseDetails from "../CourseDetails";
import { useDispatch, useSelector } from "react-redux";
import { enrolledCourses } from "../../../Redux/Slices/IndividualCourseSlice"


export default function DetailsHeader({ coursInfo }) {
  const [enroll , setEnroll] = useState(false)
  const dispatch = useDispatch();
  const erolledCourseId = useSelector((state) => state.course);


  console.log("Updated State after enrollment:", erolledCourseId.enrolledCoursesArr);
  
  const Enrolled = (coursInfo) => {
    if (coursInfo && coursInfo.id) {
      const isAlreadyEnrolled = erolledCourseId.enrolledCoursesArr.some(
        (enrolledCourse) => enrolledCourse.id === coursInfo.id
      );
      setEnroll(isAlreadyEnrolled);
    } else {
      console.error("Invalid coursInfo:", coursInfo);
    }
  };
  

  const EnrollCourseHandler = (coursInfo) => {
    console.log("Enrolled Course:", coursInfo);
    dispatch(enrolledCourses(coursInfo));
    setEnroll(true);
  };

  useEffect(() => {
    Enrolled(coursInfo)
  }, [erolledCourseId.enrolledCoursesArr]);

  return (
    <div>
      <div className="CourserInfo_Header">
        <div className="CourseInfoContainer">
          <Container className="CourseInfoContainerHeader">
            <div key={coursInfo.id} className="headerCourse">
              <div className="ImageContainer">
                <img src={coursInfo.thumbnail} style={{ width: "90%" }} />
              </div>
              <div
                className="contentArea"
                style={{ textAlign: "start", width: "90%", margin: "0 auto" }}
              >
                <h2>{coursInfo.name}</h2>
                <span style={{ fontWeight: "500", fontSize: "17.5px" }}>
                  {coursInfo.description}
                </span>
                <p
                  style={{
                    margin: ".8rem 0 .3rem 0",
                    fontFamily: "serif",
                    fontSize: "19px",
                  }}
                >
                  {"Created by " + coursInfo.instructor}
                </p>
              </div>

              <div className="SubscribeSection">
                <h5>Enroll for free for this Course</h5>
                <p
                  style={{
                    margin: ".1rem",
                    fontFamily: "serif",
                    fontSize: "21px",
                  }}
                >
                  Adminssions are {coursInfo.enrollmentStatus}
                </p>
                {enroll === true ? (
                  <button
                  className="EnrollBTN btn"
                  style={{ backgroundColor: "#a435f0", color: "#fff" }}
                >
                  You Enrolled in this course
                </button>
                ) :(
                <button
                  onClick={() => EnrollCourseHandler(coursInfo)}
                  className="EnrollBTN btn"
                  style={{ backgroundColor: "#a435f0", color: "#fff" }}
                >
                  Enroll Now
                </button>
                )}
              </div>

              {/* <LoginModal
                show={showLoginModal}
                onClose={handleLoginModalClose}
              /> */}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
