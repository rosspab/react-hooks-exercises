
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise23 from '../../exercises/useEffect/UseEffectExercise23';

describe('UseEffectExercise23: Reproduce un sonido cuando se cambie un estado', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise23 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Reproduce un sonido cuando se cambie un estado');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
