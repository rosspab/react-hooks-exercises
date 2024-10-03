
/**
 * Ejercicio 17: Calcula el área de un círculo memoizado con useMemo
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useMemo.
 * - El objetivo de este ejercicio es calcula el área de un círculo memoizado con usememo.
 */

import React, { useMemo, useState } from 'react';

function UseMemoExercise17() {
  const [contador, setContador] = useState(0);
  
  const memoizedValue = useMemo(() => {
    // Lógica memoizada
    return contador * 2;
  }, [contador]);

  return (
    <div>
      <h1>Calcula el área de un círculo memoizado con useMemo</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <p>Valor memoizado: {memoizedValue}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default UseMemoExercise17;
