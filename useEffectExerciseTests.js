import { writeFileSync, mkdirSync, existsSync, unlinkSync } from 'fs';
import { join } from 'path';

// Número de ejercicios
const NUM_EXERCISES = 30;

// Directorios para ejercicios y tests
const exercisesDir = join(process.cwd(), 'src', 'exercises', 'useEffect');
const testsDir = join(process.cwd(), 'src', 'tests', 'useEffect');

// Lista de títulos de ejercicios
const exerciseTitles = [
    "Ejecuta un efecto al cargar el componente",
    "Ejecuta un efecto cuando cambie el estado de un contador",
    "Realiza una petición de datos con useEffect",
    "Desuscribe un evento de un WebSocket en useEffect",
    "Muestra un mensaje al desmontar el componente",
    "Simula un temporizador con useEffect",
    "Escucha eventos de teclado con useEffect",
    "Actualiza el título del documento con useEffect",
    "Detecta cuando el mouse entra en la ventana",
    "Cambia el color de fondo al hacer clic en un botón",
    "Envía una alerta después de 3 segundos con useEffect",
    "Simula una animación cuando cambie el estado",
    "Detiene una animación al desmontar el componente",
    "Configura un intervalo y límpialo al desmontar",
    "Guarda el estado en localStorage con useEffect",
    "Verifica la conexión a Internet con useEffect",
    "Crea un efecto que dependa de dos variables",
    "Actualiza un gráfico cuando cambie el estado",
    "Muestra un modal después de 5 segundos",
    "Suscribe a un evento de scroll con useEffect",
    "Simula una transición entre componentes",
    "Llama a una API cada 10 segundos",
    "Reproduce un sonido cuando se cambie un estado",
    "Muestra el tamaño de la ventana en tiempo real",
    "Simula una barra de progreso que avanza con el tiempo",
    "Deshabilita un botón después de hacer clic con useEffect",
    "Cuenta el número de clics en el documento",
    "Muestra un mensaje en consola cuando cambie un valor",
    "Detecta si un usuario está inactivo por más de 1 minuto",
    "Simula una lista de tareas que se guarda automáticamente"
];

// Plantilla base para los ejercicios
const exerciseTemplate = (i, title) => `
/**
 * Ejercicio ${i}: ${title}
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useEffect.
 * - El objetivo de este ejercicio es ${title.toLowerCase()}.
 */

import React, { useState, useEffect } from 'react';

function UseEffectExercise${i}() {
  // TODO: Implementa el ejercicio usando useEffect

  return (
    <div>
      <h1>${title}</h1>
      {/* Implementación aquí */}
    </div>
  );
}

export default UseEffectExercise${i};
`;

// Plantilla base para los tests
const testTemplate = (i, title) => `
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise${i} from '../../exercises/useEffect/UseEffectExercise${i}';

describe('UseEffectExercise${i}: ${title}', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise${i} />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('${title}');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
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
        const exercisePath = join(exercisesDir, `UseEffectExercise${i}.jsx`);
        const testPath = join(testsDir, `UseEffectExercise${i}.test.jsx`);

        // Eliminar archivos existentes
        deleteFileIfExists(exercisePath);
        deleteFileIfExists(testPath);

        // Escribir o reemplazar el archivo de ejercicio
        writeFileSync(exercisePath, exerciseTemplate(i, exerciseTitles[i - 1]), 'utf8');

        // Escribir o reemplazar el archivo de test
        writeFileSync(testPath, testTemplate(i, exerciseTitles[i - 1]), 'utf8');
    }

    console.log(`${NUM_EXERCISES} ejercicios y tests creados para useEffect.`);
}

// Ejecutar la función
generateFiles();