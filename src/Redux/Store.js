import { configureStore } from "@reduxjs/toolkit";
import  courseSlice  from "./Slices/CourseSlices";
import  individualCourseSlice  from "./Slices/IndividualCourseSlice"

const store = configureStore({
    reducer: {
        courses: courseSlice,
        course: individualCourseSlice,
    },
});

export default store;