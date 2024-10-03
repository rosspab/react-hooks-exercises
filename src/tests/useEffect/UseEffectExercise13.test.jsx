
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise13 from '../../exercises/useEffect/UseEffectExercise13';

describe('UseEffectExercise13: Detiene una animación al desmontar el componente', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise13 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Detiene una animación al desmontar el componente');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
