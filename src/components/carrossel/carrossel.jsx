
import metalslug from "../../assets/metalslug.png"
import bapbap from "../../assets/bapbap.webp"
import krunker from "../../assets/krunker.jpg"
import arrowleft from "../../assets/arrowleft.svg"
import arrowright from "../../assets/arrowright.svg"

import './carrossel.css'

function Carrossel() {
  return (<>

  <div className="container-carrossel-unico">

  <button className="btn-arrow-container"> <img src={arrowleft} alt=""/> </button>


    <div className="contain1">
    <img className="img1" src={metalslug} alt="" />
    <p className="title-contain1">Metal Slug</p>
    </div>

    <div  className="contain2">
        <div className="img2">
    <img className="image1" src={krunker} alt="" />
    <p className="title-contain2">Krunker.io</p>
    </div>
    <div className="img3">
    <img className="image2"  src={bapbap}alt="" />
    <p className="title-contain3">Bapbap</p>
    </div>
    </div>

        <button className="btn-arrow-container"> <img src={arrowright} alt=""/> </button>


  </div>
 
  </>);
}

export default Carrossel;