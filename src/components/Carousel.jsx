import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import CarouselSlide from './CarouselSlide';




export function Carousel() {
  return (
    <Splide
      options={{
        rewind: true,
        autoplay: true,
        gap: '1rem',
        lazyLoad: 'nearby',
      }}
    >
      <CarouselSlide img={`/stockp.jpg`} header="İnşaat Grubu"  p="İnşaat Grubumuz 2007 yılından bu yana sektördeki deneyimi ve uzman kadrosuyla, modern yaşamın ihtiyaçlarına uygun, estetik ve kaliteli konut projeleri üretmektedir." ></CarouselSlide>
      <CarouselSlide img={`/stockp2.jpg`} header="İnşaat Grubu"  p="Kurulduğu günden bu yana, yenilikçi yaklaşımıyla dikkat çeken şirketimiz, sürdürülebilirlik ilkesini benimseyerek çevreye duyarlı projeler geliştirmektedir.
          Projelerine yurt içi ve yurt dışı olarak devam etmektedir." ></CarouselSlide>
      <CarouselSlide img={`/stockp4.jpg`} header="Sağlık Grubu"  p="Sağlık Grubumuz İlaç, Gıda takviyeleri ve Kozmetik üretmek üzere 2015 yılında faaliyetine başlamıştır. Sağlıklı nesil yetişmesi ve sürdürülebilirliği üzerine çalışmalar yaparak başta ülkemiz olmak üzere dünya genelinde 23 ülkeye ihracat yaparak hizmet ağını genişletmiştir. " ></CarouselSlide>
      <CarouselSlide img={`/stockp3.jpg`} header="Arıtma Grubu"  p="Arıtma Grubu gerek TÜRKİYE gerekse YURTDIŞINDA çalışmayı ve uluslar arası perspektifi yakalamayı amaç edinmiştir. Bu gerekçe ile 2010 yılından itibaren Türkiye de Belediyeler, İller Bankası, DSİ ve Özel Sektör alanında onlarca projeyi tamamlamıştır.
          Uluslararası alanda IRAK, AFGANİSTAN, ÜRDÜN, KOSOVA, GÜRCİSTAN, MAKEDONYA ve BULGARİSTAN’da faaliyet göstermektedir." ></CarouselSlide>


    </Splide>
  );
}