import React from 'react';
import './style.css';
import { HooksQuestions } from './HooksQuestions.js';
import { MyForm } from './FormSubmitQuestions.js';
import './OutputQuestions.js';

export default function App() {
  return (
    <div>
      <HooksQuestions />
      -------------------------------------------------------------------------------------
      <MyForm />
      -------------------------------------------------------------------------------------
    </div>
  );
}
