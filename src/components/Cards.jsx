import React from 'react'
import Card from './Card'

import LedapharmaLogo from "/ledapharma_logo.png"
import LedayapiLogo from "/ledayapi_logo.jpg"
import AksuaritmaLogo from "/aksuaritma_logo.jpg"

function Cards() {
  return (
    <div className='grid md:grid-cols-3 '>
        <Card  img={LedayapiLogo} name="Leda Yapı" link="http://www.ledayapi.com" p="Modern yaşamın ihtiyaçlarına uygun, estetik ve kaliteli konut projeleri üretmeye devam etmektedir." />
        <Card img={AksuaritmaLogo} name="Aksu Arıtma" link="http://www.aksuaritma.com" p="Yurt içi ve yurt dışında yüzlerce proje tamamlanın verdiği gurur ile yoluna devam etmektedir." />
        <Card img={LedapharmaLogo} name="Leda Pharma" link="http://www.ledapharma.com" p="Gıda takviyeleri ihracatında 23 ülkeye olan ihracatımızı artırarak hizmet ağını genişletmeye davam etmektedir. "/>

        </div>
  )
}

export default Cards