import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';

test('Author Quiz', () => {
  const div = document.createElement("div");
  ReactDOM.render(<AuthorQuiz />, div);
});
