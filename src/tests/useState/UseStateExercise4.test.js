
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise4 from '../../exercises/useState/UseStateExercise4';

/**
 * Test para Muestra un contador que aumente o disminuya según el botón
 */
describe('Test del ejercicio 4: Muestra un contador que aumente o disminuya según el botón', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise4 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Muestra un contador que aumente o disminuya según el botón');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
