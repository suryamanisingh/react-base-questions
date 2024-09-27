import React, { useState } from 'react';
import './style.css'
export function FormSubmitQuestions() {
  const [form, setForm] = useState()
  const handleChange = () => {

  }
  return (
    <form >
      <div className='form-label'>
        <label>
          <span> Enter your first name:</span>
          <input onChange={handleChange} type="text" name="firstName" />
        </label>
      </div>
      <div className='form-label'>
        <label>
          <span> Enter your Last name:</span>
          <input type="text" name="lastName" />
        </label>
      </div>
      <div className='form-label'>
        <label>
          <span>Enter your Phone No:</span>
          <input type="text" name="email" />
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
}
