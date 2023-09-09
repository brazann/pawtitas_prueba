import UserProfileForm from "./UserProfileForm";
import './Home.css';

export default function App() {
  // El resto del código del component
  // Define la variable user con las propiedades del usuario
  const user = {
    name: "Juan Pérez",
    photo: "https://i.imgur.com/123456.jpg",
    bio: "Soy un desarrollador web con experiencia en React",
    projects: [
      { name: "Mi sitio web", level: 80 },
      { name: "Mi portafolio", level: 70 },
      { name: "Mi blog", level: 60 },
    ],
    skills: ["HTML", "CSS", "JavaScript", "React"],
    followers: 100,
    comments: 50,
    ratings: 4.5,
  };

  return (
    <div className="App">
      <p>asd</p>
      <UserProfileForm {...user} /> // Pasa la variable user como propiedad al componente UserProfile
    </div>
  );
}
