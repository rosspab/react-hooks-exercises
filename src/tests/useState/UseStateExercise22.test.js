
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise22 from '../../exercises/useState/UseStateExercise22';

/**
 * Test para Controla un contador de decimales con useState
 */
describe('Test del ejercicio 22: Controla un contador de decimales con useState', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise22 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Controla un contador de decimales con useState');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
