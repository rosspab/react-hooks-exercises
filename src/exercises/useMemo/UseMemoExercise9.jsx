
/**
 * Ejercicio 9: Memoriza el valor de una búsqueda filtrada en una lista de usuarios con useMemo
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useMemo.
 * - El objetivo de este ejercicio es memoriza el valor de una búsqueda filtrada en una lista de usuarios con usememo.
 */

import React, { useMemo, useState } from 'react';

function UseMemoExercise9() {
  const [contador, setContador] = useState(0);
  
  const memoizedValue = useMemo(() => {
    // Lógica memoizada
    return contador * 2;
  }, [contador]);

  return (
    <div>
      <h1>Memoriza el valor de una búsqueda filtrada en una lista de usuarios con useMemo</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <p>Valor memoizado: {memoizedValue}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default UseMemoExercise9;
