
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise12 from '../../exercises/useEffect/UseEffectExercise12';

describe('UseEffectExercise12: Simula una animación cuando cambie el estado', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise12 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Simula una animación cuando cambie el estado');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
