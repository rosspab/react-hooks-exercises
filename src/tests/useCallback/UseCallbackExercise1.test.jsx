
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseCallbackExercise1 from '../../exercises/useCallback/UseCallbackExercise1';

describe('UseCallbackExercise1: Crea una función memorizada con useCallback', () => {
  it('se renderiza correctamente y permite incrementar el contador', () => {
    render(<UseCallbackExercise1 />);

    // Verifica que el componente se renderiza correctamente
    const button = screen.getByText('Incrementar');
    expect(button).toBeInTheDocument();

    // Simula un clic en el botón y verifica que el contador incrementa
    fireEvent.click(button);
    const counter = screen.getByText(/Contador: 1/i);
    expect(counter).toBeInTheDocument();
  });
});
