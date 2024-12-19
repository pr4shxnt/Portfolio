import reactLogo from '../Projects/Assets/Icons/react.svg';
import nodeLogo from '../Projects/Assets/Icons//node.svg';
import mongoLogo from '../Projects/Assets/Icons/mongo.svg';
import tailwindLogo from '../Projects/Assets/Icons/tailwind.svg';
import typescriptLogo from '../Projects/Assets/Icons/typescript.svg';


const ProjectsData = [
  {
    id: "project-1",
    title: "Tailor E-Commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque architecto iure saepe necessitatibus? Esse et, placeat dicta numquam laborum voluptates? Enim molestiae corporis illo, culpa iusto officia modi sint? Cum accusamus facere totam ipsa nostrum ducimus amet corporis quos voluptatum, dicta aperiam assumenda possimus dignissimos itaque consequuntur molestiae. Commodi dicta, velit praesentium ea doloribus repudiandae obcaecati totam numquam temporibus nemo porro officiis qui error tempora modi fugit sint suscipit corporis fugiat ad nostrum et quas odit. Corporis ratione eveniet soluta dolore quam nihil, culpa facere porro totam quod blanditiis debitis eos. Similique illo doloribus quia repellendus optio, porro tempora officia dicta ducimus inventore sed nemo ipsam minus cum iste ipsa delectus id veniam voluptas est possimus, suscipit fugiat temporibus perferendis. Ad ullam quae voluptate, minus qui doloremque impedit iure nihil laborum hic. Assumenda fuga, veniam neque eligendi, officia ab eaque excepturi quae dolor sequi modi. Assumenda deleniti temporibus aliquam, eum qui sed vero soluta inventore! Esse dignissimos at vero reiciendis placeat quidem maiores architecto accusantium dicta. Exercitationem rerum nam libero error culpa corrupti repellat voluptatibus nisi deleniti vel. Voluptate nisi, illo beatae aliquam saepe repellat reprehenderit, laborum quasi molestias, praesentium unde animi dolore aspernatur accusantium odit provident nam nobis harum alias corrupti ab. Qui aliquam ullam molestiae impedit, labore exercitationem fuga sapiente incidunt laudantium adipisci iusto pariatur quae eos. Non, iste aut quod ea obcaecati, qui minima eveniet magnam omnis aliquid a ipsum! Quisquam dicta corporis voluptates unde, numquam aut eaque harum velit ipsum aspernatur! Vero nesciunt ab temporibus unde. Iure mollitia esse, maxime dignissimos dicta omnis voluptatibus error perferendis quasi dolores rerum consequatur, ex reiciendis aliquam dolorem nostrum tenetur ipsa, nam provident sequi quas laudantium cum laboriosam aperiam? Ratione sint delectus inventore nostrum esse beatae? Labore fugit temporibus ab! Et omnis odio illum, sed ipsa unde debitis odit ad?",
    techStack: [
      { name: "React", icon: reactLogo },
      { name: "Node.js", icon: nodeLogo },
      { name: "MongoDB", icon: mongoLogo },
      { name: "Tailwind CSS", icon: tailwindLogo },
    ],
    status: "Completed",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvyRyabdekfxePVq0DCoYiHDOxFtwl_Ts3A&s", // Replace with actual image path
  },
  {
    id: "project-2",
    title: "Task Management App",
    description:
      "A productivity app for managing tasks, setting deadlines, and tracking progress.",
    techStack: [
      { name: "React", icon: reactLogo },
    ],
    status: "In Progress",
    thumbnail: "./assets/project2.jpg", // Replace with actual image path
  },
  {
    id: "project-3",
    title: "Social Media Platform",
    description:
      "A platform that connects people through posts, messaging, and interactive features.",
    techStack: [

        { name: "TypeScript", icon: typescriptLogo },
      { name: "React", icon: reactLogo },
      { name: "Node.js", icon: nodeLogo },
      { name: "MongoDB", icon: mongoLogo },
      { name: "Tailwind CSS", icon: tailwindLogo },
    ],
    status: "In Planning",
    thumbnail: "./assets/project3.jpg", // Replace with actual image path
  },
];

export default ProjectsData;
