/* eslint-disable react/no-unescaped-entities */
import './App.css'
import menuIcon from './assets/icons/interface.png'
import perfilImage from './assets/Perfil image.png'

import arrowIcon from './assets/icons/down-arrow.png'
import trofeu from './assets/icons/trofeu.png'
import premio1 from './assets/premio1.jpeg'
import premio2 from './assets/premio2.png'
import reactIcon from "./assets/reactIcon.png"

import typescript from './assets/tecnologys/typescript.png'
import python from './assets/tecnologys/python.png'
import sass from './assets/tecnologys/sass.png'
import postgress from './assets/tecnologys/postgress.png'
import javascript from './assets/tecnologys/javascript.png'
import react from './assets/tecnologys/react.png'
import django from './assets/tecnologys/django.png'
import materialUI from './assets/tecnologys/materialUI.png'
import node from './assets/tecnologys/nodejs.png'
import express from './assets/tecnologys/express.png'
import nest from './assets/tecnologys/nestjs.png'


import Premios from "./components/Premios"
import TecnologyBox from './components/TecnologyBox/TecnologyBox'

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
          <h1>Conquistas</h1>
        </div>

        <div className="premiacoesContainer">

          <Premios image={premio1} title={"The Dream Team"} description={"O premio 'The Dream Team' entregue pela Cubos Academy foi um grande marco para mim, tendo em vista a complexidade do projeto."} />

          <Premios image={premio2} title={"Aprovação - SISU 2024"} description={"Algo inesperado aconteceu, enfrentei a prova desacreditado do resultado mas pronto para realizar o meu melhor. E o melhor aconteceu"} />

        </div>

      </section>

      {/* tecnologias */}
      <section className="tecnologys">
        <div className="tecnologysHeader">
          <img src={reactIcon} alt="" />
          <h1>Tecnologias</h1>
        </div>

        <div className="tecnologysContainer container">
          <TecnologyBox image={typescript} title={"Typescript"} />
          <TecnologyBox image={sass} title={"Sass"} />
          <TecnologyBox image={materialUI} title={"MaterialUi"} />
          <TecnologyBox image={javascript} title={"Javascript"} />
          <TecnologyBox image={node} title={"Node"} />
          <TecnologyBox image={nest} title={"Nest"} />
          <TecnologyBox image={express} title={"Express"} />
          <TecnologyBox image={react} title={"React"} />
          <TecnologyBox image={postgress} title={"Postgress"} />
          <TecnologyBox image={python} title={"Python"} />
          <TecnologyBox image={django} title={"Django"} />
        </div>
      </section>


    </section>


  )
}

export default App
