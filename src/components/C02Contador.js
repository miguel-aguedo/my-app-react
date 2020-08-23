import React,{Fragment,useState} from 'react';
 const Contador=()=>{
     const[valor,setValor]=useState(0);
     const[numero, setNumero]=useState(0);
     const IncrementoDos=()=> {
         setNumero(numero + 1);
         console.log("mensaje de contador");

     }
     return(
        <Fragment>
            <button onClick={()=> setValor (valor+ 1)}>CONTADOR1</button>
            <span >contador:{valor}</span>
            <hr/>
            <button onClick={IncrementoDos}>CONTADOR2</button>
            <span>contador:{numero}</span>
            </Fragment>
     );
 }
 export default Contador;