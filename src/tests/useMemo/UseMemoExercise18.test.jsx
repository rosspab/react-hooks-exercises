
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseMemoExercise18 from '../../exercises/useMemo/UseMemoExercise18';

describe('UseMemoExercise18: Memoriza la lista de artículos seleccionados con useMemo', () => {
  it('se renderiza correctamente y memoriza el valor', () => {
    render(<UseMemoExercise18 />);

    // Verifica que el componente se renderiza correctamente
    const button = screen.getByText('Incrementar');
    expect(button).toBeInTheDocument();

    // Verifica que el contador inicial es 0
    const contador = screen.getByText(/Contador: 0/i);
    expect(contador).toBeInTheDocument();

    // Simula un clic en el botón de incrementar
    fireEvent.click(button);
    const contadorActualizado = screen.getByText(/Contador: 1/i);
    expect(contadorActualizado).toBeInTheDocument();

    // Verifica que el valor memoizado es el doble
    const memoizedValue = screen.getByText(/Valor memoizado: 2/i);
    expect(memoizedValue).toBeInTheDocument();
  });
});
