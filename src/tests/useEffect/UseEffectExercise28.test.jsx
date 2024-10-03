
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise28 from '../../exercises/useEffect/UseEffectExercise28';

describe('UseEffectExercise28: Muestra un mensaje en consola cuando cambie un valor', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise28 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Muestra un mensaje en consola cuando cambie un valor');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
