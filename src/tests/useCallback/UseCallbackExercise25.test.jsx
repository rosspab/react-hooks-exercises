
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseCallbackExercise25 from '../../exercises/useCallback/UseCallbackExercise25';

describe('UseCallbackExercise25: Usa useCallback para manejar una función de autocompletar', () => {
  it('se renderiza correctamente y permite incrementar el contador', () => {
    render(<UseCallbackExercise25 />);

    // Verifica que el componente se renderiza correctamente
    const button = screen.getByText('Incrementar');
    expect(button).toBeInTheDocument();

    // Simula un clic en el botón y verifica que el contador incrementa
    fireEvent.click(button);
    const counter = screen.getByText(/Contador: 1/i);
    expect(counter).toBeInTheDocument();
  });
});
