
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseContextExercise14 from '../../exercises/useContext/UseContextExercise14';
import { createContext } from 'react';

// Crea un contexto para usar en el test
const ExampleContext = createContext('Valor de prueba');

describe('UseContextExercise14: Crea un formulario que comparte su estado con useContext', () => {
  it('se renderiza correctamente y muestra el valor del contexto', () => {
    render(
      <ExampleContext.Provider value="Valor de prueba">
        <UseContextExercise14 />
      </ExampleContext.Provider>
    );

    // Verifica que el componente se renderiza correctamente y muestra el valor del contexto
    const header = screen.getByText('Crea un formulario que comparte su estado con useContext');
    expect(header).toBeInTheDocument();

    const contextValue = screen.getByText(/Valor de prueba/i);
    expect(contextValue).toBeInTheDocument();
  });
});
