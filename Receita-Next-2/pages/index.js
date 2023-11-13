import React from 'react';
import MaiorSP from './subpages/maiorsp';
import Bebidas from './subpages/tabelaBebidas';  // Renomeie a importação para Bebidas (em maiúsculo)
import Principal from './novaPagina';
export default function Home() {
   return (
      <div>
         <h2>Viva Santana!</h2>
         <MaiorSP />
         <Bebidas />  {/* Use Bebidas como um componente React */}
         <Principal />
      </div>
   );
}