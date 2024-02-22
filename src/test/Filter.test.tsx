

import { render, fireEvent, screen } from '@testing-library/react';
import Filter from '../components/Filter';

describe('Filter Component', () => {
  it('debería llamar a la función onGenreChange con el género seleccionado', () => {
    // Mock de la función onGenreChange
    const mockOnGenreChange = jest.fn();

    // Renderizar el componente Filter y pasar la función mock como prop
    render(<Filter onGenreChange={mockOnGenreChange} />);

    // Encontrar el select por su texto visible
    const selectElement = screen.getByDisplayValue('Filter');

    // Simular el cambio de selección en el select
    fireEvent.change(selectElement, { target: { value: '28' } });

    // Verificar que la función onGenreChange se haya llamado con el valor seleccionado
    expect(mockOnGenreChange).toHaveBeenCalledWith('28');
  });
});
