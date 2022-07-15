import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function AddQuestionForm(props) {
  const [questionText, setQuestionText] = useState('');
  const [questionName, setQuestionName] = useState('');
  const [questionEmail, setQuestionEmail] = useState('');

  async function postQuestion () {
    const config = {
      headers: {
        Authorization: process.env.API_KEY
      },
      data: {
        body: questionText,
        name: questionName,
        email: questionEmail,
        product_id: props.product_id
      }
  }
  //   return axios.post(
  //     `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions`, config)
  };



  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postQuestion()
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
        }}
      >
        Hi, add a question!
        <input
          required
          type="text"
          placeholder="Question"
          onChange={(e) => {
            setQuestionText(e.target.value);
          }}
        ></input>
        <input
          required
          type="text"
          placeholder="Nickname"
          onChange={(e) => {
            setQuestionName(e.target.value);
          }}
        ></input>
        <input
          required
          type="text"
          placeholder="E-mail Address"
          onChange={(e) => {
            setQuestionEmail(e.target.value);
          }}
        ></input>
        <button>Submit A Question</button>
      </form>
    </div>
  );
}
