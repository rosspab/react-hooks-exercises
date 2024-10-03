
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise23 from '../../exercises/useState/UseStateExercise23';

/**
 * Test para Implementa una barra de progreso con useState
 */
describe('Test del ejercicio 23: Implementa una barra de progreso con useState', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise23 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Implementa una barra de progreso con useState');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
