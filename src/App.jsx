import './App.css'
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import { BaseColaboradores } from './js/baseColaboradores'
import Listado from './components/Listado';
import { useState } from 'react';

function App() {

  const [colaboradores, setColaboradores]=useState(BaseColaboradores);
  const [verificacion, setVerificacion]=useState("");

  return (
  <div className="myContainer row p-3 p-xl-5 align-items-xl-center">

    
    
        <div className='listContainer col-12 col-xl-9'>
            <h1>Lista de colaboradores</h1>
            <Buscador colaboradores = {colaboradores} setColaboradores = {setColaboradores} baseColaboradores={BaseColaboradores} />
            <Listado arrayColaboradores = {colaboradores} />         
        </div>
        <div className="formContainer col">
            <Formulario setColaboradores = {setColaboradores} colaboradores ={colaboradores} setVerificacion={setVerificacion} />
            <Alert mensaje= {verificacion} />
        </div>



  <div class="container">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-4 my-4 border-top colorfooter">
      <p class="col-md-4 mb-0 text-body-secondary">&copy; 2024, Desarrollado por Guillermo Perez Lapolla</p>

      <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="70" height="10"><use xlink:href="#bootstrap"/></svg>
      </a>

      <ul class="nav col-md-4 justify-content-end">
        
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Empresa</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Quienes somos</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Gobierno Corporativo</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Contacto</a></li>
      </ul>
    </footer>
  </div>



    </div>
  );
    
}

export default App
