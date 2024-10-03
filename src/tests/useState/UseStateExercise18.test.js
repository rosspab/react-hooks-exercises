
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise18 from '../../exercises/useState/UseStateExercise18';

/**
 * Test para Cambia entre diferentes mensajes al hacer clic
 */
describe('Test del ejercicio 18: Cambia entre diferentes mensajes al hacer clic', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise18 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Cambia entre diferentes mensajes al hacer clic');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
