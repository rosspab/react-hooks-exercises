
/**
 * Ejercicio 17: Crea un sistema de favoritos utilizando useCallback para añadir y eliminar elementos
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es crea un sistema de favoritos utilizando usecallback para añadir y eliminar elementos.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise17() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Crea un sistema de favoritos utilizando useCallback para añadir y eliminar elementos</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise17;
