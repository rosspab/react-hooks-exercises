
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise15 from '../../exercises/useState/UseStateExercise15';

/**
 * Test para Controla un número máximo y mínimo en un contador
 */
describe('Test del ejercicio 15: Controla un número máximo y mínimo en un contador', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise15 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Controla un número máximo y mínimo en un contador');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
