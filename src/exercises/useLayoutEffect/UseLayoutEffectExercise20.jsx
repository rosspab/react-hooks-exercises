
/**
 * Ejercicio 20: Calcula el desplazamiento total en una lista larga con useLayoutEffect
 * 
 * Instrucciones:
 * - Completa la función utilizando el hook useLayoutEffect.
 * - El objetivo de este ejercicio es calcula el desplazamiento total en una lista larga con uselayouteffect.
 */

import React, { useLayoutEffect, useRef, useState } from 'react';

function UseLayoutEffectExercise20() {
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
      <h1>Calcula el desplazamiento total en una lista larga con useLayoutEffect</h1>
      <div ref={ref} style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}>
        Elemento con ancho: {dimension}px
      </div>
    </div>
  );
}

export default UseLayoutEffectExercise20;
