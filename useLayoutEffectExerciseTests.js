import { writeFileSync, mkdirSync, existsSync, unlinkSync } from 'fs';
import { join } from 'path';

// Número de ejercicios
const NUM_EXERCISES = 30;

// Directorios para ejercicios y tests
const exercisesDir = join(process.cwd(), 'src', 'exercises', 'useLayoutEffect');
const testsDir = join(process.cwd(), 'src', 'tests', 'useLayoutEffect');

// Lista de títulos de ejercicios
const exerciseTitles = [
    "Mide el ancho de un elemento al cargarse con useLayoutEffect",
    "Ajusta el tamaño de una caja según el tamaño de la ventana con useLayoutEffect",
    "Posiciona un elemento en la página usando useLayoutEffect",
    "Cambia el color de un botón al renderizar con useLayoutEffect",
    "Memoriza las coordenadas del mouse en un div con useLayoutEffect",
    "Ajusta el scroll de una página al renderizar con useLayoutEffect",
    "Crea un slider de imágenes que ajusta su posición con useLayoutEffect",
    "Ajusta el tamaño de un modal al cargarse con useLayoutEffect",
    "Resalta un texto después de renderizar con useLayoutEffect",
    "Coloca un tooltip basado en la posición de un botón con useLayoutEffect",
    "Guarda la posición de un div tras el renderizado con useLayoutEffect",
    "Verifica si un elemento está en la vista con useLayoutEffect",
    "Calcula el tamaño total de un componente con useLayoutEffect",
    "Anima un div en el DOM cuando se carga con useLayoutEffect",
    "Cambia la fuente de un texto dinámicamente con useLayoutEffect",
    "Fija un encabezado en la parte superior al hacer scroll con useLayoutEffect",
    "Ajusta la visibilidad de un elemento en la página con useLayoutEffect",
    "Rota un objeto al inicializar con useLayoutEffect",
    "Redimensiona un gráfico tras renderizar con useLayoutEffect",
    "Calcula el desplazamiento total en una lista larga con useLayoutEffect",
    "Ajusta el margen dinámico de un contenedor con useLayoutEffect",
    "Controla un reloj que actualiza su posición con useLayoutEffect",
    "Guarda la altura de un elemento tras el renderizado con useLayoutEffect",
    "Cambia la orientación de un div con useLayoutEffect",
    "Ancla un menú desplegable tras cargar la página con useLayoutEffect",
    "Redimensiona una tabla tras su renderizado con useLayoutEffect",
    "Ajusta el ancho de una imagen al cargarse con useLayoutEffect",
    "Memoriza el tamaño de un banner tras su renderizado con useLayoutEffect",
    "Coloca un botón en una posición específica con useLayoutEffect",
    "Ajusta la altura dinámica de una lista con useLayoutEffect"
];

// Plantilla base para los ejercicios
const exerciseTemplate = (i, title) => `
/**
 * Ejercicio ${i}: ${title}
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useLayoutEffect.
 * - El objetivo de este ejercicio es ${title.toLowerCase()}.
 */

import React, { useLayoutEffect, useRef, useState } from 'react';

function UseLayoutEffectExercise${i}() {
  const ref = useRef(null);
  const [dimension, setDimension] = useState(0);

  useLayoutEffect(() => {
    // Lógica de useLayoutEffect, como medir un elemento o ajustar algo en el DOM
    if (ref.current) {
      setDimension(ref.current.getBoundingClientRect().width);
    }
  }, []);

  return (
    <div>
      <h1>${title}</h1>
      <div ref={ref} style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}>
        Elemento con ancho: {dimension}px
      </div>
    </div>
  );
}

export default UseLayoutEffectExercise${i};
`;

// Plantilla base para los tests
const testTemplate = (i, title) => `
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseLayoutEffectExercise${i} from '../../exercises/useLayoutEffect/UseLayoutEffectExercise${i}';

describe('UseLayoutEffectExercise${i}: ${title}', () => {
  it('se renderiza correctamente y mide el ancho del elemento', () => {
    render(<UseLayoutEffectExercise${i} />);

    // Verifica que el componente se renderiza correctamente
    const elemento = screen.getByText(/Elemento con ancho:/i);
    expect(elemento).toBeInTheDocument();

    // Verifica que el ancho del elemento es 100px
    expect(elemento).toHaveTextContent(/100px/);
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
        const exercisePath = join(exercisesDir, `UseLayoutEffectExercise${i}.jsx`);
        const testPath = join(testsDir, `UseLayoutEffectExercise${i}.test.jsx`);

        // Eliminar archivos existentes
        deleteFileIfExists(exercisePath);
        deleteFileIfExists(testPath);

        // Escribir o reemplazar el archivo de ejercicio
        writeFileSync(exercisePath, exerciseTemplate(i, exerciseTitles[i - 1]), 'utf8');

        // Escribir o reemplazar el archivo de test
        writeFileSync(testPath, testTemplate(i, exerciseTitles[i - 1]), 'utf8');
    }

    console.log(`${NUM_EXERCISES} ejercicios y tests creados para useLayoutEffect.`);
}

// Ejecutar la función
generateFiles();
