import React from "react";
import { useParams } from "react-router-dom";

const ProjectsDetails = () => {
  const { id } = useParams();

  /* <img src="https://i.ibb.co/sjgV9Y7/dashboard.png" alt="dashboard" border="0">
<img src="https://i.ibb.co/zmYHR94/dashboard2.png" alt="dashboard2" border="0">
<img src="https://i.ibb.co/KFH2GRy/Home-2.png" alt="Home-2" border="0">
<img src="https://i.ibb.co/g6Xw08t/Job-Details.png" alt="Job-Details" border="0">
<img src="https://i.ibb.co/j81SNxR/order.png" alt="order" border="0">
<img src="https://i.ibb.co/XCy5NXZ/contact.png" alt="contact" border="0"> */

  const projects = [
    {
      id: 1,
      name: "AutoParts - A Manufucturer Website",
      tech: "#1 MERN Project",
      img: "https://i.ibb.co/DV48jSm/Home.png",
      live: "https://dhaka-catering.netlify.app/",
      client: "https://github.com/RiyaadHossain/DhakaCatering-Frontend",
      server: "https://github.com/RiyaadHossain/DhakaCatering-Backend",
      overview: [
        "https://i.ibb.co/KFH2GRy/Home-2.png",
        "https://i.ibb.co/j81SNxR/order.png",
        "https://i.ibb.co/XCy5NXZ/contact.png",
      ],
      features: [
        "Fully Responsive MERN Stack single page Application",
        "Implemented MVC architecture pattern",
        "Developed authentication and authorization",
        "Use React Hot Toast to display toast notifications",
        "Email Sending using Nodemailer and Image Upload using ImageBB",
      ],
      technology: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind",
        "Node",
        "Express",
        "MongoDB",
        "JWT Token",
        "Firebase",
      ],
    },
    {
      id: 2,
      name: "Doctors Portal - Doctors Appointment",
      tech: "#2 MERN Project ",
      img: "https://i.ibb.co/HGmHvvL/Elite-Home.png",
      live: "https://elite-recruiting.netlify.app/",
      client: "https://github.com/RiyaadHossain/Elite-Recruiting",
      server: "https://github.com/RiyaadHossain/EliteRecruiting-Server",
      overview: [
        "https://i.ibb.co/g6Xw08t/Job-Details.png",
        "https://i.ibb.co/sjgV9Y7/dashboard.png",
        "https://i.ibb.co/g6Xw08t/Job-Details.png",
      ],
      features: [
        "MERN stack application where employee can post jobs and candidate can apply in any preference job.",
        "Implemented Firebase Authentication. Users have to register first to get full facilites.",
        "Developed dashboard for both employees and cadidates user.",
      ],
      technology: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind",
        "Node",
        "Express",
        "MongoDB",
        "JWT Token",
        "Firebase",
      ],
    },
    {
      id: 3,
      name: " Laptop Hub - Warehouse Management",
      tech: "#3 Full Stack",
      img: "https://i.ibb.co/wCSJ61S/Laptop-Hub.png",
      live: "https://laptop-03.web.app/",
      client: "https://github.com/RiyaadHossain/LaptopHub-Client",
      server: "https://github.com/RiyaadHossain/LaptopHub-Client",
      overview: [
        "https://i.ibb.co/RH5L4Qt/Laptop-Hub1.png",
        "https://i.ibb.co/j38KWS3/Laptop-Hub2.png",
        "https://i.ibb.co/kgtWNJT/Laptop-Hub3.png",
      ],
      features: [
        "Laptop warehouse management site - single page full stack application.",
        "The purchasing system is protected - users can't purchase any product unless logging in.",
        "Developed user functionalities to restock, order items and cancel their ordered item.",
      ],
      technology: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind",
        "Node",
        "Express",
        "MongoDB",
        "JWT Token",
        "Firebase",
      ],
    },
    {
      id: 4,
      name: "To Do App - Daily Task Manager",
      tech: "#4 React Application ",
      img: "https://i.ibb.co/Mg1vxf3/ToDoApp.png",
      live: "https://to-do-app-003.web.app/",
      client: "https://github.com/RiyaadHossain/To-Do-App",
      server: "https://github.com/RiyaadHossain/To-Do-App-Server",
      overview: [
        "https://i.ibb.co/BNB7XBD/ToDo1.png",
        "https://i.ibb.co/848NkJH/ToDo2.png",
        "https://i.ibb.co/vvFyccZ/ToDo3.png",
      ],
      features: [
        "A React To Do Application- user can add their task and description after successfullylogging in to the site as it is a private route.",
        "Implemented the 'Delete' button to delete the task and the 'Done' button to mark the task.",
        "Build user functionality to remove the history of the completed tasks.",
      ],
      technology: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind",
        "Node",
        "Express",
        "MongoDB",
      ],
    },
    {
      id: 5,
      name: "Travel Mania - Servie Provider",
      tech: "#5 Front End Project ",
      img: "https://i.ibb.co/r2Lqs36/Travel-Mania.png",
      live: "https://common-project-000.web.app/",
      client: "https://github.com/RiyaadHossain/Travel-Mania",
      overview: [
        "https://i.ibb.co/Fn1QLRC/Travel-Mania1.png",
        "https://i.ibb.co/S3kxCqX/Travel-Mania2.png",
        "https://i.ibb.co/2Wfb8LJ/Travel-Mania3.png",
      ],
      features: [
        " Travel Guide Website - A Single Page Application",
        "In this site, I implemented Firebase for user Authentication",
        "I set a protected page named 'Checkout' and after login the user can have access to the page",
      ],
      technology: ["HTML", "CSS", "JavaScript", "Tailwind", "Firebase"],
    },
    {
      id: 6,
      name: "My Wallet - Calculate Monthly Cost",
      tech: "#6 JavaScript Project ",
      img: "https://i.ibb.co/YRQb9NX/My-Wallet.png",
      live: "https://my-wallet-riyad.netlify.app/",
      client: "https://github.com/RiyaadHossain/Money-Master",
      overview: [
        "https://i.ibb.co/YRQb9NX/My-Wallet.png",
        "https://i.ibb.co/YRQb9NX/My-Wallet.png",
        "https://i.ibb.co/YRQb9NX/My-Wallet.png",
      ],
      features: [
        "My Wallet - A JavaScript Project",
        "Users can input their monthly income and other cost to calculate monthly cost and Income.",
        "Also, users can calculate thier saving amout.",
      ],
      technology: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const project = projects.find((project) => project.id === Number(id));

  return (
    <div className="my-14 px-3 md:px-6 lg:px-14 min-h-[55vh]">
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        {/* --------------------- Card --------------------- */}

        <div className="max-w-[600px] lg:w-1/2  mx-auto mt-10">
          <div
            key={project?.id}
            rel="noreferrer"
            className="p-3 bg-gray-900 rounded-md project-card transition-all "
          >
            <img
              className="object-cover overflow-hidden rounded-md"
              src={project?.img}
              alt=""
            />
          </div>
        </div>
        {/* --------------------- Card --------------------- */}

        <div className="lg:w-1/2">
          <p>
            <h3 className="text-3xl text-slate-200 font-semibold">
              {project?.name}
            </h3>{" "}
            <span className="text-[#FF014F]">{project?.tech}</span>
          </p>
          <div className="my-6">
            <h5 className="font-semibold text-2xl">Overview:</h5>
            <div className="flex flex-wrap gap-5 mt-2">
              {project?.overview?.map((ss) => (
                <img className="rounded w-72" src={ss} alt="" />
              ))}
            </div>
            <div className="flex gap-3 mt-5">
              <a
                target="_blank"
                rel="noreferrer"
                href={project?.live}
                className="bg-[#d60c49] rounded-sm text-white px-6 py-2"
              >
                Live Site
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={project?.client}
                className="bg-[#d60c49] rounded-sm text-white px-6 py-2"
              >
                Client Side
              </a>
              {project?.server && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project?.server}
                  className="bg-[#d60c49] rounded-sm text-white px-6 py-2"
                >
                  Server Side
                </a>
              )}
            </div>
            <div className="mt-6">
              <h4 className="text-xl font-semibold">Features:</h4>
              <ul className="list-disc ml-14">
                {project?.features?.map((feature) => (
                  <li className="mb-1">{feature}</li>
                ))}
              </ul>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {project?.technology?.map((tech) => (
                <span className="border rounded-full px-3 text-sm border-[#d60c49] bg-[#d60c4928] text-[#d60c49] ">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
