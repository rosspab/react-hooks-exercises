
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise21 from '../../exercises/useState/UseStateExercise21';

/**
 * Test para Crea un contador de doble velocidad (aumenta de 2 en 2)
 */
describe('Test del ejercicio 21: Crea un contador de doble velocidad (aumenta de 2 en 2)', () => {
  it('se renderiza correctamente', () => {
    render(<UseStateExercise21 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Crea un contador de doble velocidad (aumenta de 2 en 2)');
    expect(header).toBeInTheDocument();
  });

  // Aquí puedes añadir pruebas más específicas según el ejercicio
});
