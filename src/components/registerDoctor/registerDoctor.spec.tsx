import { fireEvent, render, screen } from '@testing-library/react';
import RegisterDoctor, { Doctor } from '.';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

describe('RegisterDoctor', () => {
  it('renders without crashing', () => {
    const mockSetDoctors = vi.fn(); 
    const mockDoctors: Doctor[] = [];

    render(<RegisterDoctor setDoctors={mockSetDoctors} doctors={mockDoctors} />);

    expect(screen.getByTestId("nomeDoctorLabel")).toBeInTheDocument();
    expect(screen.getByTestId("sobrenomeDoctorLabel")).toBeInTheDocument();
    expect(screen.getByTestId("sobrenomeDoctorInput")).toBeInTheDocument();
    expect(screen.getByTestId("diaEHorario")).toBeInTheDocument();
    expect(screen.getByTestId("btnAdicionarDoctor")).toBeInTheDocument();
  });
  it('given the incorrect user, when clicking to add, do not add',()=>{
    const mockSetDoctors = vi.fn();
    const mockDoctors:Doctor[] = [];

    render(<RegisterDoctor setDoctors={mockSetDoctors} doctors={mockDoctors} />);

  
    const nomeInput = screen.getByTestId("nomeDoctorInput");
    const sobrenomeInput = screen.getByTestId("sobrenomeDoctorInput");
    const daySelectInput = screen.getByTestId("select-0");
    fireEvent.click(daySelectInput); 
    const startTime = screen.getByTestId("startTimeInput-0")
    const endTime = screen.getByTestId("endTimeInput-0")

    fireEvent.change(nomeInput, { target: { value: 'Jo' } }); 
    fireEvent.change(sobrenomeInput, { target: { value: 'aa' } }); 
    fireEvent.change(startTime, { target: { value: '13:30' } });
    fireEvent.change(endTime, { target: { value: '15:30' } });

    const btn = screen.getByTestId("btnAdicionarDoctor");
    fireEvent.click(btn);

    expect(btn).toBeDisabled()
    expect(mockSetDoctors).not.toHaveBeenCalled();
  });
  it('given the incorrect name user, when name written with less than three characters, show error message',()=>{
    const mockSetDoctors = vi.fn();
    const mockDoctors:Doctor[] = [];

    renderRegisterDoctor(mockSetDoctors,mockDoctors);
    const nomeInput = screen.getByTestId("nomeDoctorInput");

    fireEvent.change(nomeInput, { target: { value: 'Jo' } });

    const errorMessage = screen.getByTestId("errorMessageNomeDoctor")
      
    expect(errorMessage).toBeInTheDocument()
  })
  it('given the correct user, when clicking to add, add',()=>{
    const mockSetDoctors = vi.fn();
    const mockDoctors:Doctor[] = [];

    render(<RegisterDoctor setDoctors={mockSetDoctors} doctors={mockDoctors} />);

  
    const nomeInput = screen.getByTestId("nomeDoctorInput");
    const sobrenomeInput = screen.getByTestId("sobrenomeDoctorInput");
    const daySelectInput = screen.getByTestId("select-0");
    fireEvent.click(daySelectInput); 
    const startTime = screen.getByTestId("startTimeInput-0")
    const endTime = screen.getByTestId("endTimeInput-0")

    fireEvent.change(nomeInput, { target: { value: 'João' } }); 
    fireEvent.change(sobrenomeInput, { target: { value: 'Victor' } }); 
    fireEvent.change(startTime, { target: { value: '13:30' } });
    fireEvent.change(endTime, { target: { value: '15:30' } });

    const btn = screen.getByTestId("btnAdicionarDoctor");
    fireEvent.click(btn);

    expect(mockSetDoctors).toHaveBeenCalled();
  });
  it('given the correct name user, when name >= 3, do not show error message',()=>{
    const mockSetDoctors = vi.fn();
    const mockDoctors:Doctor[] = [];

    renderRegisterDoctor(mockSetDoctors,mockDoctors);

    const nomeInput = screen.getByTestId("nomeDoctorInput");
    const errorMessage = screen.queryByTestId("errorMessageNomeDoctor")
    fireEvent.change(nomeInput, { target: { value: 'Joa' } });

    expect(errorMessage).not.toBeInTheDocument()

  })

  function renderRegisterDoctor(mockSetDoctors:()=>void,mockDoctors:Doctor[]){
    return render(<RegisterDoctor setDoctors={mockSetDoctors} doctors={mockDoctors} />);
  }
});
