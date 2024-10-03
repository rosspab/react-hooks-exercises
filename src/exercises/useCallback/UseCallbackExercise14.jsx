
/**
 * Ejercicio 14: Crea una función de suma memorizada que solo se actualiza cuando cambian los operandos
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es crea una función de suma memorizada que solo se actualiza cuando cambian los operandos.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise14() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Crea una función de suma memorizada que solo se actualiza cuando cambian los operandos</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise14;
