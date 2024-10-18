import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function AccordionCustomStyles() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
        >
          Leda Yapı
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          İnşaat Grubumuz 2007 yılından bu yana sektördeki deneyimi ve uzman kadrosuyla, modern yaşamın ihtiyaçlarına uygun, estetik ve kaliteli konut projeleri üretmektedir.
          Kurulduğu günden bu yana, yenilikçi yaklaşımıyla dikkat çeken şirketimiz, sürdürülebilirlik ilkesini benimseyerek çevreye duyarlı projeler geliştirmektedir.
          Projelerine yurt içi ve yurt dışı olarak devam etmektedir.

        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
        >
          Ledapharma
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          Sağlık Grubumuz İlaç, Gıda takviyeleri ve Kozmetik üretmek üzere 2015 yılında faaliyetine başlamıştır. Sağlıklı nesil yetişmesi ve sürdürülebilirliği üzerine çalışmalar yaparak başta ülkemiz olmak üzere dünya genelinde 23 ülkeye ihracat yaparak hizmet ağını genişletmiştir.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
        >
          Aksu Arıtma
        </AccordionHeader>

        <AccordionBody className="pt-0 text-base font-normal">
          Arıtma Grubu gerek TÜRKİYE gerekse YURTDIŞINDA çalışmayı ve uluslar arası perspektifi yakalamayı amaç edinmiştir. Bu gerekçe ile 2010 yılından itibaren Türkiye de Belediyeler, İller Bankası, DSİ ve Özel Sektör alanında onlarca projeyi tamamlamıştır.
          Uluslararası alanda IRAK, AFGANİSTAN, ÜRDÜN, KOSOVA, GÜRCİSTAN, MAKEDONYA ve BULGARİSTAN’da faaliyet göstermektedir.

        </AccordionBody>
      </Accordion>
    </>
  );
}