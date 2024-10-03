
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseCallbackExercise14 from '../../exercises/useCallback/UseCallbackExercise14';

describe('UseCallbackExercise14: Crea una función de suma memorizada que solo se actualiza cuando cambian los operandos', () => {
  it('se renderiza correctamente y permite incrementar el contador', () => {
    render(<UseCallbackExercise14 />);

    // Verifica que el componente se renderiza correctamente
    const button = screen.getByText('Incrementar');
    expect(button).toBeInTheDocument();

    // Simula un clic en el botón y verifica que el contador incrementa
    fireEvent.click(button);
    const counter = screen.getByText(/Contador: 1/i);
    expect(counter).toBeInTheDocument();
  });
});
