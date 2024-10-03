
/**
 * Ejercicio 27: Memoriza una lista de eventos ordenados cronológicamente con useMemo
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useMemo.
 * - El objetivo de este ejercicio es memoriza una lista de eventos ordenados cronológicamente con usememo.
 */

import React, { useMemo, useState } from 'react';

function UseMemoExercise27() {
  const [contador, setContador] = useState(0);
  
  const memoizedValue = useMemo(() => {
    // Lógica memoizada
    return contador * 2;
  }, [contador]);

  return (
    <div>
      <h1>Memoriza una lista de eventos ordenados cronológicamente con useMemo</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <p>Valor memoizado: {memoizedValue}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default UseMemoExercise27;
