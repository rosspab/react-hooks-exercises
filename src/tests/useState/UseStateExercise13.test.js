
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise13 from '../../exercises/useState/UseStateExercise13';

/**
 * Test para Alterna entre dos imágenes con useState
 */
describe('Test del ejercicio 13: Alterna entre dos imágenes con useState', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise13 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Alterna entre dos imágenes con useState');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
