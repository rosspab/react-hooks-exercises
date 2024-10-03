
/**
 * Ejercicio 15: Usa useCallback en conjunto con useEffect para ejecutar una función memorizada
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es usa usecallback en conjunto con useeffect para ejecutar una función memorizada.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise15() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Usa useCallback en conjunto con useEffect para ejecutar una función memorizada</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise15;
