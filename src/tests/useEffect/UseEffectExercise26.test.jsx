
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise26 from '../../exercises/useEffect/UseEffectExercise26';

describe('UseEffectExercise26: Deshabilita un botón después de hacer clic con useEffect', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise26 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Deshabilita un botón después de hacer clic con useEffect');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
