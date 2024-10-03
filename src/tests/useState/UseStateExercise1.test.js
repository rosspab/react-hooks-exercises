
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise1 from '../../exercises/useState/UseStateExercise1';

/**
 * Test para Crea un contador básico con useState
 */
describe('Test del ejercicio 1: Crea un contador básico con useState', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise1 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Crea un contador básico con useState');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
