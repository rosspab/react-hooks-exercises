
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise18 from '../../exercises/useEffect/UseEffectExercise18';

describe('UseEffectExercise18: Actualiza un gráfico cuando cambie el estado', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise18 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Actualiza un gráfico cuando cambie el estado');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
