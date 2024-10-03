
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise1 from '../../exercises/useEffect/UseEffectExercise1';

describe('UseEffectExercise1: Ejecuta un efecto al cargar el componente', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise1 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Ejecuta un efecto al cargar el componente');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
