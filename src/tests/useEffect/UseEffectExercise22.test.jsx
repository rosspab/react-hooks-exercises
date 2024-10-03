
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseEffectExercise22 from '../../exercises/useEffect/UseEffectExercise22';

describe('UseEffectExercise22: Llama a una API cada 10 segundos', () => {
  it('se renderiza correctamente y ejecuta el efecto', () => {
    render(<UseEffectExercise22 />);

    // Verifica que el componente se renderiza correctamente
    const header = screen.getByText('Llama a una API cada 10 segundos');
    expect(header).toBeInTheDocument();

    // Aquí puedes añadir pruebas más específicas según el ejercicio
  });
});
