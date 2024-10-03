
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise20 from '../../exercises/useEffect/UseEffectExercise20';

describe('UseEffectExercise20: Suscribe a un evento de scroll con useEffect', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise20 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Suscribe a un evento de scroll con useEffect');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
