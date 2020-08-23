import React, {Fragment} from 'react';

const Operador=()=>{
    const edad=18;
    return(
        <Fragment>
            <h1>INSERTAR EDAD</h1>
            {edad >= 18? 'Mayor de edad':'Menor de edad'}
        </Fragment>

    );

}
export default Operador;