import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import CarouselSlide from './CarouselSlide';
import stockImg1 from "/stock1.jpg"
import stockImg2 from "/stock5.jpg"
import stockImg3 from "/stock3.jpg"


export function Carousel() {
  return (
    <Splide
      options={{
        rewind: true,
        autoplay: true,
        gap: '1rem',
      }}
    >
      <CarouselSlide img={stockImg1} link="http://www.ledayapi.com" header="Leda YAPI" p="İnşaat Grubumuz 2007 yılından bu yana sektördeki deneyimi ve uzman kadrosuyla, modern yaşamın ihtiyaçlarına uygun, estetik ve kaliteli konut projeleri üretmektedir.
 Kurulduğu günden bu yana, yenilikçi yaklaşımıyla dikkat çeken şirketimiz, sürdürülebilirlik ilkesini benimseyerek çevreye duyarlı projeler geliştirmektedir.
Projelerine Yurt içi ve Yurt dışı olarak devam etmektedir."/>
      <CarouselSlide img={stockImg2} link="http://www.aksuaritma.com" header="Aksu Arıtma" p="Arıtma Grubu   gerek TÜRKİYE gerekse YURTDIŞINDA çalışmayı ve uluslar arası perspektifi yakalamayı amaç edinmiştir. Bu gerekçe ile 2010 yılından itibaren Türkiye de Belediyeler, İller Bankası, DSİ ve Özel Sektör alanında onlarca projeyi tamamlamıştır. Uluslararası alanda IRAK, AFGANİSTAN, ÜRDÜN, KOSOVA, GÜRCİSTAN, MAKEDONYA ve BULGARİSTAN’da faaliyet göstermektedir." />
      <CarouselSlide img={stockImg3} link="http://www.ledapharma.com" header="Ledapharma" p="Sağlık Grubumuz İlaç, Gıda takviyeleri ve Kozmetik üretmek üzere 2015 yılında faaliyetine başlamış. Sağlıklı nesil yetişmesi ve sürdürülebilirliği üzerine çalışmalar yaparak Başta ülkemiz olmak üzere dünya genelinde 23 ülkeye ihracat yaparak hizmet ağını genişletmiştir. 
" />
    </Splide>
  );
}