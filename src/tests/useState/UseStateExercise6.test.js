
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise6 from '../../exercises/useState/UseStateExercise6';

/**
 * Test para Oculta o muestra un párrafo con useState
 */
describe('Test del ejercicio 6: Oculta o muestra un párrafo con useState', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise6 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Oculta o muestra un párrafo con useState');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
