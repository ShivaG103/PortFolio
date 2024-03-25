"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "StudyNotion",
    desc: "A MERN (MongoDB, Express.js, React.js, Node.js) Stack web-app, designed to replicate the functionality of popular online learning platforms like Udemy and Coursera. Users can register as either instructors or students. Instructors have the ability to create and upload courses, while students can browse, purchase, and enroll in courses. Key features include authentication, course management, payment integration, and a user-friendly interface for seamless navigation.",
    img: "/StudyNotion.jpeg",
    link: "https://studynotion-omega.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "PortFolio",
    desc: "This Web-App is Built with Next.js and Framer Motion, my portfolio website is more than just a showcase of my work – it's a testament to my passion for clean design and seamless user experience. Explore my Works and skills crafted for both aesthetics and functionality.",
    img: "/Portfolio.jpeg",
    link: "https://lama.dev",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Shopping Cart",
    desc: "A shopping interface which shows items adding/deleting from cart and summary of cart items. It is made using React and also uses Redux for state management.",
    img: "/ShoppingCart.jpeg",
    link: "https://shopping-cart-react-redux-demo.netlify.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Weather App",
    desc: "Developed a Weather web-app using Pure JavaScript, HTML, and CSS, integrating the OpenWeatherMap API. The web-app provides real-time weather updates for the user's current location and allows searching for weather update in specified locations.",
    img: "/WeatherApp.jpeg",
    link: "https://javascript-weather-information.netlify.app/",
  },
  {
    id: 5,
    color: "from-red-300 to-violet-300",
    title: "Razorpay Clone",
    desc: "This is a Frontend Clone of Razorpay Website designed using Tailwind CSS.",
    img: "/RazorPay.jpeg",
    link: "https://razorpay-clone-frontend-tailwindcss.netlify.app/",
  },
  {
    id: 6,
    color: "from-violet-300 to-blue-300",
    title: "Todo App",
    desc: "A Todo List web-app made in ReactJs which has options to add, update and delete the task, it also has custom confirmation modal and custom hook to close modal when clicked outside of the modal.",
    img: "/Todo.jpeg",
    link: "https://todo-app-reactjs-live.netlify.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85.7%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col gap-20 items-center justify-center text-8xl text-center">
          My Works
          <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col sm:flex-row h-[704px] sm:h-fit justify-between gap-8 text-white">
                  <div className='flex flex-col gap-8'>
                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">{item.title}</h1>
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                      <Image src={item.img} fill sizes="(max-width: 768px) 320px, (max-width:1024px) 384px, (max-width:1280px) 500px, 600px" alt={item.title} className='rounded-lg' />
                    </div>
                  </div>
                  <div className='flex flex-col gap-8 justify-end'>
                    <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">{item.desc}</p>
                    <Link href={item.link} target='_blank' rel="noopener noreferrer" className="flex justify-end">
                      <motion.button whileHover={{scale: 1.1, backgroundColor: '#4b5563', color:'rgb(255, 255, 255)'}} transition={{type:'spring', stiffness: 400}} className='p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded'>See Demo</motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                MERN Stack and Front-end Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center hover:text-lg hover:font-semibold transition-all duration-200"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
