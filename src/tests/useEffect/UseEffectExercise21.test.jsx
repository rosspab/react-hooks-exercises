
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise21 from '../../exercises/useEffect/UseEffectExercise21';

describe('UseEffectExercise21: Simula una transición entre componentes', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise21 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Simula una transición entre componentes');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
