import React, { useState } from 'react';
import './style.css'
export function MyForm() {
  return (
    <form >
      <div className='form-label'>
        <label>
        <span> Enter your first name:</span>
          <input type="text" name="firstName" />
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
        <span>Enter your Email:</span>
          <input type="text" name="email" />
        </label>
      </div>
      <div className='form-label'>
        <label>
        <span> Enter your Phone Number:</span>
          <input type="text" name="phoneNumber" />
        </label>
      </div>
      <div className='form-label'>
        <label>
        <span> Enter your Address:</span>
          <input type="text" name="address" />
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
}
