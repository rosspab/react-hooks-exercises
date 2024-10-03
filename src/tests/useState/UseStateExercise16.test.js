
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise16 from '../../exercises/useState/UseStateExercise16';

/**
 * Test para Guarda el historial de clics en un array
 */
describe('Test del ejercicio 16: Guarda el historial de clics en un array', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise16 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Guarda el historial de clics en un array');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
