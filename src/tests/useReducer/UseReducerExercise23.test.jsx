
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseReducerExercise23 from '../../exercises/useReducer/UseReducerExercise23';

describe('UseReducerExercise23: Crea un tablero de tareas arrastrables (drag-and-drop) utilizando useReducer', () => {
  it('se renderiza correctamente y permite incrementar y decrementar el contador', () => {
    render(<UseReducerExercise23 />);

    // Verifica que el componente se renderiza correctamente
    const incrementarButton = screen.getByText('Incrementar');
    const decrementarButton = screen.getByText('Decrementar');
    expect(incrementarButton).toBeInTheDocument();
    expect(decrementarButton).toBeInTheDocument();

    // Simula un clic en el botón de incrementar y verifica que el contador aumenta
    fireEvent.click(incrementarButton);
    const counter = screen.getByText(/Contador: 1/i);
    expect(counter).toBeInTheDocument();

    // Simula un clic en el botón de decrementar y verifica que el contador disminuye
    fireEvent.click(decrementarButton);
    const counterZero = screen.getByText(/Contador: 0/i);
    expect(counterZero).toBeInTheDocument();
  });
});
