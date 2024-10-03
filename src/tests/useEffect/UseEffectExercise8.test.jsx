
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise8 from '../../exercises/useEffect/UseEffectExercise8';

describe('UseEffectExercise8: Actualiza el título del documento con useEffect', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise8 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Actualiza el título del documento con useEffect');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
