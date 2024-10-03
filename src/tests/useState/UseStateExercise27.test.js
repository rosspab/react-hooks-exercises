
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise27 from '../../exercises/useState/UseStateExercise27';

/**
 * Test para Resetea el estado al hacer doble clic en el botón
 */
describe('Test del ejercicio 27: Resetea el estado al hacer doble clic en el botón', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise27 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Resetea el estado al hacer doble clic en el botón');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
