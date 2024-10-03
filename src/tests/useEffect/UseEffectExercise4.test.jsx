
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise4 from '../../exercises/useEffect/UseEffectExercise4';

describe('UseEffectExercise4: Desuscribe un evento de un WebSocket en useEffect', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise4 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Desuscribe un evento de un WebSocket en useEffect');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
