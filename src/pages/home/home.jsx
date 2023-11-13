
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/Footer";
import Carrossel from "../../components/carrossel/carrossel";
import './home.css'
function home() {
  return (
    <>
      <div className="Home">
        <Navbar />

        <Carrossel />
        
        <Footer />

     </div>
    </>
  );
}

export default home;