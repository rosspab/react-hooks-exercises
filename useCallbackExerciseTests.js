import { writeFileSync, mkdirSync, existsSync, unlinkSync } from 'fs';
import { join } from 'path';

// Número de ejercicios
const NUM_EXERCISES = 30;

// Directorios para ejercicios y tests
const exercisesDir = join(process.cwd(), 'src', 'exercises', 'useCallback');
const testsDir = join(process.cwd(), 'src', 'tests', 'useCallback');

// Lista de títulos de ejercicios
const exerciseTitles = [
    "Crea una función memorizada con useCallback",
    "Implementa una función que se memorizada y solo cambia con el estado",
    "Usa useCallback para evitar la creación de funciones innecesarias",
    "Crea un contador con incremento y decremento utilizando useCallback",
    "Maneja un input controlado con una función memorizada con useCallback",
    "Usa useCallback para manejar un evento de clic",
    "Implementa un botón de reinicio con useCallback",
    "Crea un temporizador utilizando useCallback para iniciar y detener",
    "Usa useCallback para evitar renderizaciones innecesarias en un componente hijo",
    "Crea un buscador que utiliza useCallback para manejar las entradas",
    "Maneja el cambio de tema (claro/oscuro) con una función memorizada",
    "Implementa una lista de tareas utilizando useCallback para añadir y eliminar tareas",
    "Usa useCallback para manejar el envío de un formulario",
    "Crea una función de suma memorizada que solo se actualiza cuando cambian los operandos",
    "Usa useCallback en conjunto con useEffect para ejecutar una función memorizada",
    "Maneja un dropdown con una función memorizada",
    "Crea un sistema de favoritos utilizando useCallback para añadir y eliminar elementos",
    "Usa useCallback para crear un componente de contador que no se vuelva a renderizar innecesariamente",
    "Implementa una función de filtro que se memorizada con useCallback",
    "Usa useCallback para manejar eventos del teclado en un formulario",
    "Crea un temporizador que se puede pausar y reanudar utilizando useCallback",
    "Usa useCallback para manejar eventos de arrastrar y soltar (drag-and-drop)",
    "Maneja una galería de imágenes utilizando una función memorizada con useCallback",
    "Implementa un contador que se incrementa automáticamente utilizando useCallback",
    "Usa useCallback para manejar una función de autocompletar",
    "Crea una barra de progreso utilizando useCallback para actualizar el estado",
    "Implementa un sistema de votación con useCallback para manejar los votos",
    "Usa useCallback para manejar el desplazamiento (scroll) en una lista",
    "Crea una lista de productos con función de búsqueda memorizada con useCallback",
    "Maneja el estado de un formulario largo utilizando useCallback"
];

// Plantilla base para los ejercicios
const exerciseTemplate = (i, title) => `
/**
 * Ejercicio ${i}: ${title}
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useCallback.
 * - El objetivo de este ejercicio es ${title.toLowerCase()}.
 */

import React, { useState, useCallback } from 'react';

function UseCallbackExercise${i}() {
  const [contador, setContador] = useState(0);

  // TODO: Implementa la función memorizada utilizando useCallback
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <h1>${title}</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default UseCallbackExercise${i};
`;

// Plantilla base para los tests
const testTemplate = (i, title) => `
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseCallbackExercise${i} from '../../exercises/useCallback/UseCallbackExercise${i}';

describe('UseCallbackExercise${i}: ${title}', () => {
  it('se renderiza correctamente y permite incrementar el contador', () => {
    render(<UseCallbackExercise${i} />);

    // Verifica que el componente se renderiza correctamente
    const button = screen.getByText('Incrementar');
    expect(button).toBeInTheDocument();

    // Simula un clic en el botón y verifica que el contador incrementa
    fireEvent.click(button);
    const counter = screen.getByText(/Contador: 1/i);
    expect(counter).toBeInTheDocument();
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
        const exercisePath = join(exercisesDir, `UseCallbackExercise${i}.jsx`);
        const testPath = join(testsDir, `UseCallbackExercise${i}.test.jsx`);

        // Eliminar archivos existentes
        deleteFileIfExists(exercisePath);
        deleteFileIfExists(testPath);

        // Escribir o reemplazar el archivo de ejercicio
        writeFileSync(exercisePath, exerciseTemplate(i, exerciseTitles[i - 1]), 'utf8');

        // Escribir o reemplazar el archivo de test
        writeFileSync(testPath, testTemplate(i, exerciseTitles[i - 1]), 'utf8');
    }

    console.log(`${NUM_EXERCISES} ejercicios y tests creados para useCallback.`);
}

// Ejecutar la función
generateFiles();
