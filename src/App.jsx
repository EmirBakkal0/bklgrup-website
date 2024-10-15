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
      <section className=' mx-auto container '>
        <div className='py-12 px-2'>
          <h3 className='text-lg font-bold' >BKL Grup Şirketleri olarak vizyonumuz:</h3>
          <ul className='list-disc'>
            <li>Sahip olduğumuz bilgi ve deneyimimizi; kurum kültürümüz, değerlerimiz, nitelikli insan kaynaklarımız ve mimari gücümüzle birleştirmek,</li>
            <li>Doğru zamanda, yatırım değeri yüksek projelere imza atmak,</li>
            <li> Güçlü adımlarla büyümek,</li>
            <li>Yatırımcılar için garantili yatırım kanalı olmak,</li>
            <li>Güvenilen ve tercih edilen şirketler arasında yer almak,</li>
            <li> Ülkemizin menfaatine hizmet eden projeler geliştirmektir.</li>
          </ul>



          <h3 className='text-lg font-bold' >BKL Grup Şirketleri olarak misyonumuz:</h3>
          <ul className='list-disc'>

            <li>  İnsana ve doğaya saygı felsefesini oluşturmak,  </li>
            <li>  Mimari ve teknolojideki güncel gelişmelerin takipçisi ve uygulayıcısı olmak,</li>
            <li>  Bireylerin yaşam kalitesini ve refahını yükseltmek,</li>
            <li>  Hayatı kolaylaştıran tasarımlara imza atmak,</li>
            <li>  Yatırımcılar için doğru ve güvenilir yatırım fırsatları oluşturmak,</li>
            <li>  Sunduğumuz hizmetlerin her aşamasında koşulsuz müşteri memnuniyetine ulaşmaktır.</li>
          </ul>
        </div>


        <Cards />
        <AccordionCustomStyles />
      </section>


      <Footer />


    </div>
  )
}
