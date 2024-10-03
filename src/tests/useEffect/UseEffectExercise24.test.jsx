
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise24 from '../../exercises/useEffect/UseEffectExercise24';

describe('UseEffectExercise24: Muestra el tamaño de la ventana en tiempo real', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise24 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Muestra el tamaño de la ventana en tiempo real');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
