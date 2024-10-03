
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseCallbackExercise30 from '../../exercises/useCallback/UseCallbackExercise30';

describe('UseCallbackExercise30: Maneja el estado de un formulario largo utilizando useCallback', () => {
  it('se renderiza correctamente y permite incrementar el contador', () => {
    render(<UseCallbackExercise30 />);

    // Verifica que el componente se renderiza correctamente
    const button = screen.getByText('Incrementar');
    expect(button).toBeInTheDocument();

    // Simula un clic en el botón y verifica que el contador incrementa
    fireEvent.click(button);
    const counter = screen.getByText(/Contador: 1/i);
    expect(counter).toBeInTheDocument();
  });
});
