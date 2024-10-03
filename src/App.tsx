import React, { useEffect, useContext, createContext, useCallback, useReducer, useMemo, useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TemaContext = createContext({ fondo: '#fff', texto: '#000' });

function contadorReducer(state: { contador: number }, action: { type: string }) {
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
  const [log, setLog] = useState<string[]>([]);
  const tema = useContext(TemaContext);
  const refElemento = useRef<HTMLParagraphElement>(null);
  const [animating, setAnimating] = useState(false);

  // Log para la inicialización de useReducer
  useEffect(() => {
    setLog((prev) => [...prev, 'useReducer: Estado inicializado con valor 0']);
  }, []);

  // Log para useContext
  useEffect(() => {
    setLog((prev) => [...prev, 'useContext: Tema obtenido del contexto']);
  }, [tema]);

  // useEffect para actualizar el título
  useEffect(() => {
    if (!animating) return;
    const newLog = [...log, 'useEffect: Actualiza el título del documento'];
    setLog(newLog);
    document.title = `Has hecho clic ${state.contador} veces`;
  }, [state.contador, animating]);

  // Incrementar Contador con animación
  const incrementarContador = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setLog((prev) => [...prev, 'useReducer: Incrementa el contador']);
    setTimeout(() => {
      dispatch({ type: 'incrementar' });
      setLog((prev) => [...prev, 'useCallback: Llama a dispatch para incrementar']);
      setAnimating(false);
    }, 1000);
  }, [animating]);

  // Resetear Contador con animación
  const resetearContador = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setLog((prev) => [...prev, 'useReducer: Resetea el contador']);
    setTimeout(() => {
      dispatch({ type: 'resetear' });
      setLog((prev) => [...prev, 'useCallback: Llama a dispatch para resetear']);
      setAnimating(false);
    }, 1000);
  }, [animating]);

  const dobleContador = useMemo(() => {
    setLog((prev) => [...prev, 'useMemo: Calcula el doble del contador']);
    return state.contador * 2;
  }, [state.contador]);

  // useLayoutEffect para medir el ancho
  useLayoutEffect(() => {
    if (refElemento.current) {
      const ancho = refElemento.current.offsetWidth;
      setLog((prev) => [...prev, `useLayoutEffect: El ancho del elemento es ${ancho}px`]);
    }
  }, [state.contador]); // Eliminamos animating de las dependencias para que siempre se ejecute

  return (
    <div style={{ backgroundColor: tema.fondo, color: tema.texto }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ padding: '20px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '20px' }}
      >
        <p ref={refElemento}>Has hecho clic {state.contador} veces</p>
        <p>El doble del contador es {dobleContador}</p>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={incrementarContador}
        disabled={animating}
        style={{ marginRight: '10px' }}
      >
        Incrementar contador
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={resetearContador}
        disabled={animating}
      >
        Resetear contador
      </motion.button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ marginTop: '20px', textAlign: 'left' }}
      >
        <h3>Logs de ejecución:</h3>
        <ul>
          {log.map((entry, index) => (
            <motion.li key={index} initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.3 }}>
              {entry}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}
      >
        <h3>Explicación sobre useState</h3>
        <p>
          En este ejemplo, el hook <strong>useState</strong> ha sido reemplazado por <strong>useReducer</strong> para manejar el estado del contador.
          Mientras que <strong>useState</strong> es útil para estados simples, <strong>useReducer</strong> es más adecuado para manejar estados más complejos
          o cuando hay varias acciones que afectan el estado. Por eso, no verás <strong>useState</strong> en los logs, ya que su funcionalidad ha sido
          reemplazada completamente por <strong>useReducer</strong>.
        </p>
      </motion.div>
    </div>
  );
}

function App() {
  const temaClaro = {
    fondo: '#fff',
    texto: '#000',
  };

  return (
    <TemaContext.Provider value={temaClaro}>
      <Contador />
    </TemaContext.Provider>
  );
}

export default App;