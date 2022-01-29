
import './App.css';
import NavBar from "./components/NavBar";
import CardComponent from "./components/CardComponent";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <>
      <NavBar/>
      <div className="cardComponent"><CardComponent 
      img= "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/arcane-league-of-legends-final-explicado-temporada-1-1-1637581774.jpg"
      name= "Jinx"
      description= "Una bomba Requetemortal"
      />
      <CardComponent 
      img= "https://www.tonica.la/__export/1616519419004/sites/debate/img/2021/03/23/levi-su-mayor-pelea-hasta-ahora.png_423682103.png"
      name= "Levi"
      description= "Entrega tu corazon"
      />
      <ItemCount/>
      </div>
    </>
    
  );
}

export default App;


