
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseLayoutEffectExercise11 from '../../exercises/useLayoutEffect/UseLayoutEffectExercise11';

describe('UseLayoutEffectExercise11: Guarda la posición de un div tras el renderizado con useLayoutEffect', () => {
  it('se renderiza correctamente y mide el ancho del elemento', () => {
    render(<UseLayoutEffectExercise11 />);

    // Verifica que el componente se renderiza correctamente
    const elemento = screen.getByText(/Elemento con ancho:/i);
    expect(elemento).toBeInTheDocument();

    // Verifica que el ancho del elemento es 100px
    expect(elemento).toHaveTextContent(/100px/);
  });
});
