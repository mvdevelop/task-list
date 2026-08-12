import React, { useState, useEffect } from 'react';
import './index.css';
import logo from '../img/icon.png';
import Form from './Form';
import Tarefas from './Tarefas';
import { ITarefa, IFormProps, ITarefasProps, IUseTaskManagerState, IUseTaskManagerProps } from '../types';

const initialTarefas: ITarefa[] = [];

const Main: React.FC = () => {
  const [state, setState] = useState<ITarefaState>({
    novaTarefa: '',
    tarefas: initialTarefas,
    index: -1,
  });

  useEffect(() => {
    const storedTarefas = JSON.parse(localStorage.getItem('tarefas'));
    if (storedTarefas) {
      setState(prevState => ({
        ...prevState,
        tarefas: storedTarefas,
      }));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { tarefas, index } = state;
    let { novaTarefa } = state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.some(t => t.text === novaTarefa)) return;

    const novasTarefas = [...tarefas];

    if (index === -1) {
      setState({
        ...state,
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
    } else {
      novasTarefas[index] = novaTarefa;
      setState({
        ...state,
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      novaTarefa: e.target.value,
    });
  };

  const handleEdit = (e: React.MouseEvent, index: number) => {
    setState({
      ...state,
      index,
      novaTarefa: state.tarefas[index].text,
    });
  };

  const handleDelete = (e: React.MouseEvent, index: number) => {
    const novasTarefas = [...state.tarefas];
    novasTarefas.splice(index, 1);
    setState({
      ...state,
      tarefas: [...novasTarefas],
    });
  };

  return (
    <div className='main'>
      <div className='logo'>
        <img src={logo} alt="Task List Logo" />
        <h1>Task List</h1>
      </div>

      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        novaTarefa={novaTarefa}
      />

      <Tarefas
        tarefas={state.tarefas}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Main;