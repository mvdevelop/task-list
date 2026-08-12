import React, { ChangeEvent, FormEvent } from 'react';
import { FaPlus } from 'react-icons/fa';
import { IFormProps } from '../types/Tarefas';

import './form.css';

const Form: React.FC<IFormProps> = ({ handleSubmit, handleChange, novaTarefa }) => {
  return (
    <form onSubmit={handleSubmit} action='#' className='form' aria-label='Adicionar tarefa'>
      <input
        onChange={handleChange}
        type='text'
        value={novaTarefa}
        placeholder='Digite uma nova tarefa...'
        aria-label='Campo de texto para nova tarefa'
        aria-required='true'
        required
      />
      <button
        type='submit'
        aria-label='Adicionar tarefa'
        title='Adicionar tarefa'
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default Form;