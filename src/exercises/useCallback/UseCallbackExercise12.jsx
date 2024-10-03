
/**
 * Ejercicio 12: Implementa una lista de tareas utilizando useCallback para añadir y eliminar tareas
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es implementa una lista de tareas utilizando usecallback para añadir y eliminar tareas.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise12() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Implementa una lista de tareas utilizando useCallback para añadir y eliminar tareas</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise12;
