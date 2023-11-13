import React from 'react';
import MaiorSP from './subpages/maiorsp';
import Bebidas from './subpages/tabelaBebidas';  // Renomeie a importação para Bebidas (em maiúsculo)
import Principal from './novaPagina';
export default function Home() {
   let nome = "Cachaça Companheira Castanheira 670ml"
   let alcool = "40%"
   return (
      <div>
         <h2>Viva Santana!</h2>
         <MaiorSP />
         <Bebidas nome={nome} alcool = {alcool}/>  {/* Use Bebidas como um componente React */}
         <Principal />
      </div>
   );
}