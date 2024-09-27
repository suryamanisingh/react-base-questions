import React from 'react';
import './style.css';
import { HooksQuestions } from './HooksQuestions.js';
import { FormSubmitQuestions } from './FormSubmitQuestions.js';
import { TimeInterval } from './TimeInterval.js'
import { FetchMethod } from './FetchMethod.js'

// import './OutputQuestions.js';

export default function App() {
  return (
    <div>
      <Fieldset name="HooksQuestions.js">
        <HooksQuestions />
      </Fieldset>
      <Fieldset name="TimeInterval.js">
        <TimeInterval />
      </Fieldset>
      <Fieldset name="FormSubmitQuestions.js">
        <FormSubmitQuestions />
      </Fieldset>
      <Fieldset name="FetchMethod.js">
        <FetchMethod />
      </Fieldset>
    </div>
  );
}

function Fieldset({children, name}) {
  return <fieldset>
    <legend><code>{name}</code></legend>
    {children}
  </fieldset>
}