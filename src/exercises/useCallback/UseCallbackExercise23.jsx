
/**
 * Ejercicio 23: Maneja una galería de imágenes utilizando una función memorizada con useCallback
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es maneja una galería de imágenes utilizando una función memorizada con usecallback.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise23() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>Maneja una galería de imágenes utilizando una función memorizada con useCallback</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise23;
