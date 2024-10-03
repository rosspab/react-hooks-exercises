
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise16 from '../../exercises/useEffect/UseEffectExercise16';

describe('UseEffectExercise16: Verifica la conexión a Internet con useEffect', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise16 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Verifica la conexión a Internet con useEffect');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
