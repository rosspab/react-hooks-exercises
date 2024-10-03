
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise25 from '../../exercises/useEffect/UseEffectExercise25';

describe('UseEffectExercise25: Simula una barra de progreso que avanza con el tiempo', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise25 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Simula una barra de progreso que avanza con el tiempo');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
