import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import ContactForm from "./components/contact"
function App() {
  return (
    <>
     <Navbar/>
     <Header/>
     <About/>
     <ContactForm/>
    </>
  );
}

export default App;
