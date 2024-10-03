
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise27 from '../../exercises/useEffect/UseEffectExercise27';

describe('UseEffectExercise27: Cuenta el número de clics en el documento', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise27 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Cuenta el número de clics en el documento');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
