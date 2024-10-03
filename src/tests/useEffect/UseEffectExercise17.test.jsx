
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise17 from '../../exercises/useEffect/UseEffectExercise17';

describe('UseEffectExercise17: Crea un efecto que dependa de dos variables', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise17 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Crea un efecto que dependa de dos variables');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
