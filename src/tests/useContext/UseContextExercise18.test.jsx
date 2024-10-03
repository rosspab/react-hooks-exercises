
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseContextExercise18 from '../../exercises/useContext/UseContextExercise18';
import { createContext } from 'react';

// Crea un contexto para usar en el test
const ExampleContext = createContext('Valor de prueba');

describe('UseContextExercise18: Utiliza useContext para manejar un sistema de votación', () => {
  it('se renderiza correctamente y muestra el valor del contexto', () => {
    render(
      <ExampleContext.Provider value="Valor de prueba">
        <UseContextExercise18 />
      </ExampleContext.Provider>
    );

    // Verifica que el componente se renderiza correctamente y muestra el valor del contexto
    const header = screen.getByText('Utiliza useContext para manejar un sistema de votación');
    expect(header).toBeInTheDocument();

    const contextValue = screen.getByText(/Valor de prueba/i);
    expect(contextValue).toBeInTheDocument();
  });
});
