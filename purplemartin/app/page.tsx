import MainNavbar from "./components/Navbar"
import Footer from "./components/Footer"
import SearchBar from "./components/Searchbar"

export default function Home(){
  const projects = [
    {
      name: "Hello",
      description: "Description for Project1",
      fileAddress: "/project1",
      tags: ["React", "JavaScript", "Frontend"],
      imageAddress: "Dogs.jpg",
    },
    {
      name: "Project2",
      description: "Description for Project2",
      fileAddress: "/project2",
      tags: ["Node.js", "Express", "Backend"],
      imageAddress: "Dogs.png",
    },
    {
      name: "Project3",
      description: "Description for Project3",
      fileAddress: "/project3",
      tags: ["Python", "Django", "Backend"],
      imageAddress: "Dogs.png",
    },
    {
      name: "Project4",
      description: "Description for Project4",
      fileAddress: "/project4",
      tags: ["Vue.js", "JavaScript", "Frontend"],
      imageAddress: "Dogs.png",
    },
    {
      name: "Project5",
      description: "Description for Project5",
      fileAddress: "/",
      tags: ["React Native", "JavaScript", "Mobile"],
      imageAddress: "Dogs.png",
    },
    {
      name: "Project6",
      description: "Description for Project6",
      fileAddress: "/project6",
      tags: ["Java", "Spring Boot", "Backend"],
      imageAddress: "Dogs.png",
    },
    // Add more projects here if needed
  ];
  

  return(
    <main className="dark">
      <div className=" dark:bg-dark-background-950 bg-background-950">
        <MainNavbar />
        <SearchBar projects={projects} />
        <Footer />
      </div>
    </main>
  )
}