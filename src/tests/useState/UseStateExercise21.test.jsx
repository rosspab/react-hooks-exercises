
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseStateExercise21 from '../../exercises/useState/UseStateExercise21';

describe('UseStateExercise21: Crea un contador de doble velocidad (aumenta de 2 en 2)', () => {
  it('se renderiza correctamente y permite incrementar el contador', () => {
    render(<UseStateExercise21 />);

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
