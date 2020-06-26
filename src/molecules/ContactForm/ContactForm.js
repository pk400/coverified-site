import React from 'react'

import './ContactForm.css'

import Button from '../../atoms/Button/Button'
import TextInputField from '../../atoms/TextInputField/TextInputField'

const ContactForm = () => {
  return (
    <div className='contact-form'>
      <form>
        <div className='form-row'>
          <div className='form-group'>
            <label>Name</label>
            <TextInputField />
          </div>
          <div className='form-group'>
            <label>Email Address</label>
            <TextInputField />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group'>
            <label>Message</label>
            <textarea></textarea>
          </div>
        </div>
        <div className='form-row'>
          <Button type='submit' text='Submit' />
        </div>
      </form>
    </div>
  )
}

export default ContactForm
