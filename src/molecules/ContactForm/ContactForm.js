import React from 'react'

import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contact-form'>
      <form>
        <div>
          Name <input type='text' />
        </div>
        <div>
          Email Address <input type='text' />
        </div>
        <div>
          Message <textarea></textarea>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
