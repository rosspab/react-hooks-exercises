
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise30 from '../../exercises/useEffect/UseEffectExercise30';

describe('UseEffectExercise30: Simula una lista de tareas que se guarda automáticamente', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise30 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Simula una lista de tareas que se guarda automáticamente');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
