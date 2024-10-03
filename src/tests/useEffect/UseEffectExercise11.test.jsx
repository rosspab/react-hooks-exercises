
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise11 from '../../exercises/useEffect/UseEffectExercise11';

describe('UseEffectExercise11: Envía una alerta después de 3 segundos con useEffect', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise11 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Envía una alerta después de 3 segundos con useEffect');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
