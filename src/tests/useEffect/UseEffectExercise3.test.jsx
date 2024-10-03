
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise3 from '../../exercises/useEffect/UseEffectExercise3';

describe('UseEffectExercise3: Realiza una petición de datos con useEffect', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise3 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Realiza una petición de datos con useEffect');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
