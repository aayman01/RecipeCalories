import './App.css'
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Nav_bar/Navbar'
import Recipes from './Components/Recipes/Recipes';


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      
      <Recipes></Recipes>
    </>
  );
}

export default App
