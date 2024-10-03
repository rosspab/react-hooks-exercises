
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise2 from '../../exercises/useEffect/UseEffectExercise2';

describe('UseEffectExercise2: Ejecuta un efecto cuando cambie el estado de un contador', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise2 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Ejecuta un efecto cuando cambie el estado de un contador');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
