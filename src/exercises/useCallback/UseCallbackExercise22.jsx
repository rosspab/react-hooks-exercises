
/**
 * Ejercicio 22: Usa useCallback para manejar eventos de arrastrar y soltar (drag-and-drop)
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es usa usecallback para manejar eventos de arrastrar y soltar (drag-and-drop).
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise22() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Usa useCallback para manejar eventos de arrastrar y soltar (drag-and-drop)</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise22;
