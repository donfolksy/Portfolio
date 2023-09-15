import React, { useState } from "react";
import img1 from "../assets/images/main-1.png";
import img2 from "../assets/images/main-2.png";
import img3 from "../assets/images/main-3.png";
import img4 from "../assets/images/main-5.png";
import img5 from "../assets/images/main-4.png";
import img6 from "../assets/images/main-6.png";

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Property Pro",
      description: "This project is about a building and estate development",
      img: img1,
      link: "https://property2.vercel.app/", // Replace with your actual project link
    },
    {
      id: 2,
      title: "Blogr",
      description: "One of the perfected frontend design i did will learning",
      img: img2,
      link: "http://blogr-first.netlify.app", // Replace with your actual project link
    },
    {
      id: 3,
      title: "Face of hybrid",
      description: "My lastest website about a fashion institute which is live",
      img: img3,
      link: "http://facehybrid.netlify.app/", // Replace with your actual project link
    },
    {
      id: 4,
      title: "Intern",
      description: "One of my intern jobs",
      img: img4,
      link: "https://precious-biscotti-094d99.netlify.app/", // Replace with your actual project link
    },
    {
      id: 5,
      title: "Fabs Logistics",
      description: "A fully completed collaborative project on how we can improve logistics in Nigeria we are hoping to sell the codes at the long run",
      img: img5,
      link: "",
    },
    {
      id: 6,
      title: "Archraides",
      description: "An investment project which is underdevelopment by myself and my backend developer",
      img: img6,
    },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          Welcome to my portfolio, where creativity meets innovation. I am passionate about designing solutions that solve real-world problems and bring ideas to life. Here, you'll discover a collection of projects that showcase my dedication to craftsmanship and my commitment to excellence. Each project represents a unique journey, from concept to execution, and I invite you to explore the stories behind them. Join me on this creative voyage as we dive into the world of design, art, and problem-solving.
        </p>

        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }  `}
          >
            About Me
          </button>
          {/* <button
            onClick={() => setDurum(3)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px]  ${
              durum === 3 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Text-2
          </button> */}
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
        {durum === 2 ? (
         <div
         id="text2"
         className="tab-pane  text-center text-white py-16 max-w-4xl mx-auto lg:p-5 "
       >
         <p>
           I'm a creative enthusiast with a deep passion for design, art, and the
           entire creative process. My journey in this exciting realm has been marked
           by a relentless curiosity and a love for learning. I find joy in
           collaborating with talented individuals, exchanging ideas, and contributing
           to projects that inspire innovation and meaningful change.
         </p>
         <p>
           As a dedicated creative, I embrace the challenge of bringing ideas to life,
           whether it's through visual design, problem-solving, or documentation. I
           believe that every project is an opportunity to explore new horizons and
           refine my craft. Through my work, I aim to communicate stories, provoke
           emotions, and make a positive impact on the world.
         </p>
         <p>
           Feel free to explore my portfolio to witness the exciting projects and
           creative endeavors I've embarked on. Let's connect, collaborate, and turn
           ideas into reality together!
         </p>
       </div>
       
        ) : null}
        {durum === 3 ? (
          <div
            id="text1"
            className="tab-pane  text-center text-white py-5   lg:p-5"
          >
            I'm passionate about creativity, design, documenting, art and process of creating. I like talking sometimes, I like learning, collaborating with people and listening and inputting and suggesting to works whenever I can.
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;
