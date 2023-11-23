import React, {useState, Fragment} from 'react';


const Contador = () => {
    
    const [numero, setNumero] = useState(0);  /*numero es el nombre del estado y el set sirve para poder modif - lo iniciamos en 0*/
    
    const aumentar = () => {
        console.log('Me diste un clic')
        setNumero(numero + 1);
    }
    
    
    return ( 
        <Fragment>   {/* guardamos dentro de este div padre o mejor en el Fragment*/}

            <h3>Mi primer componente {numero}.</h3> {/* leemos lo que viene de javascript */}
            <button onClick={aumentar}>Aumentar</button>  

        </Fragment>
            
     );
}
 
export default Contador;