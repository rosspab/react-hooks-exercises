
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise24 from '../../exercises/useState/UseStateExercise24';

/**
 * Test para Simula un sistema de votación con dos botones
 */
describe('Test del ejercicio 24: Simula un sistema de votación con dos botones', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise24 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Simula un sistema de votación con dos botones');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
