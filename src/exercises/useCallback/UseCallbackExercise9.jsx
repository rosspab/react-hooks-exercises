
/**
 * Ejercicio 9: Usa useCallback para evitar renderizaciones innecesarias en un componente hijo
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es usa usecallback para evitar renderizaciones innecesarias en un componente hijo.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise9() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Usa useCallback para evitar renderizaciones innecesarias en un componente hijo</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise9;
