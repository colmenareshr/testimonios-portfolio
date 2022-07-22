import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que han dicho mis clientes en Workana</h1>
      <Testimonio 
        nombre= 'Sandra Murga'
        pais= 'España'
        imagen= 'sandra'
        alt= 'Sandra'
        cargo= 'CEO'
        empresa= 'SandraMurga.com'
        testimonio= 'El trato de Humberto es exquisito. A eso suma rapidez y fluidez en el trabajo. Un 10'/>

        <Testimonio 
        nombre= 'William García'
        pais= 'España'
        imagen= 'william'
        alt= 'William'
        cargo= 'Cliente'
        empresa= 'Workana'
        testimonio=  'Humberto me ha ayudado con el contenido de una página de mi web. Esta página la usaré para vender uno de mis productos y realmente estoy satisfecho. Muy atento a cualquier duda por mi parte, ha hecho un trabajo extraordinario. Y, además de la calidad, en un tiempo récord y con un precio super competitivo. Recomiendo trabajar con él porque tiene habilidades que seguro podrás aprovechar para tu proyecto. Voveré a trabajar con él. Ha sido un enorme placer.'
        
        />
        <Testimonio 
        nombre= 'Benet Marcos'
        pais= 'España'
        imagen= 'benet'
        alt= 'Benet'
        cargo= 'Cliente'
        empresa= 'Workana'
        testimonio= 'Muy aplicado, ofrece profundidad en la investigación de los temas. Seriedad. Comunicación fluida.'
        />
      </div>
    </div>
  );
}

export default App;
