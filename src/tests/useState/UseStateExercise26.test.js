
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise26 from '../../exercises/useState/UseStateExercise26';

/**
 * Test para Guarda el historial de inputs en un array
 */
describe('Test del ejercicio 26: Guarda el historial de inputs en un array', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise26 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Guarda el historial de inputs en un array');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
