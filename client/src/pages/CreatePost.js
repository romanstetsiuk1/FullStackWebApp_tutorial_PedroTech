import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

function CreatePost() {

  const initialValues = {
    title: "",
    postText: "",
    userName: "",
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      console.log("Rekord w BD zapisany :)")
  });
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Pole wymagane!"),
    postText: Yup.string().required(),
    userName: Yup.string().min(3).max(15).required()
  });

  return (
    <div className='createPostPage'>
      <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit} 
        validationSchema={validationSchema}>
        <Form className='formContainer'>
          <label>Title: </label>
          <ErrorMessage name='title' component='span' />
          <Field 
            autocomplete='off'
            id='inputCreatePost' 
            name='title' 
            placeholder='Ex. Post title ...' 
          />
          <label>Post: </label>
          <ErrorMessage name='postText' component='span' />
          <Field 
            autocomplete='off'
            id='inputCreatePost' 
            name='postText' 
            placeholder='Ex. Post text ...' 
          />
          <label>User name: </label>
          <ErrorMessage name='userName' component='span' />
          <Field 
            autocomplete='off'
            id='inputCreatePost' 
            name='userName' 
            placeholder='Ex. John ...' 
          />
          <button type='submit'>Create Post</button>
        </Form>
      </Formik>
    </div>
  )
}

export default CreatePost