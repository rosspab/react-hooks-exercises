
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise11 from '../../exercises/useState/UseStateExercise11';

/**
 * Test para Maneja múltiples estados en un formulario simple
 */
describe('Test del ejercicio 11: Maneja múltiples estados en un formulario simple', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise11 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Maneja múltiples estados en un formulario simple');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
