
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise30 from '../../exercises/useState/UseStateExercise30';

/**
 * Test para Controla la visibilidad de un modal con useState
 */
describe('Test del ejercicio 30: Controla la visibilidad de un modal con useState', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise30 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Controla la visibilidad de un modal con useState');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
