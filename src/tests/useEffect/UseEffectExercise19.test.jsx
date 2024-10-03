
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise19 from '../../exercises/useEffect/UseEffectExercise19';

describe('UseEffectExercise19: Muestra un modal después de 5 segundos', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise19 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Muestra un modal después de 5 segundos');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
