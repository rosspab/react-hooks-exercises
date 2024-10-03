
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseContextExercise4 from '../../exercises/useContext/UseContextExercise4';
import { createContext } from 'react';

// Crea un contexto para usar en el test
const ExampleContext = createContext('Valor de prueba');

describe('UseContextExercise4: Crea un contador global utilizando useContext', () => {
  it('se renderiza correctamente y muestra el valor del contexto', () => {
    render(
      <ExampleContext.Provider value="Valor de prueba">
        <UseContextExercise4 />
      </ExampleContext.Provider>
    );

    // Verifica que el componente se renderiza correctamente y muestra el valor del contexto
    const header = screen.getByText('Crea un contador global utilizando useContext');
    expect(header).toBeInTheDocument();

    const contextValue = screen.getByText(/Valor de prueba/i);
    expect(contextValue).toBeInTheDocument();
  });
});
