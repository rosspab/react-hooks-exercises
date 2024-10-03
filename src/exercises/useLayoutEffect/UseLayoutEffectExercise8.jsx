
/**
 * Ejercicio 8: Ajusta el tamaño de un modal al cargarse con useLayoutEffect
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useLayoutEffect.
 * - El objetivo de este ejercicio es ajusta el tamaño de un modal al cargarse con uselayouteffect.
 */

import React, { useLayoutEffect, useRef, useState } from 'react';

function UseLayoutEffectExercise8() {
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
      <h1>Ajusta el tamaño de un modal al cargarse con useLayoutEffect</h1>
      <div ref={ref} style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}>
        Elemento con ancho: {dimension}px
      </div>
    </div>
  );
}

export default UseLayoutEffectExercise8;
