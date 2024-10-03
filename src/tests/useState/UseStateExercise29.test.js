
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise29 from '../../exercises/useState/UseStateExercise29';

/**
 * Test para Simula un semáforo cambiando entre tres estados
 */
describe('Test del ejercicio 29: Simula un semáforo cambiando entre tres estados', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise29 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Simula un semáforo cambiando entre tres estados');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
