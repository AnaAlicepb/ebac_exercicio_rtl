// src/components/PostComments/PostComments.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PostComments from './index';

test('insere dois comentários', () => {
  render(<PostComments />);

  const inputElement = screen.getByTestId('comment-input');
  const buttonElement = screen.getByTestId('add-comment');

  fireEvent.change(inputElement, { target: { value: 'Primeiro comentário' } });
  fireEvent.click(buttonElement);

  fireEvent.change(inputElement, { target: { value: 'Segundo comentário' } });
  fireEvent.click(buttonElement);

  const commentList = screen.getByTestId('comment-list');
  expect(commentList).toHaveTextContent('Primeiro comentário');
  expect(commentList).toHaveTextContent('Segundo comentário');
});
