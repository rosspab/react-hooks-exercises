
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise3 from '../../exercises/useState/UseStateExercise3';

/**
 * Test para Crea un botón que alterne entre dos valores
 */
describe('Test del ejercicio 3: Crea un botón que alterne entre dos valores', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise3 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Crea un botón que alterne entre dos valores');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
