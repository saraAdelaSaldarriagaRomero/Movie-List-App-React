import { render, fireEvent } from '@testing-library/react';
import Filter from '../components/Filter';

describe('Filter Component', () => {
  it('debería llamar a la función onGenreChange con el género seleccionado', () => {
    // Mock de la función onGenreChange
    const mockOnGenreChange = jest.fn();

    // Renderizar el componente Filter y pasar la función mock como prop
    const { getByLabelText } = render(
      <Filter onGenreChange={mockOnGenreChange} />
    );

    // Encontrar el select por su etiqueta
    const selectElement = getByLabelText('Filter by genre');

    // Simular el cambio de selección en el select
    fireEvent.change(selectElement, { target: { value: '28' } });

    // Verificar que la función onGenreChange se haya llamado con el valor seleccionado
    expect(mockOnGenreChange).toHaveBeenCalledWith('28');
  });
});
