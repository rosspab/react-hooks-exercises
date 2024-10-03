
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise28 from '../../exercises/useState/UseStateExercise28';

/**
 * Test para Incrementa automáticamente un contador cada 3 segundos
 */
describe('Test del ejercicio 28: Incrementa automáticamente un contador cada 3 segundos', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise28 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Incrementa automáticamente un contador cada 3 segundos');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
