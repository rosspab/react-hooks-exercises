
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseLayoutEffectExercise24 from '../../exercises/useLayoutEffect/UseLayoutEffectExercise24';

describe('UseLayoutEffectExercise24: Cambia la orientación de un div con useLayoutEffect', () => {
  it('se renderiza correctamente y mide el ancho del elemento', () => {
    render(<UseLayoutEffectExercise24 />);

    // Verifica que el componente se renderiza correctamente
    const elemento = screen.getByText(/Elemento con ancho:/i);
    expect(elemento).toBeInTheDocument();

    // Verifica que el ancho del elemento es 100px
    expect(elemento).toHaveTextContent(/100px/);
  });
});
