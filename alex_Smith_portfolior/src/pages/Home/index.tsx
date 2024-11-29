import Hero from './Hero/Hero'
import NavBar from '../../Components/Nav/NavBar'
import WhatIDo from './WhatIDo/WhatIDo'
import Testimonials from './Testimonials/Testimonials'
import Client from './Client/Client'
import FunFact from './FunFact/FunFact'
import Footer from '../../Components/Footer/Footer'
const index = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <WhatIDo />
      <Testimonials />
      <Client />
      <FunFact />
      <Footer />
    </div>
  )
}

export default index
