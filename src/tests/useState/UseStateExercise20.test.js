
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise20 from '../../exercises/useState/UseStateExercise20';

/**
 * Test para Implementa un contador que no permite valores negativos
 */
describe('Test del ejercicio 20: Implementa un contador que no permite valores negativos', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise20 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Implementa un contador que no permite valores negativos');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
