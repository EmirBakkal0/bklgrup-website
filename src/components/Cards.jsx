import React from 'react'
import Card from './Card'

import LedapharmaLogo from "/ledapharma_logo.png"
import LedayapiLogo from "/ledayapi_logo.jpg"
import AksuaritmaLogo from "/aksuaritma_logo.jpg"

function Cards() {
  return (
    <div className='grid md:grid-cols-3 '>
        <Card  img={LedayapiLogo} name="Leda Yapı" link="http://www.ledayapi.com" />
        <Card img={AksuaritmaLogo} name="Aksu Arıtma" link="http://www.aksuaritma.com" />
        <Card img={LedapharmaLogo} name="Leda Pharma" link="http://www.ledapharma.com" />

        </div>
  )
}

export default Cards