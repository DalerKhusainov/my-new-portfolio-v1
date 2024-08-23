// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// Swiper required modules
import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Брендирование",
    description:
      "Выделяйтесь с помощью брендинга, который соответствует вашим целям.",
  },
  {
    icon: <RxPencil2 />,
    title: "Дезайн",
    description:
      "Мои дизайнерские услуги создают функциональные и привлекательные решения для сайтов.",
  },
  {
    icon: <RxDesktop />,
    title: "Разработка",
    description:
      "Предлагаю веб-разработку от простых страниц до сложных приложений под ваши нужды.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "Предоставляю SEO услуги для улучшения позиций вашего сайта, включая оптимизацию.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex px-6 py-8 rounded-lg cursor-pointer bg-[#412f7b26] h-max md:h-[330px] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[#5941a926] transition-all duration-300">
              {/* ICON */}
              <div className="mb-4 text-4xl text-accent">{item.icon}</div>
              {/* TITLE & DESC */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal text-pretty">
                  {item.description}
                </p>
              </div>
              {/* ARROW */}
              <div className="text-3xl">
                <RxArrowTopRight className="transition-all duration-300 group-hover:rotate-45 group-hover:text-accent" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
