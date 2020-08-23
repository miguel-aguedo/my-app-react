import React from 'react';
import C00ComponenteNuevo from './components/C00ComponenteNuevo';
import Saludo from './components/C01Saludo';
import Contador from './components/C02Contador';
import Operador from './components/C03OperadorTercario';
import Matriz from './components/C04Matriz';
import MatrizOperaciones from './components/C05MatrizOperaciones';

function App() {
  
  return (
    <div>
      <h1>Practicas... React</h1>
      <C00ComponenteNuevo />
      <hr/>
      <Saludo variable="Nuevo saludo" />
      <hr/>
      <Contador  />
      <hr/>
      <Operador/>
      <hr/>
      <Matriz />
      <hr />
      <MatrizOperaciones />
    </div>
  );
}

export default App;