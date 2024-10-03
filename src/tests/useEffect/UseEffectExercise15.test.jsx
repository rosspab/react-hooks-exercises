
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise15 from '../../exercises/useEffect/UseEffectExercise15';

describe('UseEffectExercise15: Guarda el estado en localStorage con useEffect', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise15 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Guarda el estado en localStorage con useEffect');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
