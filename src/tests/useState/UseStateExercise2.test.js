
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise2 from '../../exercises/useState/UseStateExercise2';

/**
 * Test para Maneja un campo de texto con useState
 */
describe('Test del ejercicio 2: Maneja un campo de texto con useState', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise2 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Maneja un campo de texto con useState');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
