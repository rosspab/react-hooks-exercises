import React from 'react';

const Instrucciones: React.FC = () => {
    return (
        <div style={{ padding: '20px', lineHeight: '1.6' }}>
            <h1>Hooks en React: Estructura y Funcionamiento en el Desarrollo Web</h1>

            <h2>Portada</h2>
            <p>
                <strong>Universidad Latinoamericana de la Ciencia y la Tecnología</strong>
                <br />
                Pablo Andrés Soto De Carlo
                <br />
                Warner Carrillo
                <br />
                Servicios y desarrollo web
                <br />
                3CO 2024
            </p>

            <hr />

            <h2>Tabla de Contenidos</h2>
            <ol>
                <li><a href="#introduccion">Introducción</a></li>
                <li><a href="#que-es-un-hook">¿Qué es un Hook?</a></li>
                <li><a href="#como-funcionan-los-hooks">¿Cómo funcionan los hooks?</a></li>
                <li><a href="#limitantes">Limitantes de los hooks</a></li>
                <li>
                    Ejercicios de Hooks en React
                    <ul>
                        <li><a href="#ejercicio-1-usestate">Ejercicio 1: useState</a></li>
                        <li><a href="#ejercicio-2-useeffect">Ejercicio 2: useEffect</a></li>
                        <li><a href="#ejercicio-3-usecontext">Ejercicio 3: useContext</a></li>
                        <li><a href="#ejercicio-4-usecallback">Ejercicio 4: useCallback</a></li>
                        <li><a href="#ejercicio-5-usereducer">Ejercicio 5: useReducer</a></li>
                        <li><a href="#ejercicio-6-usememo">Ejercicio 6: useMemo</a></li>
                        <li><a href="#ejercicio-7-uselayeffect">Ejercicio 7: useLayoutEffect</a></li>
                    </ul>
                </li>
                <li><a href="#conclusion">Conclusión</a></li>
            </ol>

            <hr />

            <h2 id="introduccion">Introducción</h2>
            <p>
                En la última década, React se ha consolidado como una de las bibliotecas más populares para el desarrollo
                de interfaces de usuario. La introducción de los hooks en React ha cambiado significativamente la forma en
                que los desarrolladores manejan el estado y los ciclos de vida de los componentes. Este documento explora
                qué son los hooks, cómo funcionan, sus limitaciones y ofrece ejemplos de los hooks más utilizados en la
                biblioteca.
            </p>

            <h2 id="que-es-un-hook">¿Qué es un Hook?</h2>
            <p>
                Los hooks son funciones que permiten a los desarrolladores de React utilizar el estado y otras características
                de React sin escribir una clase. Se introdujeron en React 16.8 y proporcionan una manera más funcional y concisa
                de gestionar la lógica del componente.
            </p>

            <h2 id="como-funcionan-los-hooks">¿Cómo funcionan los hooks?</h2>
            <p>
                Los hooks se invocan dentro de los componentes funcionales y permiten acceder a funcionalidades que
                anteriormente solo estaban disponibles en los componentes de clase. Los hooks siguen ciertas reglas, como
                ser llamados en el nivel superior y solo dentro de componentes de React.
            </p>

            <h2 id="limitantes">Limitantes de los hooks</h2>
            <p>
                A pesar de su versatilidad, los hooks tienen limitaciones. Por ejemplo, no se pueden llamar condicionalmente,
                y su uso en componentes de clase es inexistente. Estas restricciones son importantes para mantener el orden
                y la previsibilidad en la ejecución de los hooks.
            </p>

            <h3 id="ejercicio-1-usestate">Ejercicio 1: useState</h3>
            <h4>Descripción</h4>
            <p>
                El hook <code>useState</code> permite a los componentes funcionales tener y manejar un estado, algo que antes
                solo era posible en los componentes de clase. Devuelve un par de valores: el estado actual y una función que
                permite actualizar ese estado.
            </p>

            <h4>Ejemplo</h4>
            <pre>
        <code>
          {`import React, { useState } from 'react';

function Contador() {
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

export default Contador;`}
        </code>
      </pre>

            <h4>Explicación del ejemplo</h4>
            <ol>
                <li><strong>Declaración del estado:</strong> Se utiliza <code>useState(0)</code> para inicializar una variable <code>contador</code> con un valor de 0.</li>
                <li><strong>Actualizar el estado:</strong> Cuando se presiona el botón, la función <code>setContador</code> aumenta el valor del contador en 1.</li>
                <li><strong>Reactividad:</strong> Cada vez que el estado cambia, React actualiza la interfaz.</li>
            </ol>

            <h3 id="ejercicio-2-useeffect">Ejercicio 2: useEffect</h3>
            <h4>Descripción</h4>
            <p>
                El hook <code>useEffect</code> se utiliza para gestionar efectos secundarios en componentes funcionales,
                como llamadas a una API o suscripciones. Permite ejecutar lógica después de que el componente haya renderizado.
            </p>

            <h4>Ejemplo</h4>
            <pre>
        <code>
          {`import React, { useState, useEffect } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = \`Has hecho clic \${contador} veces\`;
  }, [contador]);

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar contador
      </button>
    </div>
  );
}

export default Contador;`}
        </code>
      </pre>

            <h3 id="ejercicio-3-usecontext">Ejercicio 3: useContext</h3>
            <h4>Descripción</h4>
            <p>
                El hook <code>useContext</code> permite a los componentes funcionales acceder a valores almacenados en un
                contexto de React sin tener que pasar props manualmente a lo largo de varios niveles de componentes.
            </p>

            <h4>Ejemplo</h4>
            <pre>
        <code>
          {`import React, { useState, useEffect, useContext, createContext } from 'react';

const TemaContext = createContext();

function Contador() {
  const [contador, setContador] = useState(0);
  useEffect(() => {
    document.title = \`Has hecho clic \${contador} veces\`;
  }, [contador]);

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
    <TemaContext.Provider value={temaClaro}>
      <Contador />
    </TemaContext.Provider>
  );
}

export default App;`}
        </code>
      </pre>

            {/* Similar structure for other hooks like useCallback, useReducer, useMemo, useLayoutEffect */}

            <h3 id="conclusion">Conclusión</h3>
            <p>
                Este set de ejercicios está diseñado para que aprendas de forma práctica y progresiva. Completa los ejercicios en orden y verifica tu progreso utilizando los tests. Al final de cada set de ejercicios, tendrás una comprensión sólida de cómo utilizar cada hook en diferentes escenarios dentro de aplicaciones React.
            </p>
        </div>
    );
};

export default Instrucciones;