
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseCallbackExercise29 from '../../exercises/useCallback/UseCallbackExercise29';

describe('UseCallbackExercise29: Crea una lista de productos con función de búsqueda memorizada con useCallback', () => {
  it('se renderiza correctamente y permite incrementar el contador', () => {
    render(<UseCallbackExercise29 />);

    // Verifica que el componente se renderiza correctamente
    const button = screen.getByText('Incrementar');
    expect(button).toBeInTheDocument();

    // Simula un clic en el botón y verifica que el contador incrementa
    fireEvent.click(button);
    const counter = screen.getByText(/Contador: 1/i);
    expect(counter).toBeInTheDocument();
  });
});
