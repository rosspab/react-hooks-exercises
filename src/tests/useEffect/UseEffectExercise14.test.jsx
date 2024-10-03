
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise14 from '../../exercises/useEffect/UseEffectExercise14';

describe('UseEffectExercise14: Configura un intervalo y límpialo al desmontar', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise14 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Configura un intervalo y límpialo al desmontar');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
