import './App.css'
import menuIcon from './assets/icons/interface.png'
import perfilImage from './assets/Perfil image.png'

import arrowIcon from './assets/icons/down-arrow.png'
import trofeu from './assets/icons/trofeu.png'

function App() {

  function menuButton() {
    alert('click')
  }

  const brand = '{{Portifólio}}'
  return (
    <section >
      <nav className='container'>
        <div className="brand">
          <h2>{brand}</h2>
          <button className='menuButton' onClick={menuButton}>
            <img src={menuIcon} alt="" />
          </button>
        </div>
      </nav>


      <main className='container'>
        <h1>Olá, me chamo Felipe Teixeira e sou Dev Full-Stack :)</h1>

        <div className='buttonBox'>
          <a href="#projects">Meus Projetos</a>
        </div>

        <img src={arrowIcon} alt="" className='arrowIcon floating' />
      </main>

      {/* about */}
      <section className='about'>
        <div className='imageBox'>
          <h1>Quem sou?</h1>
          <img src={perfilImage} alt="" />
        </div>
        <div className='aboutText container'>
          <h2>Sobre mim</h2>
          <p>Tenho 21 anos e já atuo na área como autonomo e inserido dentro de alguns projetos a mais de um ano. Desde 2019 venho me aventurando estudando tecnologias de desenvolvimento web, como Python, Javascript, React...</p><br />
          <p>Atualmente finalizei o curso de desenvolvimento web da Cubos Academy que explora não só as hard skills como também soft skills. Tendo assim projetos reais em equipe onde atuei como dev fullstack já que tenho conhecimento técnico para atuar no front e no back end.</p><br />
          <p>E para finalizar estou a caminho da minha graduação realizando o bacharelado e sistemas de informação na Universidade Federal Rural de Pernambuco - UFRPE.</p>
        </div>
      </section>

      <section className="premiacoes">
        <div className='premiacoesHeader container'>
          <img src={trofeu} alt="trofeu" className='trofeuIcon' />
          <h1>Premios</h1>
        </div>

        <div className="premiacoesContainer">
          <div className="premiacao">
            
          </div>
        </div>
      </section>
    </section>


  )
}

export default App
