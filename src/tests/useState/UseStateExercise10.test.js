
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise10 from '../../exercises/useState/UseStateExercise10';

/**
 * Test para Guarda y muestra el último valor de un input
 */
describe('Test del ejercicio 10: Guarda y muestra el último valor de un input', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise10 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Guarda y muestra el último valor de un input');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
