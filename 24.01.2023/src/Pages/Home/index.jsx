import React from 'react'
import MessageUsSection4 from '../../Components/MessageUsSection4'
import Section1 from '../../Components/Section1'
import Section2 from '../../Components/Section2'
import Cards from '../../Components/Section3MapCard'
import Footer from '../../Layouts/Footer'
import Navbar from '../../Layouts/Navbar'

function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <Section1></Section1>
      <Section2></Section2>
      <Cards></Cards>
      <MessageUsSection4></MessageUsSection4>
      <Footer></Footer>
    </>
  )
}

export default HomePage