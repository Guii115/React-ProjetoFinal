import logoSVG from '../../../public/fav.svg'
import './navbar.css'

function Navbar() {
 
  return (<>
    <nav>
      <div className='Logo'>
      <img src={logoSVG} alt="logo" />
      <h1>BrowserGames</h1>
      </div>
      <div className='completeNavbar'>
      <ul className='linksNav'>
        <li><a href="">Home</a></li>
        <li><a href="">Jogos</a></li>
        <li><a href="">Minha Conta</a></li>
      </ul>
      <form action="" className='formSearch'>
        <input className="inputSeach" type="search" placeholder="Digite algo..."/>
        <button className='buttonSearch' type="submit">Pesquisar</button>
      </form>
      
      </div>
      <button className='activeNavbarMobile'>
        <div className='burgerLines'></div>
        <div className='burgerLines'></div>
        <div className='burgerLines'></div>
      </button>
    </nav>
  </>)
}

export default Navbar;

