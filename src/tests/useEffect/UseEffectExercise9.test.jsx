
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise9 from '../../exercises/useEffect/UseEffectExercise9';

describe('UseEffectExercise9: Detecta cuando el mouse entra en la ventana', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise9 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Detecta cuando el mouse entra en la ventana');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
