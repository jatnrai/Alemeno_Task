import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseDetails from './Components/CourseDetails/CourseDetails';
import CourseList from './Components/CourseList/CourseList';
import StudentDashbord from './Components/StudentDashbord/StudentDashbord';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/student-dashboard" element={<StudentDashbord />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
