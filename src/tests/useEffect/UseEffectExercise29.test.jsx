
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise29 from '../../exercises/useEffect/UseEffectExercise29';

describe('UseEffectExercise29: Detecta si un usuario está inactivo por más de 1 minuto', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise29 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Detecta si un usuario está inactivo por más de 1 minuto');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
