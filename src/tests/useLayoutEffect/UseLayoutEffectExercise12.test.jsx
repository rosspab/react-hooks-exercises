
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseLayoutEffectExercise12 from '../../exercises/useLayoutEffect/UseLayoutEffectExercise12';

describe('UseLayoutEffectExercise12: Verifica si un elemento está en la vista con useLayoutEffect', () => {
  it('se renderiza correctamente y mide el ancho del elemento', () => {
    render(<UseLayoutEffectExercise12 />);

    // Verifica que el componente se renderiza correctamente
    const elemento = screen.getByText(/Elemento con ancho:/i);
    expect(elemento).toBeInTheDocument();

    // Verifica que el ancho del elemento es 100px
    expect(elemento).toHaveTextContent(/100px/);
  });
});
