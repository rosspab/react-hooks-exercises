
/**
 * Ejercicio 29: Crea un sistema de búsqueda con filtros y paginación utilizando useReducer
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useReducer.
 * - El objetivo de este ejercicio es crea un sistema de búsqueda con filtros y paginación utilizando usereducer.
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

function UseReducerExercise29() {
  const [state, dispatch] = useReducer(reducer, { contador: 0 });

  return (
    <div>
      <h1>Crea un sistema de búsqueda con filtros y paginación utilizando useReducer</h1>
      {/* Implementación aquí */}
      <p>Contador: {state.contador}</p>
      <button onClick={() => dispatch({ type: 'incrementar' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrementar' })}>Decrementar</button>
    </div>
  );
}

export default UseReducerExercise29;
