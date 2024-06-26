"use client";

import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";


const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-150px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-150px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* container  */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 xl:w-1/2 lg:pr-0">
          {/* biography container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* biography title */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* biography desc */}
            <p className="text-lg">
              Hello! I'm Shivam, a budding software developer from Mumbai,
              Maharashtra. I recently graduated with a Master's in Computer
              Applications (MCA) and have a strong passion for web development.
              My focus lies in the MERN (MongoDB, Express.js, React.js, Node.js)
              stack, where I've honed my skills through hands-on projects. As a
              fresher eager to make my mark in the tech industry, I bring a
              fresh perspective and a hunger for learning.
            </p>
            {/* biography quote
            <span className="italic flex self-end">
              ~ Shivam Gupta
            </span> */}
            {/* biography sign svg */}
            <div className="self-end">
              <svg
                width="106"
                height="50"
                viewBox="0 0 126 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_3)">
                  <path
                    d="M30.192 12.448C29.808 13.5147 29.2533 14.432 28.528 15.2C27.8027 15.9253 26.7147 16.288 25.264 16.288C24.5813 16.288 23.9627 16.16 23.408 15.904C22.8533 15.6053 22.4053 15.1147 22.064 14.432C21.808 13.9627 21.68 13.4507 21.68 12.896C21.68 12.2133 21.8507 11.5947 22.192 11.04C22.576 10.4853 23.1093 10.1867 23.792 10.144C23.8773 10.144 23.9627 10.144 24.048 10.144C24.176 10.1013 24.2613 10.08 24.304 10.08C24.9867 10.08 25.52 10.336 25.904 10.848C26.032 11.0187 26.096 11.1893 26.096 11.36C26.096 11.6587 25.9253 11.9787 25.584 12.32C25.2853 12.6187 24.9867 12.9387 24.688 13.28C24.432 13.6213 24.368 14.0053 24.496 14.432C24.752 15.2 25.2213 15.584 25.904 15.584C26.544 15.584 27.2267 15.2427 27.952 14.56C28.72 13.8347 29.3173 12.832 29.744 11.552C29.872 11.296 29.936 10.9973 29.936 10.656C29.936 10.016 29.68 9.35467 29.168 8.672C28.656 7.98933 27.9947 7.49866 27.184 7.2C26.8427 7.072 26.4587 6.96533 26.032 6.88C25.648 6.79467 25.264 6.752 24.88 6.752C23.344 6.752 21.8293 7.2 20.336 8.096C18.8427 8.992 17.8187 10.2293 17.264 11.808C17.0507 12.3627 16.9013 12.896 16.816 13.408C16.7307 13.92 16.688 14.3893 16.688 14.816C16.688 16.0533 17.008 17.0987 17.648 17.952C18.288 18.8053 19.0987 19.5733 20.08 20.256C21.104 20.9387 22.1707 21.6427 23.28 22.368C24.3893 23.0507 25.4347 23.84 26.416 24.736C27.44 25.632 28.272 26.72 28.912 28C29.552 29.28 29.872 30.8587 29.872 32.736C29.872 33.8027 29.744 34.9973 29.488 36.32C29.232 37.6427 28.8053 39.1147 28.208 40.736C27.4827 42.6987 26.3947 44.4693 24.944 46.048C23.536 47.6693 21.8933 48.9493 20.016 49.888C18.1813 50.8267 16.24 51.296 14.192 51.296C12.784 51.296 11.376 51.04 9.968 50.528C7.87733 49.76 6.46933 48.7787 5.744 47.584C4.976 46.432 4.592 45.2587 4.592 44.064C4.592 43.2533 4.69867 42.4853 4.912 41.76C5.12533 41.0347 5.31733 40.3947 5.488 39.84C5.78667 38.9867 6.384 38.112 7.28 37.216C8.21867 36.32 9.264 35.5733 10.416 34.976C11.568 34.336 12.6347 34.016 13.616 34.016C14.0427 34.016 14.448 34.08 14.832 34.208C15.6427 34.4213 16.048 35.2747 16.048 36.768C16.048 37.1947 16.0053 37.6213 15.92 38.048C15.8347 38.4747 15.7067 38.9227 15.536 39.392C15.2373 40.2027 14.7893 40.864 14.192 41.376C13.6373 41.888 12.8907 42.144 11.952 42.144C11.4827 42.144 11.0347 42.1227 10.608 42.08C10.224 41.9947 9.92533 41.7813 9.712 41.44C9.66933 41.3547 9.62667 41.2693 9.584 41.184C9.584 41.0987 9.584 41.0133 9.584 40.928C9.584 40.2453 9.92533 39.6693 10.608 39.2C10.9493 38.944 11.2693 38.944 11.568 39.2C11.8667 39.456 12.1653 39.7333 12.464 40.032C12.8053 40.288 13.168 40.3733 13.552 40.288C14.2347 40.1173 14.6827 39.7333 14.896 39.136C15.1093 38.5387 15.216 37.8773 15.216 37.152C15.216 36.9387 15.216 36.7253 15.216 36.512C15.216 36.2987 15.1947 36.0853 15.152 35.872C15.1093 35.1467 14.7467 34.784 14.064 34.784C13.552 34.784 12.912 34.9973 12.144 35.424C11.4187 35.8507 10.672 36.384 9.904 37.024C9.17867 37.6213 8.53867 38.24 7.984 38.88C7.42933 39.4773 7.088 39.9467 6.96 40.288C6.576 41.3547 6.384 42.3573 6.384 43.296C6.384 45.5573 7.57867 47.136 9.968 48.032C10.224 48.1173 10.5227 48.16 10.864 48.16C11.7173 48.16 12.8693 47.968 14.32 47.584C15.8133 47.2 17.392 46.5813 19.056 45.728C20.72 44.8747 22.2773 43.7227 23.728 42.272C25.1787 40.8213 26.288 39.0293 27.056 36.896C27.44 35.872 27.7173 34.9333 27.888 34.08C28.0587 33.2267 28.144 32.4373 28.144 31.712C28.144 30.0907 27.7813 28.7467 27.056 27.68C26.3733 26.5707 25.456 25.6533 24.304 24.928C23.1947 24.2027 22.0213 23.5413 20.784 22.944C19.5467 22.3467 18.352 21.728 17.2 21.088C16.0907 20.4053 15.1733 19.616 14.448 18.72C13.7653 17.7813 13.424 16.608 13.424 15.2C13.424 14.688 13.4667 14.1333 13.552 13.536C13.68 12.896 13.872 12.2347 14.128 11.552C14.9813 9.16267 16.2187 7.456 17.84 6.432C19.504 5.408 21.2533 4.896 23.088 4.896C23.856 4.896 24.624 4.98133 25.392 5.152C26.16 5.28 26.9067 5.472 27.632 5.728C28.8693 6.15467 29.7013 6.688 30.128 7.328C30.5973 7.968 30.832 8.672 30.832 9.44C30.832 9.90933 30.768 10.4 30.64 10.912C30.5547 11.3813 30.4053 11.8933 30.192 12.448ZM52.7345 40.608C51.9665 41.7173 51.1132 42.5707 50.1745 43.168C49.2785 43.7227 48.4252 44 47.6145 44C46.8038 44 46.1425 43.7227 45.6305 43.168C45.0332 42.144 44.6065 41.0987 44.3505 40.032C44.1372 38.9227 43.9452 37.4933 43.7745 35.744C43.6465 33.9947 43.3692 31.648 42.9425 28.704C42.9425 28.704 42.8145 28.5547 42.5585 28.256C42.3025 27.9147 42.0038 27.744 41.6625 27.744C41.4492 27.744 41.2145 27.872 40.9585 28.128C40.7025 28.3413 40.4465 28.768 40.1905 29.408C39.5505 31.0293 39.0385 32.7147 38.6545 34.464C38.3132 36.2133 37.9932 37.8347 37.6945 39.328C37.3958 40.8213 37.0332 41.9947 36.6065 42.848C36.3078 43.4453 35.9238 43.744 35.4545 43.744C35.0705 43.744 34.7078 43.552 34.3665 43.168C34.3665 43.168 34.3878 42.784 34.4305 42.016C34.5158 41.2053 34.6225 40.224 34.7505 39.072C34.8785 37.8773 34.9852 36.7253 35.0705 35.616C34.9852 35.6587 34.7505 35.9147 34.3665 36.384C33.9825 36.8107 33.5558 37.2373 33.0865 37.664C32.6172 38.048 32.1905 38.2187 31.8065 38.176C31.5505 37.8773 31.6785 37.4293 32.1905 36.832C32.7025 36.192 33.2785 35.488 33.9185 34.72C34.6012 33.9093 35.0705 33.12 35.3265 32.352C35.9238 30.56 36.3292 28.64 36.5425 26.592C36.7985 24.544 37.0758 22.6027 37.3745 20.768C38.0145 16.8 38.6545 13.3227 39.2945 10.336C39.9772 7.34933 40.7878 5.04533 41.7265 3.424C42.6652 1.76 43.8598 0.927998 45.3105 0.927998C45.9078 0.927998 46.3772 1.16266 46.7185 1.632C47.0598 2.05866 47.2305 2.86933 47.2305 4.064C47.2305 4.23467 47.2305 4.448 47.2305 4.704C47.2305 4.96 47.2092 5.216 47.1665 5.472C46.9105 8.33066 46.3772 11.488 45.5665 14.944C44.7558 18.3573 43.3052 22.0693 41.2145 26.08C41.6838 25.952 42.1532 25.888 42.6225 25.888C43.4758 25.888 44.2652 26.0373 44.9905 26.336C45.7158 26.592 46.2065 26.8907 46.4625 27.232C46.7185 27.5733 46.8892 27.9573 46.9745 28.384C47.0598 28.8107 47.1025 29.3013 47.1025 29.856C47.1025 30.9227 46.9745 32.2453 46.7185 33.824C46.5052 35.4027 46.3985 37.2587 46.3985 39.392C46.3985 40.1173 46.6332 40.672 47.1025 41.056C47.6145 41.3973 48.2118 41.568 48.8945 41.568C49.4918 41.568 50.0678 41.44 50.6225 41.184C51.1772 40.928 51.6252 40.5653 51.9665 40.096C52.0092 40.0107 52.1372 39.968 52.3505 39.968C52.4785 39.968 52.5852 40.032 52.6705 40.16C52.7985 40.2453 52.8198 40.3947 52.7345 40.608ZM45.6305 3.552C45.6305 3.168 45.5452 2.976 45.3745 2.976C45.1185 2.976 44.7132 3.33867 44.1585 4.064C43.6465 4.74666 43.1345 5.64266 42.6225 6.752C42.1105 7.86133 41.6838 9.03466 41.3425 10.272C40.8305 12.2347 40.4038 14.0053 40.0625 15.584C39.7212 17.12 39.4438 18.9547 39.2305 21.088C39.1878 21.728 39.1452 22.4533 39.1025 23.264C39.0598 24.032 39.0172 24.6933 38.9745 25.248C38.9745 25.8027 38.9745 26.08 38.9745 26.08C39.6145 25.056 40.2972 24.0107 41.0225 22.944C41.7478 21.8773 42.3452 20.6187 42.8145 19.168C43.4545 17.2907 43.9665 15.3493 44.3505 13.344C44.7772 11.296 45.0972 9.39733 45.3105 7.648C45.5238 5.89867 45.6305 4.53333 45.6305 3.552ZM66.522 18.144C66.2233 18.144 65.9247 18.1013 65.626 18.016C65.37 17.888 65.114 17.7387 64.858 17.568C64.3033 17.312 64.026 16.7573 64.026 15.904C64.026 15.52 64.1113 15.0933 64.282 14.624C64.4953 14.1547 64.8153 13.7067 65.242 13.28C65.5407 12.9813 65.9033 12.832 66.33 12.832C66.714 12.832 67.0767 12.9813 67.418 13.28C67.5887 13.4507 67.6953 13.728 67.738 14.112C67.8233 14.4533 67.866 14.8373 67.866 15.264C67.866 15.776 67.8233 16.288 67.738 16.8C67.6527 17.2693 67.5033 17.6107 67.29 17.824C66.9913 18.0373 66.7353 18.144 66.522 18.144ZM59.994 43.296C58.4153 43.296 57.3273 42.9333 56.73 42.208C56.1327 41.4827 55.834 40.608 55.834 39.584C55.834 39.1147 55.8767 38.6453 55.962 38.176C56.0473 37.7067 56.154 37.2373 56.282 36.768C55.8553 37.536 55.194 38.432 54.298 39.456C53.402 40.4373 52.57 41.2267 51.802 41.824C51.6313 41.952 51.4607 42.016 51.29 42.016C51.034 42.016 50.906 41.8667 50.906 41.568C50.906 41.2267 51.034 40.928 51.29 40.672C53.082 38.7947 54.4473 37.28 55.386 36.128C56.3247 34.9333 57.05 33.9307 57.562 33.12C58.074 32.3093 58.5647 31.5627 59.034 30.88C59.418 29.6427 59.7593 28.448 60.058 27.296C60.3993 26.1013 60.9113 24.8853 61.594 23.648C61.8073 23.264 62.234 23.072 62.874 23.072C63.3007 23.072 63.6847 23.1787 64.026 23.392C64.3673 23.6053 64.538 23.968 64.538 24.48C64.538 24.736 64.474 25.0347 64.346 25.376C63.8767 26.6987 63.3647 27.8293 62.81 28.768C62.298 29.664 61.6153 30.816 60.762 32.224C59.866 33.6747 59.1407 35.0827 58.586 36.448C58.074 37.8133 57.818 38.9653 57.818 39.904C57.818 40.5013 57.946 40.992 58.202 41.376C58.5007 41.76 58.9273 41.952 59.482 41.952C60.6767 41.9947 61.594 41.8027 62.234 41.376C62.874 40.9067 63.4073 40.4587 63.834 40.032C64.3887 39.4347 64.858 38.88 65.242 38.368C65.6687 37.856 66.0527 37.408 66.394 37.024C66.65 36.768 66.778 36.8107 66.778 37.152C66.778 37.3653 66.714 37.6427 66.586 37.984C66.5007 38.3253 66.394 38.5813 66.266 38.752C65.8393 39.3493 65.3273 40.0107 64.73 40.736C64.1753 41.4613 63.514 42.08 62.746 42.592C61.978 43.0613 61.0607 43.296 59.994 43.296ZM80.2545 26.528C79.9985 27.4667 79.6998 28.3413 79.3585 29.152C79.0172 29.9627 78.6118 30.688 78.1425 31.328C77.3745 32.3947 76.5212 33.5467 75.5825 34.784C74.6438 36.0213 73.7478 37.4293 72.8945 39.008C72.2545 39.7333 71.5932 40.544 70.9105 41.44C70.2705 42.336 69.6518 43.0827 69.0545 43.68C68.4572 44.2347 67.9025 44.448 67.3905 44.32C66.9638 44.192 66.6012 43.808 66.3025 43.168C66.0465 42.528 65.8545 41.7813 65.7265 40.928C65.5985 40.0747 65.5132 39.264 65.4705 38.496C65.4705 37.728 65.4918 37.1947 65.5345 36.896C65.7478 35.8293 66.0038 34.784 66.3025 33.76C66.6438 32.6933 66.8145 31.8827 66.8145 31.328C66.8145 31.1147 66.4945 30.9013 65.8545 30.688C65.2145 30.432 64.7025 30.112 64.3185 29.728C64.2758 29.6853 64.2545 29.5573 64.2545 29.344C64.2545 29.088 64.2972 28.832 64.3825 28.576C64.5105 28.2773 64.6385 28.2133 64.7665 28.384C65.1505 28.8107 65.5985 29.1733 66.1105 29.472C66.6225 29.728 66.8998 29.8347 66.9425 29.792C67.7105 29.5787 68.1798 29.1093 68.3505 28.384C68.5638 27.6587 68.9478 26.976 69.5025 26.336C69.9718 25.824 70.3772 25.568 70.7185 25.568C71.2732 25.568 71.6572 25.888 71.8705 26.528C71.9132 26.656 71.9772 26.8053 72.0625 26.976C72.1478 27.1467 72.1905 27.36 72.1905 27.616C72.1905 28 72.0838 28.384 71.8705 28.768C71.5718 29.3227 71.2732 29.8133 70.9745 30.24C70.6758 30.624 70.0358 30.9867 69.0545 31.328C68.8412 31.5413 68.5425 32.224 68.1585 33.376C67.7745 34.4853 67.5825 35.8507 67.5825 37.472C67.5825 38.3253 67.6465 39.0933 67.7745 39.776C67.9452 40.4587 68.4145 40.8427 69.1825 40.928C70.0358 40.288 70.9318 39.328 71.8705 38.048C72.8518 36.768 73.6198 35.3813 74.1745 33.888C74.3452 33.4187 74.6012 32.7573 74.9425 31.904C75.3265 31.008 75.7532 30.0907 76.2225 29.152C76.7345 28.1707 77.2465 27.2533 77.7585 26.4C78.2705 25.5467 78.7398 24.9067 79.1665 24.48C79.4225 24.352 79.6358 24.288 79.8065 24.288C80.2332 24.288 80.4465 24.6293 80.4465 25.312C80.4465 25.7813 80.3825 26.1867 80.2545 26.528ZM70.2065 28.768C70.2065 28.512 70.1425 28.32 70.0145 28.192H69.9505C69.8225 28.192 69.6945 28.2773 69.5665 28.448C69.4812 28.576 69.4172 28.7253 69.3745 28.896C69.2465 29.1093 69.2678 29.3013 69.4385 29.472C69.4812 29.5147 69.5452 29.536 69.6305 29.536C69.9292 29.536 70.1212 29.28 70.2065 28.768ZM100.707 39.008C100.835 38.88 101.005 38.816 101.219 38.816C101.517 38.816 101.667 38.9653 101.667 39.264C101.667 39.4347 101.56 39.6907 101.347 40.032C101.176 40.3733 100.792 40.7787 100.195 41.248C99.5972 41.76 98.9785 42.2293 98.3385 42.656C97.7412 43.0827 96.9092 43.296 95.8425 43.296C94.6905 43.296 93.7732 43.0827 93.0905 42.656C92.4505 42.2293 91.9812 41.76 91.6825 41.248C91.4265 40.6933 91.2558 40.2667 91.1705 39.968C90.6585 40.352 90.1252 40.864 89.5705 41.504C89.0585 42.1013 88.3118 42.656 87.3305 43.168C86.3492 43.6373 84.9412 43.872 83.1065 43.872C82.0825 43.872 81.1438 43.6373 80.2905 43.168C79.4798 42.656 79.0745 41.568 79.0745 39.904C79.0745 39.4347 79.0958 38.944 79.1385 38.432C79.2238 37.8773 79.3518 37.28 79.5225 36.64C80.0345 34.6347 80.6318 33.056 81.3145 31.904C81.9972 30.752 83.0212 29.8987 84.3865 29.344C85.2398 29.0027 86.2852 28.6827 87.5225 28.384C88.7598 28.0853 89.8478 27.8293 90.7865 27.616C91.0852 27.5307 91.3412 27.2533 91.5545 26.784C91.8105 26.272 92.0878 25.8027 92.3865 25.376C92.5572 25.1627 92.7492 24.992 92.9625 24.864C93.1758 24.6933 93.4105 24.608 93.6665 24.608C93.8798 24.608 94.1572 24.7147 94.4985 24.928C94.7972 25.1413 94.9892 25.5467 95.0745 26.144C95.2025 26.7413 95.2665 27.296 95.2665 27.808C95.2238 28.064 95.1172 28.384 94.9465 28.768C94.8185 29.1093 94.7118 29.4933 94.6265 29.92C94.5412 30.4747 94.3278 31.264 93.9865 32.288C93.6452 33.312 93.4745 34.1653 93.4745 34.848C93.4745 35.4453 93.4318 36.192 93.3465 37.088C93.2612 37.9413 93.2612 38.5387 93.3465 38.88C93.8158 39.904 94.4772 40.5867 95.3305 40.928C96.1838 41.2267 96.9305 41.312 97.5705 41.184C98.0398 41.0987 98.5732 40.8213 99.1705 40.352C99.7678 39.8827 100.28 39.4347 100.707 39.008ZM90.3385 31.712C90.2532 31.3707 90.0398 31.008 89.6985 30.624C89.3998 30.24 89.0158 30.048 88.5465 30.048C88.4612 30.048 88.2905 30.0907 88.0345 30.176C87.3092 30.432 86.5412 30.9227 85.7305 31.648C84.9198 32.3307 84.2158 33.2267 83.6185 34.336C83.0212 35.4453 82.6798 36.7467 82.5945 38.24C82.5945 38.6667 82.7225 39.2213 82.9785 39.904C83.2772 40.5867 83.6612 41.1627 84.1305 41.632C84.5998 42.1013 85.0692 42.2293 85.5385 42.016C86.5625 41.5893 87.4158 40.992 88.0985 40.224C88.8238 39.4133 89.4212 38.432 89.8905 37.28C90.1038 36.7253 90.2532 36.1493 90.3385 35.552C90.4665 34.912 90.5305 34.3147 90.5305 33.76C90.5305 33.248 90.5092 32.8213 90.4665 32.48C90.4238 32.096 90.3812 31.84 90.3385 31.712ZM121.312 40.672C121.184 40.928 120.779 41.3973 120.096 42.08C119.456 42.72 118.645 43.104 117.664 43.232C116.981 43.3173 116.491 42.9333 116.192 42.08C115.936 41.184 115.808 40.16 115.808 39.008C115.808 38.5387 115.829 38.0693 115.872 37.6C115.915 37.088 115.979 36.6187 116.064 36.192C116.149 35.7227 116.235 35.2747 116.32 34.848C116.405 34.4213 116.448 34.0587 116.448 33.76C116.448 33.0347 116.171 32.7573 115.616 32.928C115.232 33.3973 114.869 34.1013 114.528 35.04C114.229 35.9787 113.973 36.6827 113.76 37.152C113.291 38.2187 112.907 39.1147 112.608 39.84C112.309 40.5653 111.925 40.928 111.456 40.928C111.072 40.928 110.88 40.5653 110.88 39.84C110.88 39.2427 110.965 38.624 111.136 37.984C111.307 37.344 111.392 37.024 111.392 37.024C111.605 36.4267 111.797 35.7653 111.968 35.04C112.181 34.272 112.352 33.6107 112.48 33.056C112.608 32.4587 112.672 32.16 112.672 32.16C112.672 32.0747 112.672 31.9467 112.672 31.776C112.715 31.6053 112.736 31.4347 112.736 31.264C112.736 30.9227 112.672 30.6027 112.544 30.304C112.459 30.0053 112.203 29.8347 111.776 29.792C111.52 29.7493 111.093 30.0053 110.496 30.56C109.941 31.072 109.365 31.712 108.768 32.48C108.213 33.2053 107.765 33.888 107.424 34.528C106.869 35.68 106.485 36.8533 106.272 38.048C106.059 39.2427 105.867 40.352 105.696 41.376C105.568 42.3573 105.333 43.168 104.992 43.808C104.864 44.064 104.608 44.192 104.224 44.192C103.925 44.192 103.605 44.1067 103.264 43.936C102.965 43.7227 102.816 43.488 102.816 43.232C102.901 42.464 103.072 41.5467 103.328 40.48C103.627 39.4133 103.947 38.1333 104.288 36.64C104.416 36.128 104.523 35.5307 104.608 34.848C104.693 34.1653 104.757 33.6533 104.8 33.312V33.184C104.8 32.5867 104.523 32.288 103.968 32.288C103.755 32.288 103.52 32.352 103.264 32.48C102.453 33.1627 101.771 33.9093 101.216 34.72C100.661 35.5307 100.213 36.2347 99.872 36.832C99.488 37.4293 99.1467 37.792 98.848 37.92C98.72 37.9627 98.656 37.8347 98.656 37.536C98.656 37.3653 98.6773 37.1733 98.72 36.96C98.7627 36.7467 98.8693 36.5333 99.04 36.32C99.424 35.936 99.8293 35.3173 100.256 34.464C100.683 33.6107 101.131 32.736 101.6 31.84C102.112 30.9013 102.667 30.112 103.264 29.472C103.904 28.7893 104.587 28.448 105.312 28.448C105.739 28.448 106.165 28.7467 106.592 29.344C107.061 29.9413 107.339 30.7093 107.424 31.648C108.149 31.0507 108.832 30.4107 109.472 29.728C110.112 29.0027 110.859 28.3627 111.712 27.808C112.053 27.6373 112.416 27.552 112.8 27.552C113.44 27.552 113.867 27.744 114.08 28.128C114.379 28.512 114.549 29.0667 114.592 29.792C114.635 30.5173 114.699 30.9013 114.784 30.944C114.869 30.9867 115.061 30.8587 115.36 30.56C115.701 30.2187 116.171 30.0907 116.768 30.176C116.981 30.176 117.28 30.304 117.664 30.56C118.048 30.816 118.24 31.136 118.24 31.52C118.24 32.0747 118.197 32.7573 118.112 33.568C118.027 34.336 117.92 35.1467 117.792 36C117.749 36.1707 117.728 36.4053 117.728 36.704C117.728 36.96 117.728 37.2587 117.728 37.6C117.728 38.1547 117.771 38.752 117.856 39.392C117.984 39.9893 118.261 40.4373 118.688 40.736C118.816 40.864 118.987 40.928 119.2 40.928C119.669 40.928 120.288 40.5227 121.056 39.712C121.184 39.584 121.291 39.52 121.376 39.52C121.504 39.52 121.568 39.648 121.568 39.904C121.568 40.2453 121.483 40.5013 121.312 40.672Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_3"
                    x="0.591995"
                    y="0.927994"
                    width="124.976"
                    height="58.368"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_3"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            {/* biography scroll svg */}
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

          {/* skills container */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL List */}
            <motion.div
              initial={{ x: "-800px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Postman
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
            </motion.div>

            {/* SKILL Scroll svg */}
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

          {/* Experience container */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* Experience TITLE */}
            <motion.h1
              initial={{ x: "-400px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EDUCATION
            </motion.h1>
            {/* Experience List */}
            <motion.div
              initial={{ x: "-800px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className=""
            >
              {/* Experience List Item 1*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* Job title  */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-xs sm:text-base xl:max-[1440px]:text-xs">
                    Master of Computer Applications - MCA
                  </div>
                  {/* Job Desc  */}
                  <div className="p-3 text-[10px] sm:text-sm xl:max-[1440px]:text-[10px] italic">
                    Dr.D.Y.Patil Institute Of Management and Research.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-[10px] sm:text-sm xl:max-[1440px]:text-[10px] font-semibold">
                    2022 - 2024
                  </div>
                  {/* JOB COMPANY */}
                  {/* <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    SPPU
                  </div> */}
                </div>

                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE  */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>

              {/* Experience List Item2 */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3"></div>

                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE  */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3">
                  {/* Job title  */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-xs sm:text-base xl:max-[1440px]:text-xs">
                    Bachelor's degree, Information Technology
                  </div>
                  {/* Job Desc  */}
                  <div className="p-3 text-[10px] sm:text-sm xl:max-[1440px]:text-[10px] italic">
                    Vivek College of Commerce.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-[10px] sm:text-sm xl:max-[1440px]:text-[10px] font-semibold">
                    2019 - 2022
                  </div>
                  {/* JOB COMPANY */}
                  {/* <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    MU
                  </div> */}
                </div>
              </div>

              {/* Experience List Item3 */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* Job title  */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-xs sm:text-base xl:max-[1440px]:text-xs">
                    Senior Secondary (XII), Science
                  </div>
                  {/* Job Desc  */}
                  <div className="p-3 text-[10px] sm:text-sm xl:max-[1440px]:text-[10px] italic">
                    A.P College Of Commerce And Science.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-[10px] sm:text-sm xl:max-[1440px]:text-[10px] font-semibold">
                    2019
                  </div>
                  {/* JOB COMPANY */}
                  {/* <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    MAHARASHTRA STATE BOARD board
                  </div> */}
                </div>

                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE  */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>

              {/* Experience List Item4 */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3"></div>

                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE  */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3">
                  {/* Job title  */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-xs sm:text-base xl:max-[1440px]:text-xs">
                    Secondary (X)
                  </div>
                  {/* Job Desc  */}
                  <div className="p-3 text-[10px] sm:text-sm xl:max-[1440px]:text-[10px] italic">
                    ST.XAVIER'S HIGH SCHOOL.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-[10px] sm:text-sm xl:max-[1440px]:text-[10px] font-semibold">
                    2017
                  </div>
                  {/* JOB COMPANY */}
                  {/* <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    MU
                  </div> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* svg container */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
