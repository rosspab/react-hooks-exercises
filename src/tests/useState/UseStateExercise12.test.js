
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise12 from '../../exercises/useState/UseStateExercise12';

/**
 * Test para Resetea el estado de un formulario al enviar
 */
describe('Test del ejercicio 12: Resetea el estado de un formulario al enviar', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise12 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Resetea el estado de un formulario al enviar');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
