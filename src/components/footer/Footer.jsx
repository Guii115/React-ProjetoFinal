import "./footer.css"

import arrowup from "../../assets/arrowup.svg"


function Footer() {
  return(
    <>

    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2023 by Guilherme A. Bernardino | All Rights Reserved.</p>

        <span className="animate scroll"></span>
      </div>

      <div className="footer-iconTop">
        <a href="#"><img className="footer-img" src={arrowup} alt="" /></a>

        <span className="animate scroll"></span>
      </div>
    </footer>

    </>
  );
}

export default Footer;