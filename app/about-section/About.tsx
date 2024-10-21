import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <div className="mb-8 text-left text-[40px] font-bold leading-[0.9em] text-[#e4ded7] sm:text-[45px] md:mb-12 md:text-[60px] lg:text-[80px]">
          BUILDING BEAUTIFUL WEBSITES AND DIGITAL SOLUTIONS.
        </div>

        <div className="mx-auto flex w-full flex-col lg:max-w-[1200px] lg:flex-row lg:gap-16">
          <div className="mb-10 flex flex-col gap-4 text-[18px] font-medium leading-relaxed text-[#e4ded7] md:gap-6 md:text-[20px] lg:mb-12 lg:text-[22px]">
            <AnimatedBody
              text="At Getit.Dev, we provide complete web solutions — from designing sleek interfaces to building functional applications tailored to your needs."
            />
            <AnimatedBody
              text="Whether it’s Shopify stores, WordPress sites, or custom builds, we ensure your online presence reflects your brand perfectly."
            />
            <AnimatedBody
              text="Our team stays on top of trends to deliver modern, user-friendly solutions that grow with your business."
            />
            <AnimatedBody
              text="Focus on your business, and let us handle the tech. We bring creativity and code together to help your brand thrive online."
            />
          </div>

          <div className="mb-20 flex flex-col gap-4 text-[18px] font-normal leading-relaxed text-[#e4ded7]/80 sm:mb-32 md:gap-6 md:text-[16px] lg:max-w-[30%]">
            <div className="text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[22px]">
              Our Services
            </div>
            <AnimatedBody text="🔹 Shopify Development – Scalable, robust e-commerce solutions." />
            <AnimatedBody text="🔹 WordPress Sites – Beautiful, easy-to-manage websites." />
            <AnimatedBody text="🔹 Framer Designs – High-performance, unique web experiences." />
            <AnimatedBody text="🔹 Custom Code – Tailored solutions to fit your business needs." />
          </div>
        </div>

        <div className="mt-8 flex flex-col lg:mt-24">
          <SongCarousel />
          <AnimatedBody
            text="Ready to build something great? Let’s bring your ideas to life!"
            className="absolute bottom-10 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
