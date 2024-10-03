
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise19 from '../../exercises/useState/UseStateExercise19';

/**
 * Test para Deshabilita un botón después de hacer clic
 */
describe('Test del ejercicio 19: Deshabilita un botón después de hacer clic', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise19 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Deshabilita un botón después de hacer clic');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
