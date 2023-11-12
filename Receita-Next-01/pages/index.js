import React from 'react';
import MaiorSP from './maiorsp';
import Bebidas from './tabelaBebidas';  // Renomeie a importação para Bebidas (em maiúsculo)

export default function Home() {
   return (
      <div>
         <h2>Viva Santana!</h2>
         <MaiorSP />
         <Bebidas />  {/* Use Bebidas como um componente React */}
      </div>
   );
}