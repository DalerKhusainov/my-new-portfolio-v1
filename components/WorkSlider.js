import Image from "next/image";
import Link from "next/link";
// icons
import { FaGithub, FaLink } from "react-icons/fa";
// Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// Swiper required modules
import { Pagination } from "swiper";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/projects/thumb1.jpg",
          live: "https://e-commerce-fakestoreapi-by-daler.netlify.app/",
          gitHub:
            "https://github.com/DalerKhusainov/e-commerce-website-fakestoreapi",
        },
        {
          title: "title",
          path: "/projects/thumb4.jpg",
          live: "https://wireframe-website.vercel.app/",
          gitHub:
            "https://github.com/DalerKhusainov/wireframe-design-conf-site",
        },
        {
          title: "title",
          path: "/projects/thumb3.jpg",
          live: "https://cryptocurrency-by-daler-khusainov.netlify.app/",
          gitHub: "https://github.com/DalerKhusainov/cryptocurrency-website",
        },
        {
          title: "title",
          path: "/projects/thumb2.jpg",
          live: "https://vr-landing-page-by-daler-khusainov.netlify.app/",
          gitHub: "https://github.com/DalerKhusainov/vr-landing-page",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/projects/thumb5.jpg",
          live: "https://nexter-real-estate-by-daler.netlify.app/",
          gitHub:
            "https://github.com/DalerKhusainov/nexter-real-estate-web-site",
        },
        {
          title: "title",
          path: "/projects/thumb6.jpg",
          live: "https://get-max-point-game.vercel.app/",
          gitHub: "https://github.com/DalerKhusainov/who-get-max-points-game",
        },
        {
          title: "title",
          path: "/projects/thumb7.jpg",
          live: "https://nikewebsite-nine.vercel.app/",
          gitHub:
            "https://github.com/DalerKhusainov/nike-website-tailwind-javascript-mastery",
        },
        {
          title: "title",
          path: "/projects/thumb3.jpg",
          live: "",
          gitHub: "",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-center overflow-hidden rounded-lg group"
                >
                  <div className="relative flex items-center justify-center overflow-hidden group">
                    {/* image */}
                    <Image src={image.path} width={500} height={300} alt="" />
                    {/* overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    {/* title */}
                    <div className="absolute bottom-0 transition-all duration-300 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        {/* title part 1 */}
                        <div className="p-2 text-white delay-100 rounded-full hover:text-accent bg-primary/30 hover:bg-primary">
                          <a
                            href={image.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaLink className="text-lg" />
                          </a>
                        </div>
                        {/* title part 2 */}
                        <div className="translate-y-[500%] text-white hover:text-accent group-hover:translate-y-0 transition-all duration-300 delay-150 p-2 rounded-full bg-primary/30 hover:bg-primary">
                          <a
                            href={image.gitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub className="text-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
