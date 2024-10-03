
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseLayoutEffectExercise13 from '../../exercises/useLayoutEffect/UseLayoutEffectExercise13';

describe('UseLayoutEffectExercise13: Calcula el tamaño total de un componente con useLayoutEffect', () => {
  it('se renderiza correctamente y mide el ancho del elemento', () => {
    render(<UseLayoutEffectExercise13 />);

    // Verifica que el componente se renderiza correctamente
    const elemento = screen.getByText(/Elemento con ancho:/i);
    expect(elemento).toBeInTheDocument();

    // Verifica que el ancho del elemento es 100px
    expect(elemento).toHaveTextContent(/100px/);
  });
});
