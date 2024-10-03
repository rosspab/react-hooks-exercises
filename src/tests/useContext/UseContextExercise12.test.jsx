
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UseContextExercise12 from '../../exercises/useContext/UseContextExercise12';
import { createContext } from 'react';

// Crea un contexto para usar en el test
const ExampleContext = createContext('Valor de prueba');

describe('UseContextExercise12: Usa useContext para manejar los permisos de usuario', () => {
  it('se renderiza correctamente y muestra el valor del contexto', () => {
    render(
      <ExampleContext.Provider value="Valor de prueba">
        <UseContextExercise12 />
      </ExampleContext.Provider>
    );

    // Verifica que el componente se renderiza correctamente y muestra el valor del contexto
    const header = screen.getByText('Usa useContext para manejar los permisos de usuario');
    expect(header).toBeInTheDocument();

    const contextValue = screen.getByText(/Valor de prueba/i);
    expect(contextValue).toBeInTheDocument();
  });
});
