import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'Courses'));
    const courseData = []
     querySnapshot.docs.map((doc) => {
        courseData.push({
            id: doc.id,
            ...doc.data(),
        })
      });

      return courseData;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
});
