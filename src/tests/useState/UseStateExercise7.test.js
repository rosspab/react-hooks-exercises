
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise7 from '../../exercises/useState/UseStateExercise7';

/**
 * Test para Controla el estado de un checkbox con useState
 */
describe('Test del ejercicio 7: Controla el estado de un checkbox con useState', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise7 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Controla el estado de un checkbox con useState');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
