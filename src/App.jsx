import React from 'react'
import Navbar from './components/Navbar'
import { AccordionCustomStyles } from './components/Accordion'
import Cards from './components/Cards'
import { Carousel } from './components/Carousel'
import Footer from './components/Footer'

export default function App() {
  return (
    <div >

      <Navbar />
      <main className="  mx-auto ">

        <Carousel />
      </main>
      <section className=' mx-auto container'>
        <p className=' mx-auto container text-center py-10 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in. Molestiae vel deleniti alias nesciunt velit numquam placeat unde voluptatibus voluptate, qui dolores eaque aliquam quisquam rem ea eius quo.</p>

        <Cards />
        <AccordionCustomStyles />
      </section>


      <Footer />
      

    </div>
  )
}
