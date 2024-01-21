import { createSlice } from '@reduxjs/toolkit';

const individualCourseSlice = createSlice({
  name: 'course',
  initialState: {
    courseData: null,
    enrolledCoursesArr: [],
  },
  reducers: {
    getCourse(state, action) {
      state.courseData = action.payload;
    },
    enrolledCourses(state, action){
        state.enrolledCoursesArr.push(action.payload);
    }
  },
});

export default individualCourseSlice.reducer;
export const { getCourse, enrolledCourses } = individualCourseSlice.actions;
