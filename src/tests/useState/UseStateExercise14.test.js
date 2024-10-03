
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise14 from '../../exercises/useState/UseStateExercise14';

/**
 * Test para Muestra un temporizador que aumenta cada segundo
 */
describe('Test del ejercicio 14: Muestra un temporizador que aumenta cada segundo', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise14 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Muestra un temporizador que aumenta cada segundo');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
