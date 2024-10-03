
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise25 from '../../exercises/useState/UseStateExercise25';

/**
 * Test para Cambia entre diferentes temas de color con useState
 */
describe('Test del ejercicio 25: Cambia entre diferentes temas de color con useState', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise25 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Cambia entre diferentes temas de color con useState');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
