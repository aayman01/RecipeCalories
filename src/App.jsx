import { Toaster } from 'react-hot-toast';
import './App.css'
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Nav_bar/Navbar'
import Recipes from './Components/Recipes/Recipes';


function App() {

  return (
    <>
      <div className="container mx-auto p-4 lg:px-24 px-4 my-4">
        <Navbar></Navbar>
        <Banner></Banner>
        <Recipes></Recipes>
      </div>
      <Toaster position="top-right"></Toaster>
    </>
  );
}

export default App
