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
        <Card img={LedapharmaLogo} name="Leda Pharma" link="http://www.ledapharma.com" p="Ledapharma İlaç, Merkezi Kocaeli de bulunan firmamız Tavşanlı OSB de bulunan fabrikasında kendi ruhsatlı ürünlerini ve yine sektörde faaliyet gösteren diğer firmalara fason üretim yapmaktadır. Firmamız sıvı dolum hattı, blister hattı, saşe dolum hatları, toz dolum, kapsül hattı ve tablet üretim hatlarıyla faaliyetlerini genişletmiştir. Kozmetik üretimi için arge faaliyleri devam etmekte olup bu çalışmalar sonunda kozmetik üretimine geçilmesi de planlanmaktadır."/>

        </div>
  )
}

export default Cards