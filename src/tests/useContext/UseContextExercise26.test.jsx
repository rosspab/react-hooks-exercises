
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseContextExercise26 from '../../exercises/useContext/UseContextExercise26';
import { createContext } from 'react';

// Crea un contexto para usar en el test
const ExampleContext = createContext('Valor de prueba');

describe('UseContextExercise26: Implementa un sistema de autenticación con roles usando useContext', () => {
  it('se renderiza correctamente y muestra el valor del contexto', () => {
    render(
      <ExampleContext.Provider value="Valor de prueba">
        <UseContextExercise26 />
      </ExampleContext.Provider>
    );

    // Verifica que el componente se renderiza correctamente y muestra el valor del contexto
    const header = screen.getByText('Implementa un sistema de autenticación con roles usando useContext');
    expect(header).toBeInTheDocument();

    const contextValue = screen.getByText(/Valor de prueba/i);
    expect(contextValue).toBeInTheDocument();
  });
});
