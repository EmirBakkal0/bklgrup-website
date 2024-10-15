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
      <CarouselSlide img={stockImg1} header="Leda Yapı" p="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, cumque eveniet vero quam vel pariatur cum maxime saepe nam illum exercitationem rerum omnis. Eaque a dicta repellat expedita possimus, laborum ullam corporis quaerat consequatur assumenda odio consectetur libero harum veritatis.
"/>
      <CarouselSlide img={stockImg2} header="Aksu Arıtma" p="      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae impedit deserunt tempora laborum pariatur culpa! Officiis veniam facilis eum ipsa!
" />
      <CarouselSlide img={stockImg3} header="Ledapharma" p="      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae impedit deserunt tempora laborum pariatur culpa! Officiis veniam facilis eum ipsa!
a"/>
    </Splide>
  );
}