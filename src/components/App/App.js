import React from 'react'

import './App.css'

import Button from '../../atoms/Button/Button'
import NavbarLink from '../../atoms/NavbarLink/NavbarLink'

import Person from '../../molecules/Person/Person'
import ContactForm from '../../molecules/ContactForm/ContactForm'

import Content from '../Content/Content'
import Navbar from '../Navbar/Navbar'
import TeamContainer from '../TeamContainer/TeamContainer'

const App = () => {
  const navbarLinks = ['What We Do', 'Our Journey', 'Sign Up', 'Who We Are',
    'Contact Us']
  const refs = navbarLinks.map(React.createRef)
  const handleScrollTo = (ref) => {
    const el = ref.current ? ref.current : ref
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  return (
    <div>
      <Navbar logoSrc='/logo.png'>
        {navbarLinks.map((links, i) =>
          <NavbarLink text={links} onClick={() => handleScrollTo(refs[i])} />)}
      </Navbar>
      <Content>
        <section ref={refs[0]}>
          <h1>Nice to meet you. We're CoVerified.</h1>
          <span>We provide social media platforms a framework to make vetted experts more visible to help fight the spread of disinformation of COVID-19 related news on social media.</span>
        </section>
        <section ref={refs[1]} className='cols-2'>
          <span>We’re one of the winners of MIT’s Beat the Pandemic Challenge blah blah... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus sollicitudin orci, id rhoncus purus ultricies a. Quisque nec gravida lectus. Integer porta ex eget enim facilisis dignissim.</span>
          <img src='/mit_logo.png' alt='MIT hackathon logo' />
        </section>
        <section ref={refs[2]} className='centered'>
          <div>
            <h1>Experts are you ready?</h1>
          </div>
          <div>
            <Button text="Let's get started" />
          </div>
        </section>
        <section ref={refs[3]} className='centered'>
          <h1>Meet The Team</h1>
          <TeamContainer>
            <Person
              name='Chris Chang'
              position='Title'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget ex dictum, pellentesque nisl non, mollis enim.'
              imageSrc='https://ca.slack-edge.com/T016CHH88BS-U015NUFDH19-d5efa432aab3-192' />
            <Person
              name='Caitlyn Cheng'
              position='Title'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget ex dictum, pellentesque nisl non, mollis enim.'
              imageSrc='https://ca.slack-edge.com/T016CHH88BS-U015G0W3EBY-790aefd422c6-192' />
            <Person
              name='Vansh Tibrewal'
              position='Title'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget ex dictum, pellentesque nisl non, mollis enim.'
              imageSrc='https://ca.slack-edge.com/T013LACJWMU-U0142C9JENT-83e81d91746e-512' />
            <Person
              name='Abhishek Varghese'
              position='Title'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget ex dictum, pellentesque nisl non, mollis enim.'
              imageSrc='https://ca.slack-edge.com/T013LACJWMU-U014HAT2SN7-2cbf73fa6ad8-512' />
            <Person
              name='Paula Fróes'
              position='Title'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget ex dictum, pellentesque nisl non, mollis enim.'
              imageSrc='https://ca.slack-edge.com/T013LACJWMU-U0142C5CQ7R-30fd123e5b7a-512' />
            <Person
              name='Jothi Arul Prakash'
              position='Title'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget ex dictum, pellentesque nisl non, mollis enim.'
              imageSrc='https://ca.slack-edge.com/T013LACJWMU-U0156V7HEUQ-8f4459d92d4c-512' />
            <Person
              name='Joel Aro'
              position='Title'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget ex dictum, pellentesque nisl non, mollis enim.'
              imageSrc='https://ca.slack-edge.com/T016CHH88BS-U015UTQHC9J-1e4611ba99f3-192' />
          </TeamContainer>
        </section>
        <section ref={refs[4]} className='centered'>
          <h1>Contact Us</h1>
          <ContactForm />
        </section>
      </Content>
    </div>
  )
}

export default App
