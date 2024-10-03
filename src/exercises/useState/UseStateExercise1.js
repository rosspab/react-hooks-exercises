
/**
 * Ejercicio 1: Crea un contador básico con useState
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useState.
 * - El objetivo de este ejercicio es crea un contador básico con usestate.
 */

import React, { useState } from 'react';

function UseStateExercise1() {
  // TODO: Implementa el ejercicio usando useState
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Crea un contador básico con useState</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar boton</button>
    </div>
  );
}

export default UseStateExercise1;
