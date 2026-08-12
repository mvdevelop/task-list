import React, { useState, useEffect } from 'react';
import logo from '../img/icon.png';
import Form from './Form';
import Tarefas from './Tarefas';
import { ITarefa, IFormProps, ITarefasProps, IUseTaskManagerState } from '../types';

import './main.css';

interface IMainState extends IUseTaskManagerState {
  novaTarefa: string;
  tarefas: ITarefa[];
  index: number;
}

const Main: React.FC = () => {
  const [state, setState] = useState<IMainState>({
    novaTarefa: '',
    tarefas: [],
    index: -1,
  });

  useEffect(() => {
    const storedTarefas = localStorage.getItem('tarefas');
    if (storedTarefas) {
      setState(prevState => ({
        ...prevState,
        tarefas: JSON.parse(storedTarefas),
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
        tarefas: [...novasTarefas, { id: Date.now().toString(), text: novaTarefa, concluida: false }],
        novaTarefa: '',
      });
    } else {
      novasTarefas[index] = { ...novasTarefas[index], text: novaTarefa };
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

  const handleToggle = (index: number) => {
    const novasTarefas = [...state.tarefas];
    novasTarefas[index] = {
      ...novasTarefas[index],
      concluida: !novasTarefas[index].concluida,
    };
    setState({
      ...state,
      tarefas: [...novasTarefas],
    });
  };

  const { novaTarefa: novaTarefaValue, tarefas: tarefasList } = state;

  return (
    <div className='main'>
      <div className='logo'>
        <img src={logo} alt="Task List Logo" />
        <h1>Task List</h1>
      </div>

      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        novaTarefa={novaTarefaValue}
      />

      <Tarefas
        tarefas={tarefasList}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    </div>
  );
};

export default Main;