import React from 'react'
import Navbar from '../components/Navbar'
import { AccordionCustomStyles } from '../components/Accordion'
import Cards from '../components/Cards'
import { Carousel } from '../components/Carousel'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div >

      <Navbar />
      <main className="  mx-auto ">

        <Carousel />
      </main>
      <section className=' mx-auto container '>
        


        <Cards />
        <AccordionCustomStyles />
      </section>


      <Footer />


    </div>
  )
}
