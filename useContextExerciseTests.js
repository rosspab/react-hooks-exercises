import { writeFileSync, mkdirSync, existsSync, unlinkSync } from 'fs';
import { join } from 'path';

// Número de ejercicios
const NUM_EXERCISES = 30;

// Directorios para ejercicios y tests
const exercisesDir = join(process.cwd(), 'src', 'exercises', 'useContext');
const testsDir = join(process.cwd(), 'src', 'tests', 'useContext');

// Lista de títulos de ejercicios
const exerciseTitles = [
    "Crea un contexto simple y utiliza su valor",
    "Crea un contexto para el tema oscuro y claro",
    "Utiliza useContext para compartir datos entre componentes",
    "Crea un contador global utilizando useContext",
    "Usa useContext para manejar la autenticación de usuarios",
    "Utiliza useContext para compartir el idioma entre componentes",
    "Crea un contexto para gestionar el estado de una modal",
    "Implementa una barra de navegación que utiliza contexto",
    "Crea un contexto para manejar el carrito de compras",
    "Crea un contexto para la configuración de un juego",
    "Implementa una funcionalidad de favoritos con useContext",
    "Usa useContext para manejar los permisos de usuario",
    "Utiliza useContext para un sistema de notificaciones",
    "Crea un formulario que comparte su estado con useContext",
    "Usa useContext para controlar la visibilidad de un componente",
    "Crea un contexto para guardar el historial de navegación",
    "Implementa un switch para activar o desactivar características con useContext",
    "Utiliza useContext para manejar un sistema de votación",
    "Usa useContext para controlar el estado de la pantalla completa",
    "Crea un contexto para manejar el tema y la fuente de la aplicación",
    "Implementa un sistema de búsqueda global con useContext",
    "Usa useContext para gestionar las preferencias del usuario",
    "Crea un contexto para gestionar la paginación de una lista",
    "Utiliza useContext para controlar los ajustes de accesibilidad",
    "Crea un sistema de multi-idioma con useContext",
    "Implementa un sistema de autenticación con roles usando useContext",
    "Crea un contexto para manejar la configuración de sonido de una app",
    "Usa useContext para manejar el estado de una lista de tareas",
    "Utiliza useContext para gestionar una API de música",
    "Crea un sistema de temas personalizables con useContext"
];

// Plantilla base para los ejercicios
const exerciseTemplate = (i, title) => `
/**
 * Ejercicio ${i}: ${title}
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useContext.
 * - El objetivo de este ejercicio es ${title.toLowerCase()}.
 */

import React, { useContext, createContext } from 'react';

// Crea un contexto inicial
const ExampleContext = createContext(null);

function UseContextExercise${i}() {
  // TODO: Implementa el ejercicio usando useContext
  const contextValue = useContext(ExampleContext);

  return (
    <div>
      <h1>${title}</h1>
      {/* Implementación aquí */}
      <p>Valor del contexto: {contextValue}</p>
    </div>
  );
}

export default UseContextExercise${i};
`;

// Plantilla base para los tests
const testTemplate = (i, title) => `
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseContextExercise${i} from '../../exercises/useContext/UseContextExercise${i}';
import { createContext } from 'react';

// Crea un contexto para usar en el test
const ExampleContext = createContext('Valor de prueba');

describe('UseContextExercise${i}: ${title}', () => {
  it('se renderiza correctamente y muestra el valor del contexto', () => {
    render(
      <ExampleContext.Provider value="Valor de prueba">
        <UseContextExercise${i} />
      </ExampleContext.Provider>
    );

    // Verifica que el componente se renderiza correctamente y muestra el valor del contexto
    const header = screen.getByText('${title}');
    expect(header).toBeInTheDocument();

    const contextValue = screen.getByText(/Valor de prueba/i);
    expect(contextValue).toBeInTheDocument();
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
        const exercisePath = join(exercisesDir, `UseContextExercise${i}.jsx`);
        const testPath = join(testsDir, `UseContextExercise${i}.test.jsx`);

        // Eliminar archivos existentes
        deleteFileIfExists(exercisePath);
        deleteFileIfExists(testPath);

        // Escribir o reemplazar el archivo de ejercicio
        writeFileSync(exercisePath, exerciseTemplate(i, exerciseTitles[i - 1]), 'utf8');

        // Escribir o reemplazar el archivo de test
        writeFileSync(testPath, testTemplate(i, exerciseTitles[i - 1]), 'utf8');
    }

    console.log(`${NUM_EXERCISES} ejercicios y tests creados para useContext.`);
}

// Ejecutar la función
generateFiles();
