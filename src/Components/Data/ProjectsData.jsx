import reactLogo from "../Projects/Assets/Icons/react.svg";
import nodeLogo from "../Projects/Assets/Icons//node.svg";
import mongoLogo from "../Projects/Assets/Icons/mongo.svg";
import tailwindLogo from "../Projects/Assets/Icons/tailwind.svg";
import typescriptLogo from "../Projects/Assets/Icons/typescript.svg";
import html from "../Projects/Assets/Icons/html.svg";
import css from "../Projects/Assets/Icons/css.svg";
import python from "../Projects/Assets/Icons/python.svg";
import django from "../Projects/Assets/Icons/django.svg";
import firebase from "../Projects/Assets/Icons/firebase.svg";
import Jasmine from "../Projects/Assets/Icons/jasmine.svg";
import java from "../Projects/Assets/Icons/java.svg";
import js from "../Projects/Assets/Icons/js.svg";
import linux from "../Projects/Assets/Icons/linux.svg";
import next from "../Projects/Assets/Icons/next.svg";
import sql from "../Projects/Assets/Icons/sql.svg";
import vscode from "../Projects/Assets/Icons/vscode.svg";
import redux from "../Projects/Assets/Icons/redux.svg";
import c from "../Projects/Assets/Icons/c-1.svg";
import c2 from "../Projects/Assets/Icons/c.svg";
import bootstrap from "../Projects/Assets/Icons/bootstrap.svg";
import express from "../Projects/Assets/Icons/express.svg";
import bhThumbnail from "../../assets/images/BurgerHouse.png";
import imThumbnail from "../../assets/images/jeevee.png";
import portfolioTn from "../../assets/images/oldPortfolio.png";
import consultancy from "../../assets/images/UDAEH.png";
import weather from "../../assets/images/weather.png";
import tailor from "../../assets/images/tailor.png";
import todo from "../../assets/images/todo.png";
import sfThumbnail from "../../assets/images/sfThumbnail.png"

const ProjectsData = [
  {
    id: "Portfolio",
    title: "Old Portfolio",
    description: `My old portfolio included a CV section to display my qualifications, an information section to describe my professional journey, and social media cards to link to my profiles. While it was a good representation of my skills and background, it had some key limitations. One major drawback was the lack of a contact form, which made it difficult for potential employers, clients, or collaborators to reach out to me directly. This made the portfolio more of a static showcase than an interactive platform.The updated version of my portfolio is a significant improvement. The most notable enhancement is the addition of a "Hire Me" form, which allows visitors to contact me directly with job offers, freelance opportunities, or inquiries. This interactive feature makes the portfolio much more dynamic and user-friendly, providing a clear and easy way for others to engage with me. The form serves as a direct call to action, enabling me to establish connections and expand my professional network. Apart from the contact feature, the design of the new portfolio has been significantly modernized. The layout is cleaner, with improved navigation and a more professional aesthetic, offering a smoother browsing experience for visitors. The portfolio also better showcases my skills, projects, and achievements, making it easier for potential employers to evaluate my work. Additionally, the overall responsiveness of the design ensures that the portfolio looks great on all devices, whether viewed on a desktop, tablet, or mobile phone.In conclusion, while my old portfolio served as a basic showcase of my work, the new version is far more comprehensive. The inclusion of the "Hire Me" form and overall design improvements make it a more functional and engaging tool for potential career opportunities.`,
    techStack: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "Javascript", icon: js },
      { name: "React", icon: reactLogo },
    ],
    status: "Completed",
    thumbnail: portfolioTn,
    link: "https://github.com/pr4shxnt/portfolio.pr", // Replace with actual image path
  },
  {
    id: "Consultancy",
    title: "Consultancy",
    description: `The educational consultancy website I developed focuses on IELTS/PTE exam preparation, entrance exam coaching, and other academic services. It features a clean and simple layout, ensuring easy navigation for prospective students. The website includes a contact form, allowing visitors to inquire about services, schedule consultations, or ask questions directly through the site, streamlining communication. Additionally, the site displays testimonials from past students, helping to establish credibility and trust with potential clients by showcasing their positive experiences. Built using basic HTML, the website is lightweight, easy to maintain, and quick to load. However, its simplicity is both a strength and a limitation. While the straightforward design provides essential information about the services offered, it lacks the interactivity and advanced features that could enhance the overall user experience. The site could benefit from modern design elements, interactive multimedia, and JavaScript to improve its functionality and user engagement. Despite this, the core purpose of the website is fulfilled — providing clear details about services and facilitating communication. The contact form and testimonials are key components that help establish trust with new clients. In the future, the website could be expanded with additional features like an FAQ section, service booking, or a blog to engage users and provide more value. By focusing on enhancing the visual design and adding more interactivity, the website could better cater to the needs of students looking for academic assistance while still maintaining its simplicity and functionality. Please support me by starring the code in Github, you can redirect to it through the link below.`,
    techStack: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "Javascript", icon: js },
      { name: "Tailwind CSS", icon: tailwindLogo },
    ],
    status: "Completed",
    thumbnail: consultancy,
    link: "https://github.com/pr4shxnt/UDAEH",
  },
  {
    id: "Burger-House",
    title: "Burger House",
    description: `Two years ago, I created a project called Burger House, a fully functional website built using only HTML, CSS, and JavaScript. This project was designed to simulate an online presence for a fast-food restaurant specializing in burgers. It allowed users to explore the menu, customize their orders, and view an interactive cart, showcasing my ability to build user-friendly and engaging web interfaces with core web technologies.

The structure of the website was developed with HTML, featuring sections such as the home page, menu, and contact page. Each page was crafted to be intuitive, with clear navigation links and a consistent layout. I styled the website using CSS, focusing on creating a visually appealing design with vibrant colors, appetizing food images, and responsive layouts that worked well on both desktop and mobile devices.

The functionality of the website was implemented using JavaScript. For instance, users could interact with the menu by selecting burgers, adding or removing toppings, and customizing their orders in real time. An interactive cart displayed the selected items along with the total price, dynamically updating as users made changes. JavaScript also handled form validation for the contact page, ensuring that users provided valid inputs when submitting inquiries or feedback.

Burger House was more than just a project; it was a learning experience that allowed me to master core web development concepts and techniques. By working without frameworks, I gained a deeper understanding of how HTML, CSS, and JavaScript work together to create functional and visually appealing websites. This project not only helped me improve my coding skills but also demonstrated my ability to deliver a complete solution using foundational web technologies. It remains a testament to my dedication to creating engaging user experiences.`,
    techStack: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "Javascript", icon: js },
      { name: "Bootstrap", icon: bootstrap },
    ],
    status: "Completed",
    thumbnail: bhThumbnail,
    link: "https://github.com/pr4shxnt/BurgerHouse-Project",
  },
  {
    id: "To-Do",
    title: "To-do App",
    description: `I’ve recently completed a Todo App using the MERN stack (MongoDB, Express, React, Node.js), which has become an invaluable tool for managing my projects and boosting productivity. This application allows users to organize their tasks efficiently by providing functionalities to add, edit, delete, and mark tasks as complete. It’s a practical project that highlights my full-stack development skills and has also proven to be incredibly useful in my day-to-day work.

The frontend, built using React, provides a clean and user-friendly interface. Users can add new tasks, update them when needed, or remove them once completed. The app also includes filtering options, allowing tasks to be categorized based on their status (e.g., pending or completed). This makes prioritizing tasks and maintaining focus much easier. I used CSS to design a responsive layout, ensuring an optimal experience across different devices.

The backend leverages Node.js and Express to manage API requests, while MongoDB serves as the database to store and retrieve task data efficiently. The app features RESTful API endpoints for CRUD operations, ensuring seamless communication between the client and server. It’s also designed with scalability and performance in mind.

This app has significantly improved my workflow by helping me break down larger projects into manageable tasks. I use it regularly to plan my work, set priorities, and monitor progress. Its ability to track tasks ensures that no detail is overlooked during project development.

Completing this Todo app has not only sharpened my technical skills but also provided me with a tool that enhances my productivity. It’s a project that I’m proud of, as it not only demonstrates my expertise in full-stack development but also serves as a practical solution for managing my projects effectively.`,
    techStack: [
      { name: "Node", icon: nodeLogo },
      { name: "Express", icon: express },
      { name: "React", icon: reactLogo },
      { name: "MongoDB", icon: mongoLogo },
    ],
    status: "Completed",
    thumbnail: todo,
    link: "https://github.com/pr4shxnt/to-do_frontend",
  },
  {
    id: "Weatherize",
    title: "Weather App",
    description: `I recently completed a project called Weatherize, a simple yet effective weather app designed to provide users with real-time weather updates. Built using HTML, CSS, and JavaScript, the app focuses on functionality and user experience, making it a reliable tool for anyone who wants quick access to weather information.

Weatherize allows users to search for weather conditions in any city around the world. It provides essential details like temperature, humidity, wind speed, and weather conditions such as sunny, rainy, or cloudy. The app fetches data from a weather API, ensuring accurate and up-to-date information for users. The real-time feature makes it particularly useful for planning daily activities or checking the weather before traveling.

The user interface is designed to be clean and straightforward, making it easy for users to navigate. HTML was used to structure the content, while CSS added visual appeal with a responsive design that adjusts seamlessly across various devices. The app's colors and layout were chosen to reflect weather themes, creating an engaging experience for users.

JavaScript plays a critical role in Weatherize by handling the API integration and user interactions. Users can type in a city name, and the app dynamically fetches and displays the weather data without requiring a page reload. It also includes error handling to notify users if the entered city cannot be found.

Weatherize was a valuable project for improving my skills in integrating APIs and creating dynamic web applications. It not only enhanced my knowledge of JavaScript and asynchronous programming but also taught me how to focus on delivering a functional and user-friendly product. This project showcases my ability to combine core web development technologies to solve real-world problems in a simple and efficient manner.`,
    techStack: [
      { name: "React", icon: reactLogo },
      { name: "Node.js", icon: nodeLogo },
      { name: "Express", icon: express },
      { name: "Tailwind CSS", icon: tailwindLogo },
    ],
    status: "Completed",
    thumbnail: weather,
    link: "https://github.com/pr4shxnt/Weather-Web-App",
  },
  {
    id: "e-commerce",
    title: "E-com app",
    description: `I am currently working on an e-commerce tailor application that combines modern web development technologies to deliver a fully functional platform for ordering customized products. Built using the MERN stack (MongoDB, Express, React, and Node.js), Tailwind CSS, and Redux, this project is designed to provide a seamless and personalized shopping experience for users.

The application allows customers to browse a wide range of tailored products, from clothing to accessories, and customize them according to their preferences. Users can select fabrics, colors, sizes, and additional customization options, making each order uniquely tailored to their needs. The app also features a dynamic product catalog, filtering, and sorting options, enabling users to find exactly what they’re looking for quickly and easily.

On the frontend, React powers a responsive and intuitive interface styled with Tailwind CSS. Tailwind’s utility-first framework ensures a clean and efficient design, while Redux manages the global state to streamline data flow across components. This ensures a smooth user experience, whether users are customizing products, adding items to their cart, or completing the checkout process.

The backend, built with Node.js and Express, provides robust APIs for handling product data, user authentication, and order management. MongoDB serves as the database, storing user profiles, order details, and product information securely. The app integrates various technologies, including payment gateways for secure transactions and email notifications for order confirmations.

This project has been an excellent opportunity to implement advanced development practices while addressing real-world use cases. By combining powerful technologies, the application delivers both performance and functionality. It not only highlights my skills in full-stack development but also demonstrates my ability to create scalable, user-friendly solutions tailored to meet specific needs. This e-commerce tailor app is a testament to my dedication to building modern, impactful web applications.`,

    techStack: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "React", icon: reactLogo },
      { name: "Node.js", icon: nodeLogo },
      { name: "Mongo", icon: mongoLogo },
      { name: "Express", icon: express },
      { name: "Tailwind", icon: tailwindLogo },
      { name: "Redux", icon: redux },
      { name: "Jasmine", icon: Jasmine },
    ],
    status: "In progress",
    thumbnail: tailor,
    link: "https://tailor-nu.vercel.app",
  },
  {
    id: "Medical-ecom",
    title: "Itahari Medicals",
    description: `I recently contributed to a group project called Itahari Medicals, a comprehensive web application designed to streamline medical services and enhance user convenience. This project was developed using the MERN stack (MongoDB, Express, React, and Node.js) along with Redux for state management and Bootstrap for responsive design. My role in the project was pivotal, as I was responsible for leading the frontend development and ensuring seamless integration with the backend.

The application allows users to browse available medicines, place orders, and manage their medical records. It also features an admin panel for managing inventory, tracking orders, and handling user queries, making it a complete solution for both users and administrators. The use of Redux ensured smooth and efficient state management, enabling real-time updates and data flow between components.

On the frontend, I implemented the user interface using React and styled it with Bootstrap, ensuring a responsive and visually appealing design. I worked on key features such as the product catalog, user authentication, and cart functionality. Additionally, I contributed to integrating the payment gateway for secure transactions and improving the overall user experience.

On the backend, I collaborated with the team to build RESTful APIs using Node.js and Express. MongoDB was used for managing the database, ensuring the secure storage of user and product data.

This project was a valuable experience in teamwork and full-stack development. My role involved not only coding but also coordinating with team members to overcome challenges and deliver a high-quality application. Itahari Medicals showcases my ability to work on complex projects, use advanced technologies, and play a leadership role in a collaborative environment, making it a significant milestone in my development journey.`,
    techStack: [
      { name: "React", icon: reactLogo },
      { name: "Node.js", icon: nodeLogo },
      { name: "MongoDB", icon: mongoLogo },
      { name: "Tailwind", icon: tailwindLogo },
      { name: "Express", icon: express },
      { name: "Redux", icon: redux },
    ],
    status: "Group Project",
    thumbnail: imThumbnail,
    link: "https://jevee-frontend.vercel.app/",
  },
  {
    id:"School-web",
    techStack:[ { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "React", icon: reactLogo },
    { name: "Node.js", icon: nodeLogo },
    { name: "Mongo", icon: mongoLogo },
    { name: "Express", icon: express },
    { name: "Tailwind", icon: tailwindLogo },
    { name: "Redux", icon: redux },
    { name: "Jasmine", icon: Jasmine },],
    title: "School Landing Page",
    status: "Static pages remains",
    link: "https://github.com/pr4shxnt/Frontend_school",
    description:"I developed a school management web application using the MERN (MongoDB, Express.js, React.js, and Node.js) stack, incorporating Tailwind CSS for a modern and responsive UI. This platform streamlines administrative tasks, enhances communication, and simplifies school management by offering features like student record management, attendance tracking, assignment handling, and announcement dissemination. The backend, built with Node.js and Express.js, ensures efficient API handling and database operations, while MongoDB stores structured data securely. The frontend, developed in React.js with Tailwind CSS, provides an intuitive and dynamic user interface. Teachers can upload assignments, mark attendance, and send notifications, while students and parents can access study materials, grades, and important announcements. The system also includes authentication and role-based access control for security. By leveraging the MERN stack, the application offers a seamless and scalable solution, improving efficiency in school operations while providing a user-friendly experience for administrators, teachers, students, and parents.",
    thumbnail: sfThumbnail
  }
];

export default ProjectsData;
