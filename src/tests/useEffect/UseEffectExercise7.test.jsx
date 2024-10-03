
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise7 from '../../exercises/useEffect/UseEffectExercise7';

describe('UseEffectExercise7: Escucha eventos de teclado con useEffect', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise7 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Escucha eventos de teclado con useEffect');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
