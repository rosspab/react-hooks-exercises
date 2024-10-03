
/**
 * Ejercicio 22: Memoriza el nombre completo de un usuario utilizando useMemo
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useMemo.
 * - El objetivo de este ejercicio es memoriza el nombre completo de un usuario utilizando usememo.
 */

import React, { useMemo, useState } from 'react';

function UseMemoExercise22() {
  const [contador, setContador] = useState(0);
  
  const memoizedValue = useMemo(() => {
    // Lógica memoizada
    return contador * 2;
  }, [contador]);

  return (
    <div>
      <h1>Memoriza el nombre completo de un usuario utilizando useMemo</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <p>Valor memoizado: {memoizedValue}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default UseMemoExercise22;
