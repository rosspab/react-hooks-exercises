# Hooks en React: Estructura y Funcionamiento en el Desarrollo Web

## Portada

**Universidad Latinoamericana de la Ciencia y la Tecnología**  
**Pablo Andrés Soto De Carlo**  
**Warner Carrillo**  
**Servicios y desarrollo web**  
**3CO 2024**

---

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [¿Qué es un Hook?](#qué-es-un-hook)
3. [¿Cómo funcionan los hooks?](#cómo-funcionan-los-hooks)
4. [Limitantes de los hooks](#limitantes-de-los-hooks)
5. [Ejercicios de Hooks en React](#ejercicios-de-hooks-en-react)
    - [Ejercicio 1: useState](#ejercicio-1-usestate)
    - [Ejercicio 2: useEffect](#ejercicio-2-useeffect)
    - [Ejercicio 3: useContext](#ejercicio-3-usecontext)
    - [Ejercicio 4: useCallback](#ejercicio-4-usecallback)
    - [Ejercicio 5: useReducer](#ejercicio-5-usereducer)
    - [Ejercicio 6: useMemo](#ejercicio-6-usememo)
    - [Ejercicio 7: useLayoutEffect](#ejercicio-7-uselayeffect)
6. [Conclusión](#conclusión)

---

## Introducción

En la última década, React se ha consolidado como una de las bibliotecas más populares para el desarrollo de interfaces de usuario. La introducción de los hooks en React ha cambiado significativamente la forma en que los desarrolladores manejan el estado y los ciclos de vida de los componentes. Este documento explora qué son los hooks, cómo funcionan, sus limitaciones y ofrece ejemplos de los hooks más utilizados en la biblioteca.

## ¿Qué es un Hook?

Los hooks son funciones que permiten a los desarrolladores de React utilizar el estado y otras características de React sin escribir una clase. Se introdujeron en React 16.8 y proporcionan una manera más funcional y concisa de gestionar la lógica del componente.

## ¿Cómo funcionan los hooks?

Los hooks se invocan dentro de los componentes funcionales y permiten acceder a funcionalidades que anteriormente solo estaban disponibles en los componentes de clase. Los hooks siguen ciertas reglas, como ser llamados en el nivel superior y solo dentro de componentes de React.

## Limitantes de los hooks

A pesar de su versatilidad, los hooks tienen limitaciones. Por ejemplo, no se pueden llamar condicionalmente, y su uso en componentes de clase es inexistente. Estas restricciones son importantes para mantener el orden y la previsibilidad en la ejecución de los hooks.

Vamos a comenzar con el primer hook: **useState**.

### useState

#### Descripción

El hook `useState` es uno de los hooks más utilizados en React. Permite a los componentes funcionales tener y manejar un estado, algo que antes solo era posible en los componentes de clase. `useState` devuelve un par de valores: el estado actual y una función que permite actualizar ese estado.

#### Funcionalidad

Este hook se utiliza principalmente para gestionar el estado local de un componente. Cuando el estado cambia, el componente se vuelve a renderizar para reflejar el nuevo valor del estado.

#### ¿Cómo funciona?

`useState` toma como argumento el valor inicial del estado y devuelve un array con dos elementos:
1. El valor actual del estado.
2. Una función que te permite actualizar el valor del estado.

Cada vez que la función que actualiza el estado se llama, React vuelve a renderizar el componente para reflejar el cambio de estado.

#### Ejemplo

```javascript
import React, { useState } from 'react';

function Contador() {
  // Declaración de una variable de estado llamada "contador"
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar contador
      </button>
    </div>
  );
}

export default Contador;
```

#### Explicación del ejemplo

1. **Declaración del estado**: Se utiliza `useState(0)` para inicializar una variable `contador` con un valor de `0`. 
   
2. **Actualizar el estado**: Cuando se presiona el botón, la función `setContador` se ejecuta y aumenta el valor del contador en 1. Esto causa que el componente se vuelva a renderizar mostrando el nuevo valor del contador.

3. **Reactividad**: Cada vez que el estado cambia, React se asegura de que el componente actualice su interfaz de manera eficiente para reflejar los nuevos datos.

Este es un ejemplo básico para entender cómo funciona `useState`. En el siguiente hook, vamos a construir sobre este ejemplo para ir ampliando la funcionalidad.

### useEffect

#### Descripción

El hook `useEffect` se utiliza para gestionar efectos secundarios en componentes funcionales. Un efecto secundario es cualquier operación que interactúa con el mundo exterior del componente, como una llamada a una API, la manipulación del DOM o el uso de suscripciones. `useEffect` permite ejecutar lógica después de que el componente haya renderizado y cuando ocurra algún cambio en las dependencias especificadas.

#### Funcionalidad

`useEffect` se ejecuta después de cada renderizado del componente. Si se le proporcionan dependencias (una lista de variables), el efecto solo se ejecutará cuando alguna de esas variables cambie. Además, puede retornar una función de limpieza para liberar recursos o cancelar operaciones como suscripciones o timers.

#### ¿Cómo funciona?

`useEffect` toma dos argumentos:
1. Una función que contiene el código a ejecutar (el efecto).
2. Un array de dependencias opcional. El efecto se ejecuta cuando cualquiera de las dependencias en este array cambia. Si se deja vacío, el efecto solo se ejecutará una vez cuando el componente se monte.

#### Ejemplo

```javascript
import React, { useState, useEffect } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  // useEffect para actualizar el título de la página con el valor del contador
  useEffect(() => {
    document.title = `Has hecho clic ${contador} veces`;
  }, [contador]); // Se ejecuta cada vez que 'contador' cambia

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar contador
      </button>
    </div>
  );
}

export default Contador;
```

#### Explicación del ejemplo

1. **Uso de `useEffect`**: El hook `useEffect` en este ejemplo actualiza el título de la página web con el número de clics del contador. La función pasada a `useEffect` se ejecuta después de que el componente haya sido renderizado.

2. **Dependencias**: El segundo argumento, `[contador]`, le indica a `useEffect` que solo debe ejecutarse cuando el valor de `contador` cambie. Esto optimiza el rendimiento al evitar que el efecto se ejecute innecesariamente.

3. **Renderización y efectos secundarios**: Mientras el estado `contador` cambia, el componente se vuelve a renderizar, y `useEffect` actualiza el título de la página con el valor actualizado.

Este ejemplo muestra cómo `useEffect` se puede utilizar junto con `useState` para realizar operaciones basadas en los cambios de estado, gestionando correctamente los efectos secundarios.

### useContext

#### Descripción

El hook `useContext` permite a los componentes funcionales acceder a valores almacenados en un contexto de React sin tener que pasar props manualmente a lo largo de varios niveles de componentes. `useContext` simplifica la forma en que los datos se comparten entre componentes que no están directamente relacionados en la jerarquía de componentes.

#### Funcionalidad

`useContext` toma un contexto creado previamente mediante `React.createContext` y devuelve el valor actual del contexto, permitiendo que el componente suscrito se renderice automáticamente si el valor del contexto cambia.

#### ¿Cómo funciona?

1. Se crea un contexto con `React.createContext()`.
2. El valor del contexto se proporciona mediante el componente `Context.Provider`.
3. Los componentes que necesiten acceder a ese valor usan el hook `useContext` para obtenerlo directamente sin tener que pasarlo a través de props.

#### Ejemplo

En este ejemplo, agregamos un contexto al código anterior para controlar un tema de colores en la interfaz:

```javascript
import React, { useState, useEffect, useContext, createContext } from 'react';

// Creamos un contexto para el tema
const TemaContext = createContext();

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Has hecho clic ${contador} veces`;
  }, [contador]);

  // Obtenemos el valor del tema del contexto
  const tema = useContext(TemaContext);

  return (
    <div style={{ backgroundColor: tema.fondo, color: tema.texto }}>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar contador
      </button>
    </div>
  );
}

function App() {
  const temaClaro = {
    fondo: '#fff',
    texto: '#000'
  };

  return (
    // Proveemos el tema al componente a través del contexto
    <TemaContext.Provider value={temaClaro}>
      <Contador />
    </TemaContext.Provider>
  );
}

export default App;
```

#### Explicación del ejemplo

1. **Creación del contexto**: Usamos `createContext` para crear `TemaContext`, que se encarga de gestionar el tema de la aplicación.

2. **Uso de `useContext`**: En el componente `Contador`, usamos el hook `useContext` para acceder al valor del contexto (en este caso, el tema de la aplicación).

3. **Proveemos el contexto**: En el componente `App`, el valor del tema (`temaClaro`) se pasa al `Provider` de `TemaContext`. Cualquier componente dentro de este `Provider` puede acceder al valor del contexto sin tener que recibirlo como prop.

4. **Estilo dinámico**: El estilo del componente `Contador` cambia según el tema obtenido del contexto, aplicando los colores de fondo y texto dinámicamente.

Este ejemplo muestra cómo `useContext` facilita la gestión de estados globales o valores compartidos, como el tema, sin tener que pasar props a través de múltiples niveles de componentes.

### useCallback

#### Descripción

El hook `useCallback` se utiliza para memorizar funciones en React, evitando que se vuelvan a crear en cada renderizado a menos que cambien sus dependencias. Esto es útil para optimizar el rendimiento, especialmente cuando se pasan funciones como props a componentes hijos, lo que puede desencadenar renderizados innecesarios si la función cambia en cada render.

#### Funcionalidad

`useCallback` devuelve una versión memorizada de la función que solo se recrea cuando cambian las dependencias especificadas. Esto ayuda a evitar que los componentes se rendericen innecesariamente cuando las funciones no han cambiado.

#### ¿Cómo funciona?

`useCallback` toma dos parámetros:
1. La función que deseas memorizar.
2. Un array de dependencias que determina cuándo la función debe ser recalculada.

Si las dependencias no cambian, `useCallback` devolverá la misma función en cada render, evitando que React trate la función como una nueva y reduciendo renderizados innecesarios.

#### Ejemplo

Vamos a ampliar el código anterior usando `useCallback` para optimizar la actualización del contador, evitando que la función se vuelva a crear en cada render:

```javascript
import React, { useState, useEffect, useContext, createContext, useCallback } from 'react';

const TemaContext = createContext();

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Has hecho clic ${contador} veces`;
  }, [contador]);

  const tema = useContext(TemaContext);

  // useCallback memoriza la función para que no se recree en cada render
  const incrementarContador = useCallback(() => {
    setContador((prevContador) => prevContador + 1);
  }, []);

  return (
    <div style={{ backgroundColor: tema.fondo, color: tema.texto }}>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={incrementarContador}>
        Incrementar contador
      </button>
    </div>
  );
}

function App() {
  const temaClaro = {
    fondo: '#fff',
    texto: '#000'
  };

  return (
    <TemaContext.Provider value={temaClaro}>
      <Contador />
    </TemaContext.Provider>
  );
}

export default App;
```

#### Explicación del ejemplo

1. **Uso de `useCallback`**: En este ejemplo, la función `incrementarContador` está memorizada usando `useCallback`. Esto significa que la función no se recreará a menos que cambien sus dependencias. Como el array de dependencias está vacío (`[]`), la función solo se crea una vez cuando el componente se monta.

2. **Optimización**: Esta optimización es útil cuando la función se pasa como prop a un componente hijo, lo que evita que el componente hijo se vuelva a renderizar innecesariamente cada vez que el componente padre se renderiza.

3. **Comparación con el render sin `useCallback`**: Sin `useCallback`, la función `incrementarContador` se recrearía en cada render, lo que podría afectar el rendimiento en componentes complejos o con muchos elementos hijos que dependen de la función.

Este ejemplo demuestra cómo `useCallback` puede mejorar el rendimiento en escenarios donde las funciones se pasan entre componentes, evitando renderizados innecesarios y manteniendo la consistencia de las funciones.

### useReducer

#### Descripción

El hook `useReducer` es una alternativa a `useState` que se utiliza cuando el estado del componente es más complejo y depende de múltiples transiciones o acciones. En lugar de actualizar el estado directamente con una función de actualización, `useReducer` utiliza un patrón de **reductor** que toma el estado actual y una acción, y devuelve un nuevo estado.

#### Funcionalidad

`useReducer` es ideal para manejar estados complejos que involucren múltiples subvalores o que necesiten lógica avanzada para actualizarlos. El patrón de reductor, común en arquitecturas como Redux, permite organizar mejor el código y mantener la lógica de estado en un solo lugar.

#### ¿Cómo funciona?

`useReducer` toma dos parámetros:
1. Un reductor (una función que recibe el estado actual y una acción, y retorna el nuevo estado).
2. El estado inicial.

Devuelve un array con dos elementos:
1. El estado actual.
2. La función `dispatch`, que se usa para enviar acciones al reductor y desencadenar una actualización del estado.

#### Ejemplo

Vamos a expandir el código anterior utilizando `useReducer` para gestionar el estado del contador en lugar de `useState`:

```javascript
import React, { useEffect, useContext, createContext, useCallback, useReducer } from 'react';

const TemaContext = createContext();

// Definimos la función reductora que maneja las transiciones de estado
function contadorReducer(state, action) {
  switch (action.type) {
    case 'incrementar':
      return { contador: state.contador + 1 };
    case 'resetear':
      return { contador: 0 };
    default:
      throw new Error('Acción no soportada');
  }
}

function Contador() {
  // useReducer reemplaza a useState para manejar el estado del contador
  const [state, dispatch] = useReducer(contadorReducer, { contador: 0 });

  useEffect(() => {
    document.title = `Has hecho clic ${state.contador} veces`;
  }, [state.contador]);

  const tema = useContext(TemaContext);

  // useCallback para evitar que la función se recree en cada render
  const incrementarContador = useCallback(() => {
    dispatch({ type: 'incrementar' });
  }, []);

  const resetearContador = useCallback(() => {
    dispatch({ type: 'resetear' });
  }, []);

  return (
    <div style={{ backgroundColor: tema.fondo, color: tema.texto }}>
      <p>Has hecho clic {state.contador} veces</p>
      <button onClick={incrementarContador}>Incrementar contador</button>
      <button onClick={resetearContador}>Resetear contador</button>
    </div>
  );
}

function App() {
  const temaClaro = {
    fondo: '#fff',
    texto: '#000'
  };

  return (
    <TemaContext.Provider value={temaClaro}>
      <Contador />
    </TemaContext.Provider>
  );
}

export default App;
```

#### Explicación del ejemplo

1. **Definición del reductor**: La función `contadorReducer` es el reductor que gestiona el estado del contador. Basado en la acción (`incrementar` o `resetear`), actualiza el estado del contador. Este patrón centraliza la lógica de manejo del estado.

2. **Uso de `useReducer`**: En lugar de `useState`, utilizamos `useReducer` para definir el estado inicial `{ contador: 0 }` y el reductor. La función `dispatch` se utiliza para enviar acciones al reductor y modificar el estado.

3. **Acciones del reductor**: Se pueden crear múltiples funciones de actualización del estado, como `incrementarContador` y `resetearContador`, que llaman a `dispatch` con diferentes tipos de acción.

4. **Uso combinado con `useCallback`**: Los métodos `incrementarContador` y `resetearContador` están memorizados usando `useCallback` para evitar que se vuelvan a crear innecesariamente en cada render.

Este ejemplo muestra cómo `useReducer` puede ser más adecuado que `useState` en escenarios donde el estado es más complejo o las transiciones de estado son más elaboradas, proporcionando una estructura más clara y escalable para manejar actualizaciones de estado.

### useMemo

#### Descripción

El hook `useMemo` se utiliza para memorizar valores calculados, evitando que se vuelvan a calcular en cada renderizado a menos que cambien sus dependencias. Es útil para optimizar el rendimiento en situaciones donde los cálculos son costosos o donde el resultado de un cálculo depende de variables que no cambian frecuentemente.

#### Funcionalidad

`useMemo` memoriza un valor de retorno y solo lo recalcula si las dependencias que se le pasan cambian. Esto permite que el componente evite realizar cálculos intensivos en cada render, mejorando el rendimiento en situaciones donde estos cálculos no son necesarios cada vez.

#### ¿Cómo funciona?

`useMemo` toma dos parámetros:
1. Una función que retorna el valor a memorizar.
2. Un array de dependencias que, si cambian, harán que la función se ejecute de nuevo.

Si las dependencias no cambian, `useMemo` devolverá el valor memorizado, optimizando el rendimiento.

#### Ejemplo

Vamos a extender el ejemplo anterior y utilizar `useMemo` para memorizar el cálculo de un valor derivado del estado del contador. Este valor será el doble del contador, y solo se recalculará cuando el contador cambie.

```javascript
import React, { useEffect, useContext, createContext, useCallback, useReducer, useMemo } from 'react';

const TemaContext = createContext();

function contadorReducer(state, action) {
  switch (action.type) {
    case 'incrementar':
      return { contador: state.contador + 1 };
    case 'resetear':
      return { contador: 0 };
    default:
      throw new Error('Acción no soportada');
  }
}

function Contador() {
  const [state, dispatch] = useReducer(contadorReducer, { contador: 0 });

  useEffect(() => {
    document.title = `Has hecho clic ${state.contador} veces`;
  }, [state.contador]);

  const tema = useContext(TemaContext);

  const incrementarContador = useCallback(() => {
    dispatch({ type: 'incrementar' });
  }, []);

  const resetearContador = useCallback(() => {
    dispatch({ type: 'resetear' });
  }, []);

  // useMemo para memorizar el cálculo del doble del contador
  const dobleContador = useMemo(() => {
    console.log('Calculando el doble del contador');
    return state.contador * 2;
  }, [state.contador]);

  return (
    <div style={{ backgroundColor: tema.fondo, color: tema.texto }}>
      <p>Has hecho clic {state.contador} veces</p>
      <p>El doble del contador es {dobleContador}</p>
      <button onClick={incrementarContador}>Incrementar contador</button>
      <button onClick={resetearContador}>Resetear contador</button>
    </div>
  );
}

function App() {
  const temaClaro = {
    fondo: '#fff',
    texto: '#000'
  };

  return (
    <TemaContext.Provider value={temaClaro}>
      <Contador />
    </TemaContext.Provider>
  );
}

export default App;
```

#### Explicación del ejemplo

1. **Uso de `useMemo`**: En este ejemplo, `useMemo` se utiliza para memorizar el valor de `dobleContador`, que es el doble del valor actual del contador. El cálculo solo se ejecuta cuando el valor de `state.contador` cambia.

2. **Optimización**: Al usar `useMemo`, evitamos recalcular el valor de `dobleContador` en cada render, a menos que `state.contador` haya cambiado, lo que optimiza el rendimiento.

3. **Cálculos costosos**: Aunque en este caso el cálculo es sencillo, en escenarios más complejos donde los cálculos son costosos, `useMemo` puede mejorar significativamente el rendimiento evitando cálculos innecesarios.

Este ejemplo demuestra cómo `useMemo` puede utilizarse para optimizar componentes al memorizar valores calculados que dependen de variables del estado o props, reduciendo la cantidad de cálculos innecesarios y mejorando el rendimiento del componente.

### useLayoutEffect

#### Descripción

El hook `useLayoutEffect` es similar a `useEffect`, pero se ejecuta de manera síncrona después de que se han realizado todas las mutaciones del DOM. Esto significa que se ejecuta justo antes de que el navegador repinte la pantalla, garantizando que cualquier cambio en el DOM ocurra antes de que el usuario lo vea. `useLayoutEffect` es útil cuando necesitas realizar mediciones o realizar efectos que afectan el diseño del DOM antes de que el navegador lo pinte.

#### Funcionalidad

`useLayoutEffect` se utiliza en situaciones donde el efecto necesita ejecutarse inmediatamente después de que el DOM haya cambiado, pero antes de que el navegador lo muestre al usuario. Este hook es útil para operaciones como obtener dimensiones de elementos o realizar cambios visuales inmediatos.

#### ¿Cómo funciona?

`useLayoutEffect` toma los mismos dos argumentos que `useEffect`:
1. Una función que contiene el código a ejecutar.
2. Un array de dependencias opcional. Si las dependencias cambian, se ejecuta el efecto.

La diferencia principal con `useEffect` es que `useLayoutEffect` bloquea la ejecución del render hasta que se complete, garantizando que los cambios ocurran antes de que el navegador muestre la actualización al usuario.

#### Ejemplo

Vamos a modificar el ejemplo anterior para usar `useLayoutEffect`. Aquí vamos a medir el ancho de un elemento después de que el contador cambie, y usar esa medición para hacer ajustes antes de que el navegador pinte la actualización.

```javascript
import React, { useEffect, useContext, createContext, useCallback, useReducer, useMemo, useLayoutEffect, useRef } from 'react';

const TemaContext = createContext();

function contadorReducer(state, action) {
  switch (action.type) {
    case 'incrementar':
      return { contador: state.contador + 1 };
    case 'resetear':
      return { contador: 0 };
    default:
      throw new Error('Acción no soportada');
  }
}

function Contador() {
  const [state, dispatch] = useReducer(contadorReducer, { contador: 0 });

  useEffect(() => {
    document.title = `Has hecho clic ${state.contador} veces`;
  }, [state.contador]);

  const tema = useContext(TemaContext);

  const incrementarContador = useCallback(() => {
    dispatch({ type: 'incrementar' });
  }, []);

  const resetearContador = useCallback(() => {
    dispatch({ type: 'resetear' });
  }, []);

  const dobleContador = useMemo(() => {
    return state.contador * 2;
  }, [state.contador]);

  // Referencia al elemento del DOM
  const refElemento = useRef(null);

  // useLayoutEffect para obtener el ancho del elemento antes de que el navegador lo pinte
  useLayoutEffect(() => {
    const ancho = refElemento.current.offsetWidth;
    console.log('El ancho del elemento es:', ancho);
  }, [state.contador]);

  return (
    <div style={{ backgroundColor: tema.fondo, color: tema.texto }}>
      <p ref={refElemento}>Has hecho clic {state.contador} veces</p>
      <p>El doble del contador es {dobleContador}</p>
      <button onClick={incrementarContador}>Incrementar contador</button>
      <button onClick={resetearContador}>Resetear contador</button>
    </div>
  );
}

function App() {
  const temaClaro = {
    fondo: '#fff',
    texto: '#000'
  };

  return (
    <TemaContext.Provider value={temaClaro}>
      <Contador />
    </TemaContext.Provider>
  );
}

export default App;
```

#### Explicación del ejemplo

1. **Uso de `useLayoutEffect`**: En este ejemplo, `useLayoutEffect` se utiliza para medir el ancho del elemento DOM que contiene el texto del contador. Esto ocurre justo después de que el DOM se actualiza, pero antes de que el navegador repinte la pantalla. Así, cualquier cambio basado en el ancho del elemento se realizaría antes de que el usuario lo vea.

2. **Referencia del DOM (`useRef`)**: Se utiliza `useRef` para acceder directamente al DOM del elemento `<p>` que contiene el contador. `useLayoutEffect` luego usa esta referencia para obtener el ancho del elemento.

3. **Diferencia con `useEffect`**: Si se utilizara `useEffect` en lugar de `useLayoutEffect`, el efecto se ejecutaría después de que el navegador ya haya repintado la pantalla, lo que podría causar un efecto visual no deseado. Con `useLayoutEffect`, los cambios ocurren de manera sincrónica antes de la repintura.

Este ejemplo muestra cómo `useLayoutEffect` es útil cuando necesitas realizar operaciones relacionadas con el DOM que deben completarse antes de que el navegador actualice la interfaz visual, garantizando una experiencia de usuario fluida y sin parpadeos visuales.

# React Hooks Exercises

## Introducción

Este proyecto contiene una serie de ejercicios diseñados para ayudarte a entender y practicar los diferentes hooks en React. Cada set de ejercicios se centra en un hook específico, con 30 ejercicios para cada uno. Los hooks que se cubren son:

- `useState`
- `useEffect`
- `useContext`
- `useCallback`
- `useReducer`
- `useMemo`
- `useLayoutEffect`

Cada ejercicio tiene un archivo correspondiente en `src/exercises`, y cada uno cuenta con una prueba unitaria en `src/tests` que valida tu solución.

---

## Estructura del proyecto

La estructura de carpetas del proyecto sigue este formato:

```
src/
  exercises/
    useState/
      UseStateExercise1.js
      UseStateExercise2.js
      ...
    useEffect/
      UseEffectExercise1.js
      ...
    ...
  tests/
    useState/
      UseStateExercise1.test.js
      UseStateExercise2.test.js
      ...
    useEffect/
      UseEffectExercise1.test.js
      ...
    ...
```

Cada carpeta dentro de `src/exercises` contiene 30 ejercicios relacionados con un hook específico. Cada ejercicio tiene una prueba correspondiente en `src/tests`.

---

## Cómo realizar los ejercicios

1. **Elige un hook para empezar**: Ve a la carpeta `src/exercises/` y elige el hook que te gustaría practicar. Por ejemplo, puedes comenzar con los ejercicios de `useState` en `src/exercises/useState/`.

2. **Lee las instrucciones del ejercicio**: Cada archivo de ejercicio contiene instrucciones claras sobre qué debes implementar. Por ejemplo, podrías crear un contador o manejar un formulario utilizando el hook correspondiente.

3. **Completa el código**: Llena el componente React con la implementación correcta usando el hook correspondiente.

4. **Guarda los cambios**.

---

## Cómo probar tu solución

1. **Instala las dependencias del proyecto**: Si aún no lo has hecho, instala las dependencias necesarias, incluyendo las herramientas de testing:

   ```bash
   npm install
   ```

2. **Ejecuta los tests**: Después de completar un ejercicio, prueba tu solución ejecutando el test correspondiente. Puedes ejecutar todos los tests con:

   ```bash
   npm test
   ```

   O puedes ejecutar el test de un ejercicio específico, por ejemplo, para el ejercicio 1 de `useState`:

   ```bash
   npm test src/tests/useState/UseStateExercise1.test.js
   ```

3. **Revisa los resultados de los tests**: Si un test falla, revisa tu código y corrige los errores hasta que los tests pasen.

---

## Ejemplo: Resolver un ejercicio

Supongamos que quieres resolver el primer ejercicio de `useState`.

1. **Paso 1**: Ve a `src/exercises/useState/UseStateExercise1.js` y completa el código según las instrucciones dentro del archivo.
   
2. **Paso 2**: Guarda los cambios.

3. **Paso 3**: Ejecuta el test correspondiente para verificar tu solución:

   ```bash
   npm test src/tests/useState/UseStateExercise1.test.js
   ```

4. **Paso 4**: Si todos los tests pasan, continúa con el siguiente ejercicio.

---

## Consejos

- **Lee bien las instrucciones**: Cada ejercicio tiene un propósito específico, como gestionar el estado de un contador, manejar el ciclo de vida de un componente o compartir datos entre diferentes componentes. Asegúrate de entender bien el objetivo de cada ejercicio antes de comenzar.

- **Usa los tests como referencia**: Los tests están diseñados para validar que tu implementación sea correcta. Si te pierdes o no sabes cómo avanzar, revisar el test correspondiente puede darte una pista sobre lo que se espera que implementes.

---

## Hooks incluidos

Este proyecto cubre los siguientes hooks de React:

1. **useState**: Para gestionar el estado dentro de un componente.
2. **useEffect**: Para manejar efectos secundarios, como llamadas a APIs o suscripción a eventos.
3. **useContext**: Para compartir información entre componentes sin pasar props manualmente.
4. **useCallback**: Para memorizar funciones y evitar su recreación innecesaria.
5. **useReducer**: Para gestionar estados más complejos o con múltiples acciones.
6. **useMemo**: Para memorizar el valor de una operación costosa y evitar recalcularlo en cada renderizado.
7. **useLayoutEffect**: Similar a `useEffect`, pero se ejecuta antes de que el navegador pinte la pantalla.

---

## ¡Diviértete aprendiendo!

Este set de ejercicios está diseñado para que aprendas de forma práctica y progresiva. Completa los ejercicios en orden y verifica tu progreso utilizando los tests. Al final de cada set de ejercicios, tendrás una comprensión sólida de cómo utilizar cada hook en diferentes escenarios dentro de aplicaciones React.
