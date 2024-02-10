import './App.css'
import menuIcon from './assets/icons/interface.png'

function App() {

  function menuButton() {
    alert('click')
  }

  const brand = '{{Portifólio}}'
  return (
    <section className='container'>
      <nav>
        <div className="brand">
          <h2>{brand}</h2>
          <button onClick={menuButton}>
            <img src={menuIcon} alt="" />
          </button>
        </div>
      </nav>


      <main>
        <h1>Olá, me chamo Felipe Teixeira e sou Dev Full-Stack :)</h1>
      </main>
    </section>


  )
}

export default App
