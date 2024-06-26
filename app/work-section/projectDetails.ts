export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "STAGESPLASH",
    description:
      "Designed and Developed it's full landing page , to showcase their services and mark their online presence.",
    technologies: ["ReactJs", "Tailwind CSS", "Framer motion"],
    github: "https://github.com/0xSahilx/STAGExSPLASH",
    demo: "https://stag-ex-splash.vercel.app/",
    image: require(".//../../public/projects/stagesplash.png"),
    available: true,
  },
  {
    id: 1,
    name: "HACKXLR8",
    description:
      "A Web Page built for university hackathon  for the hackathon, get registraion and realease results.",
    technologies: ["NextJs " , "Tailwind CSS    ","Framer Motion  "],
    github: "https://github.com/0xSahilx/tantransh",
    demo: "https://hackathon-new.vercel.app/",
    image: require(".//../../public/projects/hackxlr8.png"),
    available: true,
  },
  {
    id: 2,
    name: "Capzient",
    description:
      "Capzient is a place where we help new startups to make their startup ready for market.",
    technologies: ["Next.js", "Typescript", "Lenis"],
    github: "/",
    demo: "https://capzient.com/",
    image: require(".//../../public/projects/capzient.png"),
    available: true,
  },
  {
    id: 3,
    name: "GetitDone",
    description:
      "Made a landing page for my agency empowering new startups with the tools and support needed to achieve success.",
    technologies: ["NextJs", "Tailwind CSS", "EmailJs"],
    github: "https://github.com/0xSahilx/GetitDone",
    demo: "https://getit-done-ten.vercel.app/",
    image: require(".//../../public/projects/getitdone.png"),
    available: true,
  },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
