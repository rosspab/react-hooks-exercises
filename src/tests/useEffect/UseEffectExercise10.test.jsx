
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise10 from '../../exercises/useEffect/UseEffectExercise10';

describe('UseEffectExercise10: Cambia el color de fondo al hacer clic en un botón', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise10 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Cambia el color de fondo al hacer clic en un botón');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
