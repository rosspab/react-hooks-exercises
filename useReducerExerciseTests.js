import { writeFileSync, mkdirSync, existsSync, unlinkSync } from 'fs';
import { join } from 'path';

// Número de ejercicios
const NUM_EXERCISES = 30;

// Directorios para ejercicios y tests
const exercisesDir = join(process.cwd(), 'src', 'exercises', 'useReducer');
const testsDir = join(process.cwd(), 'src', 'tests', 'useReducer');

// Lista de títulos de ejercicios
const exerciseTitles = [
    "Crea un contador básico utilizando useReducer",
    "Maneja un formulario simple con useReducer",
    "Implementa un estado de múltiples campos utilizando useReducer",
    "Crea un sistema de tareas (todo list) utilizando useReducer",
    "Implementa un contador con incremento y decremento utilizando useReducer",
    "Maneja un input de texto con validación utilizando useReducer",
    "Crea un sistema de favoritos utilizando useReducer",
    "Usa useReducer para controlar el estado de un modal",
    "Implementa una lista de productos con useReducer",
    "Crea un sistema de navegación de páginas con useReducer",
    "Maneja un estado de varias opciones de checkbox utilizando useReducer",
    "Implementa una calculadora básica utilizando useReducer",
    "Crea un temporizador utilizando useReducer",
    "Maneja el estado de un carrito de compras utilizando useReducer",
    "Implementa un sistema de votación utilizando useReducer",
    "Crea una lista de contactos utilizando useReducer",
    "Maneja la visibilidad de elementos en pantalla con useReducer",
    "Crea una galería de imágenes con selección múltiple utilizando useReducer",
    "Implementa un sistema de favoritos con filtros utilizando useReducer",
    "Crea un sistema de historial de navegación utilizando useReducer",
    "Maneja la selección de una lista de opciones con useReducer",
    "Implementa un sistema de pestañas (tabs) utilizando useReducer",
    "Crea un tablero de tareas arrastrables (drag-and-drop) utilizando useReducer",
    "Maneja un contador que guarda un historial de cambios con useReducer",
    "Implementa un sistema de enrutamiento básico utilizando useReducer",
    "Crea un editor de texto con múltiples estados utilizando useReducer",
    "Maneja el estado de un temporizador con pausa y reinicio utilizando useReducer",
    "Implementa un formulario largo con validación de múltiples campos utilizando useReducer",
    "Crea un sistema de búsqueda con filtros y paginación utilizando useReducer",
    "Maneja el estado de un sistema de comentarios utilizando useReducer"
];

// Plantilla base para los ejercicios
const exerciseTemplate = (i, title) => `
/**
 * Ejercicio ${i}: ${title}
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useReducer.
 * - El objetivo de este ejercicio es ${title.toLowerCase()}.
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

function UseReducerExercise${i}() {
  const [state, dispatch] = useReducer(reducer, { contador: 0 });

  return (
    <div>
      <h1>${title}</h1>
      {/* Implementación aquí */}
      <p>Contador: {state.contador}</p>
      <button onClick={() => dispatch({ type: 'incrementar' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrementar' })}>Decrementar</button>
    </div>
  );
}

export default UseReducerExercise${i};
`;

// Plantilla base para los tests
const testTemplate = (i, title) => `
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseReducerExercise${i} from '../../exercises/useReducer/UseReducerExercise${i}';

describe('UseReducerExercise${i}: ${title}', () => {
  it('se renderiza correctamente y permite incrementar y decrementar el contador', () => {
    render(<UseReducerExercise${i} />);

    // Verifica que el componente se renderiza correctamente
    const incrementarButton = screen.getByText('Incrementar');
    const decrementarButton = screen.getByText('Decrementar');
    expect(incrementarButton).toBeInTheDocument();
    expect(decrementarButton).toBeInTheDocument();

    // Simula un clic en el botón de incrementar y verifica que el contador aumenta
    fireEvent.click(incrementarButton);
    const counter = screen.getByText(/Contador: 1/i);
    expect(counter).toBeInTheDocument();

    // Simula un clic en el botón de decrementar y verifica que el contador disminuye
    fireEvent.click(decrementarButton);
    const counterZero = screen.getByText(/Contador: 0/i);
    expect(counterZero).toBeInTheDocument();
  });
});
`;

// Función para crear directorios si no existen
function createDirectory(dirPath) {
    if (!existsSync(dirPath)) {
        mkdirSync(dirPath, { recursive: true });
    }
}

// Función para eliminar archivos si existen
function deleteFileIfExists(filePath) {
    if (existsSync(filePath)) {
        unlinkSync(filePath);
    }
}

// Función para generar los archivos de ejercicios y tests
function generateFiles() {
    // Crear directorios si no existen
    createDirectory(exercisesDir);
    createDirectory(testsDir);

    for (let i = 1; i <= NUM_EXERCISES; i++) {
        const exercisePath = join(exercisesDir, `UseReducerExercise${i}.jsx`);
        const testPath = join(testsDir, `UseReducerExercise${i}.test.jsx`);

        // Eliminar archivos existentes
        deleteFileIfExists(exercisePath);
        deleteFileIfExists(testPath);

        // Escribir o reemplazar el archivo de ejercicio
        writeFileSync(exercisePath, exerciseTemplate(i, exerciseTitles[i - 1]), 'utf8');

        // Escribir o reemplazar el archivo de test
        writeFileSync(testPath, testTemplate(i, exerciseTitles[i - 1]), 'utf8');
    }

    console.log(`${NUM_EXERCISES} ejercicios y tests creados para useReducer.`);
}

// Ejecutar la función
generateFiles();
