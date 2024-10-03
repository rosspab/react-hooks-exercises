
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseLayoutEffectExercise20 from '../../exercises/useLayoutEffect/UseLayoutEffectExercise20';

describe('UseLayoutEffectExercise20: Calcula el desplazamiento total en una lista larga con useLayoutEffect', () => {
  it('se renderiza correctamente y mide el ancho del elemento', () => {
    render(<UseLayoutEffectExercise20 />);

    // Verifica que el componente se renderiza correctamente
    const elemento = screen.getByText(/Elemento con ancho:/i);
    expect(elemento).toBeInTheDocument();

    // Verifica que el ancho del elemento es 100px
    expect(elemento).toHaveTextContent(/100px/);
  });
});
