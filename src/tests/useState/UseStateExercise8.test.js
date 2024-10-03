
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise8 from '../../exercises/useState/UseStateExercise8';

/**
 * Test para Actualiza un array al añadir un nuevo elemento
 */
describe('Test del ejercicio 8: Actualiza un array al añadir un nuevo elemento', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise8 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Actualiza un array al añadir un nuevo elemento');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
