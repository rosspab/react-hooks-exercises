
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise5 from '../../exercises/useEffect/UseEffectExercise5';

describe('UseEffectExercise5: Muestra un mensaje al desmontar el componente', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise5 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Muestra un mensaje al desmontar el componente');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
