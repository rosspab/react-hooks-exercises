
/**
 * Ejercicio 27: Maneja el estado de un temporizador con pausa y reinicio utilizando useReducer
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useReducer.
 * - El objetivo de este ejercicio es maneja el estado de un temporizador con pausa y reinicio utilizando usereducer.
 */

import React, { useReducer } from 'react';

// Definición del reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementar':
      return { ...state, contador: state.contador + 1 };
    case 'decrementar':
      return { ...state, contador: state.contador - 1 };
    default:
      return state;
  }
};

function UseReducerExercise27() {
  const [state, dispatch] = useReducer(reducer, { contador: 0 });

  return (
    <div>
      <h1>Maneja el estado de un temporizador con pausa y reinicio utilizando useReducer</h1>
      {/* Implementación aquí */}
      <p>Contador: {state.contador}</p>
      <button onClick={() => dispatch({ type: 'incrementar' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrementar' })}>Decrementar</button>
    </div>
  );
}

export default UseReducerExercise27;
