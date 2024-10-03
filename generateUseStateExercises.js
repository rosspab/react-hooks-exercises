import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

// Número de ejercicios
const NUM_EXERCISES = 30;

// Directorios para ejercicios
const exercisesDir = join(process.cwd(), 'src', 'exercises', 'useState');

// Lista de títulos de ejercicios
const exerciseTitles = [
  "Crea un contador básico con useState",
  "Maneja un campo de texto con useState",
  "Crea un botón que alterne entre dos valores",
  "Muestra un contador que aumente o disminuya según el botón",
  "Cambia el color de fondo al hacer clic",
  "Oculta o muestra un párrafo con useState",
  "Controla el estado de un checkbox con useState",
  "Actualiza un array al añadir un nuevo elemento",
  "Simula una lista de tareas con useState",
  "Guarda y muestra el último valor de un input",
  "Maneja múltiples estados en un formulario simple",
  "Resetea el estado de un formulario al enviar",
  "Alterna entre dos imágenes con useState",
  "Muestra un temporizador que aumenta cada segundo",
  "Controla un número máximo y mínimo en un contador",
  "Guarda el historial de clics en un array",
  "Crea un botón que añada elementos a una lista",
  "Cambia entre diferentes mensajes al hacer clic",
  "Deshabilita un botón después de hacer clic",
  "Implementa un contador que no permite valores negativos",
  "Crea un contador de doble velocidad (aumenta de 2 en 2)",
  "Controla un contador de decimales con useState",
  "Implementa una barra de progreso con useState",
  "Simula un sistema de votación con dos botones",
  "Cambia entre diferentes temas de color con useState",
  "Guarda el historial de inputs en un array",
  "Resetea el estado al hacer doble clic en el botón",
  "Incrementa automáticamente un contador cada 3 segundos",
  "Simula un semáforo cambiando entre tres estados",
  "Controla la visibilidad de un modal con useState"
];

// Plantillas base para los ejercicios
const exerciseTemplate = (i, title) => `
/**
 * Ejercicio ${i}: ${title}
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useState.
 * - El objetivo de este ejercicio es ${title.toLowerCase()}.
 */

import React, { useState } from 'react';

function UseStateExercise${i}() {
  // TODO: Implementa el ejercicio usando useState

  return (
    <div>
      <h1>${title}</h1>
      {/* Implementación aquí */}
    </div>
  );
}

export default UseStateExercise${i};
`;

// Función para crear directorios si no existen
function createDirectory(dirPath) {
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
}

// Función para generar los archivos de ejercicios
function generateFiles() {
  // Crear directorios si no existen
  createDirectory(exercisesDir);

  for (let i = 1; i <= NUM_EXERCISES; i++) {
    const exercisePath = join(exercisesDir, `UseStateExercise${i}.js`);

    // Escribir o reemplazar el archivo de ejercicio
    writeFileSync(exercisePath, exerciseTemplate(i, exerciseTitles[i - 1]), 'utf8');
  }

  console.log(`${NUM_EXERCISES} ejercicios creados para useState.`);
}

// Ejecutar la función
generateFiles();