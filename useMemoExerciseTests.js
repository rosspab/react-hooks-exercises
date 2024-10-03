import { writeFileSync, mkdirSync, existsSync, unlinkSync } from 'fs';
import { join } from 'path';

// Número de ejercicios
const NUM_EXERCISES = 30;

// Directorios para ejercicios y tests
const exercisesDir = join(process.cwd(), 'src', 'exercises', 'useMemo');
const testsDir = join(process.cwd(), 'src', 'tests', 'useMemo');

// Lista de títulos de ejercicios
const exerciseTitles = [
    "Memoriza el valor doble de un número con useMemo",
    "Memoriza una lista filtrada utilizando useMemo",
    "Calcula un factorial memoizado con useMemo",
    "Memoriza una lista de tareas completadas con useMemo",
    "Memoriza el valor máximo en una lista de números con useMemo",
    "Memoriza un cálculo pesado de suma con useMemo",
    "Memoriza el valor de un filtro de productos con useMemo",
    "Calcula el promedio de una lista de números usando useMemo",
    "Memoriza el valor de una búsqueda filtrada en una lista de usuarios con useMemo",
    "Memoriza el estado de una barra de progreso con useMemo",
    "Memoriza los resultados de una consulta a una API simulada con useMemo",
    "Memoriza la clasificación de una lista de elementos con useMemo",
    "Calcula el valor más frecuente en un array con useMemo",
    "Memoriza el valor total de un carrito de compras con useMemo",
    "Memoriza los valores de un contador de doble incremento con useMemo",
    "Memoriza una lista de notas ordenada por prioridad usando useMemo",
    "Calcula el área de un círculo memoizado con useMemo",
    "Memoriza la lista de artículos seleccionados con useMemo",
    "Memoriza el tiempo transcurrido desde una fecha inicial con useMemo",
    "Memoriza una lista de números primos generada con useMemo",
    "Calcula y memoriza los puntos de un juego con useMemo",
    "Memoriza el nombre completo de un usuario utilizando useMemo",
    "Memoriza la secuencia Fibonacci con useMemo",
    "Memoriza la lista de categorías seleccionadas con useMemo",
    "Calcula el cuadrado de un número con useMemo",
    "Memoriza los valores únicos de una lista de productos con useMemo",
    "Memoriza una lista de eventos ordenados cronológicamente con useMemo",
    "Calcula el promedio de calificaciones utilizando useMemo",
    "Memoriza el historial de un contador con useMemo",
    "Memoriza la lista de tareas completadas en una semana con useMemo"
];

// Plantilla base para los ejercicios
const exerciseTemplate = (i, title) => `
/**
 * Ejercicio ${i}: ${title}
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useMemo.
 * - El objetivo de este ejercicio es ${title.toLowerCase()}.
 */

import React, { useMemo, useState } from 'react';

function UseMemoExercise${i}() {
  const [contador, setContador] = useState(0);
  
  const memoizedValue = useMemo(() => {
    // Lógica memoizada
    return contador * 2;
  }, [contador]);

  return (
    <div>
      <h1>${title}</h1>
      {/* Implementación aquí */}
      <p>Contador: {contador}</p>
      <p>Valor memoizado: {memoizedValue}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default UseMemoExercise${i};
`;

// Plantilla base para los tests
const testTemplate = (i, title) => `
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseMemoExercise${i} from '../../exercises/useMemo/UseMemoExercise${i}';

describe('UseMemoExercise${i}: ${title}', () => {
  it('se renderiza correctamente y memoriza el valor', () => {
    render(<UseMemoExercise${i} />);

    // Verifica que el componente se renderiza correctamente
    const button = screen.getByText('Incrementar');
    expect(button).toBeInTheDocument();

    // Verifica que el contador inicial es 0
    const contador = screen.getByText(/Contador: 0/i);
    expect(contador).toBeInTheDocument();

    // Simula un clic en el botón de incrementar
    fireEvent.click(button);
    const contadorActualizado = screen.getByText(/Contador: 1/i);
    expect(contadorActualizado).toBeInTheDocument();

    // Verifica que el valor memoizado es el doble
    const memoizedValue = screen.getByText(/Valor memoizado: 2/i);
    expect(memoizedValue).toBeInTheDocument();
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
        const exercisePath = join(exercisesDir, `UseMemoExercise${i}.jsx`);
        const testPath = join(testsDir, `UseMemoExercise${i}.test.jsx`);

        // Eliminar archivos existentes
        deleteFileIfExists(exercisePath);
        deleteFileIfExists(testPath);

        // Escribir o reemplazar el archivo de ejercicio
        writeFileSync(exercisePath, exerciseTemplate(i, exerciseTitles[i - 1]), 'utf8');

        // Escribir o reemplazar el archivo de test
        writeFileSync(testPath, testTemplate(i, exerciseTitles[i - 1]), 'utf8');
    }

    console.log(`${NUM_EXERCISES} ejercicios y tests creados para useMemo.`);
}

// Ejecutar la función
generateFiles();
