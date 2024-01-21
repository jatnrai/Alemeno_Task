import React, { useEffect } from "react";
import CourseCard from "./ListComponents/CourseCard";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Container } from "react-bootstrap";
import "./CourseList.css";
// import SubHeader from "./ListComponents/SubHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../Redux/FirebaseApi";

export default function CourseList() {
  const dispatch = useDispatch();
  const coursesState = useSelector((state) => state.courses);

  useEffect(() => {
    const courseAllData = () => {
      dispatch(fetchCourses());
    };
    courseAllData();
  }, [dispatch]);

  // console.log("your dispatch data : " + coursesState.data);

  return (
    <div className="CourseListMain">
      <Header />
      {/* <SubHeader /> */}
      <Container fluid>
        <h2 className="text-center my-3">
          Explore Courses That Suit Your Needs
        </h2>
        {coursesState.status === "loading" ? (
          <h1>Your Data is loading....</h1>
        ) : (
          <CourseCard CourseData={coursesState.data} />
        )}
      </Container>
      <Footer />
    </div>
  );
}
