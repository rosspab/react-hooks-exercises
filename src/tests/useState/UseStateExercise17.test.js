
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise17 from '../../exercises/useState/UseStateExercise17';

/**
 * Test para Crea un botón que añada elementos a una lista
 */
describe('Test del ejercicio 17: Crea un botón que añada elementos a una lista', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise17 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Crea un botón que añada elementos a una lista');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
