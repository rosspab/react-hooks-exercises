
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise5 from '../../exercises/useState/UseStateExercise5';

/**
 * Test para Cambia el color de fondo al hacer clic
 */
describe('Test del ejercicio 5: Cambia el color de fondo al hacer clic', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise5 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Cambia el color de fondo al hacer clic');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
