
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise6 from '../../exercises/useEffect/UseEffectExercise6';

describe('UseEffectExercise6: Simula un temporizador con useEffect', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise6 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Simula un temporizador con useEffect');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
