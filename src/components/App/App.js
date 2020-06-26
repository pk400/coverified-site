import React from 'react'

import './App.css'

import NavbarLink from '../../atoms/NavbarLink/NavbarLink'

import Person from '../../molecules/Person/Person'
import ContactForm from '../../molecules/ContactForm/ContactForm'

import Content from '../Content/Content'
import Navbar from '../Navbar/Navbar'
import TeamContainer from '../TeamContainer/TeamContainer'

const App = () => {
  return (
    <div>
      <Navbar logoSrc='/logo.png'>
        <NavbarLink text='What We Do' href='' />
        <NavbarLink text='Our Journey' href='' />
        <NavbarLink text='Sign Up' href='' />
        <NavbarLink text='Who We Are' href='' />
        <NavbarLink text='Contact Us' href='' />
      </Navbar>
      <Content>
        <section>
          <h1>Nice to meet you. We're CoVerified.</h1>
          <span>We provide social media platforms a framework to make vetted experts more visible to help fight the spread of disinformation of COVID-19 related news on social media.</span>
        </section>
        <section>
          <span>We’re one of the winners of MIT’s Beat the Pandemic Challenge blah blah</span>
          <img src='/mit_logo.png' alt='MIT hackathon logo' />
        </section>
        <section className='centered'>
          <div>
            <h1>Experts are you ready?</h1>
          </div>
          <div>
            <button>Let's Get Started</button>
          </div>
        </section>
        <section>
          <h1>Meet Our Team</h1>
          <TeamContainer>
            <Person
              name='Chris Chang'
              position='Technical'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget ex dictum, pellentesque nisl non, mollis enim.'
              imageSrc='https://ca.slack-edge.com/T016CHH88BS-U015NUFDH19-d5efa432aab3-192' />
            <Person
              name='Caitlyn Cheng'
              position='Technical'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget ex dictum, pellentesque nisl non, mollis enim.'
              imageSrc='https://ca.slack-edge.com/T016CHH88BS-U015G0W3EBY-790aefd422c6-192' />
            <Person
              name='Vansh Tibrewal'
              position='Technical'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget ex dictum, pellentesque nisl non, mollis enim.'
              imageSrc='https://ca.slack-edge.com/T013LACJWMU-U0142C9JENT-83e81d91746e-512' />
            <Person
              name='Abhishek Varghese'
              position='Technical'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget ex dictum, pellentesque nisl non, mollis enim.'
              imageSrc='https://ca.slack-edge.com/T013LACJWMU-U014HAT2SN7-2cbf73fa6ad8-512' />
            <Person
              name='Paula Fróes'
              position='Technical'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget ex dictum, pellentesque nisl non, mollis enim.'
              imageSrc='https://ca.slack-edge.com/T013LACJWMU-U0142C5CQ7R-30fd123e5b7a-512' />
            <Person
              name='Jothi Arul Prakash'
              position='Technical'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget ex dictum, pellentesque nisl non, mollis enim.'
              imageSrc='https://ca.slack-edge.com/T013LACJWMU-U0156V7HEUQ-8f4459d92d4c-512' />
            <Person
              name='Joel Aro'
              position='Technical'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget ex dictum, pellentesque nisl non, mollis enim.'
              imageSrc='https://ca.slack-edge.com/T016CHH88BS-U015UTQHC9J-1e4611ba99f3-192' />
          </TeamContainer>
        </section>
        <section className='centered'>
          <span>Contact Us</span>
          <ContactForm />
        </section>
      </Content>
    </div>
  )
}

export default App
