
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise27 from '../../exercises/useState/UseStateExercise27';

describe('UseStateExercise27: Resetea el estado al hacer doble clic en el botón', () => {
  it('se renderiza correctamente y permite incrementar el contador', () => {
    render(<UseStateExercise27 />);

    // Verifica que el componente se renderiza correctamente
    const button = screen.getByText('Incrementar');
    expect(button).toBeInTheDocument();

    // Simula un clic en el botón y verifica que el contador incrementa
    fireEvent.click(button);

    // Utiliza una función como matcher para encontrar el texto del contador
    const counter = screen.getByText((content) => {
      return content.includes('Contador 1');
    });
    
    expect(counter).toBeInTheDocument();
  });
});
