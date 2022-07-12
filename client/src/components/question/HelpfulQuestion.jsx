import React from 'react';

export default function HelpfulQuestion() {
  return (
    <div style={{ display: 'inline' }}>
      <span style={{ margin: '10px' }}>
        Helpful?
        <u style={{ margin: '5px' }}>Yes</u>
        <span>(#OfYeses)</span>
      </span>
      <span style={{ margin: '10px' }}>|</span>
      <u style={{ margin: '10px' }}>Add Answer</u>
    </div>
  );
}
