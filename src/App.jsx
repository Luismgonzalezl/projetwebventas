import Banner from "./components/Banner"; //se importa el banner
import Navbar from "./components/Navbar"; //se importa el navbar
import Text from "./components/Text";
import Grades from "./components/Grades";
export default function App() {
  return (
    <div className="container">
          {/* A continuacion se usa el componente banner */}
         <Banner></Banner>
         <Navbar></Navbar>
         <Text titulo="Front End" subtitulo="React" mitexto="lorem kkdnasjfnskjdfnajkdgfb"></Text>
         <Grades></Grades>
         
    </div>
  );
}

//export default App;


