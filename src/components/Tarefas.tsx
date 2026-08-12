import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import { ITarefa, ITarefasProps } from '../types';

import './tarefas.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }: ITarefasProps) {
  return (
    <>
      <ul className='tarefas' role='list' aria-label='Lista de tarefas'>
        {tarefas.map((tarefa: ITarefa, index: number) => (
          <li
            key={tarefa.id ?? index}
            className='tarefa-item'
            role='listitem'
            tabIndex={0}
          >
            <span>{tarefa.text}</span>
            {tarefa.concluida && <span className='concluida'>{tarefa.text}</span>}
            <div className='faBtn'>
              <FaEdit
                onClick={(e) => handleEdit(e, index)}
                title='Editar tarefa'
                aria-label='Editar esta tarefa'
                className='edit'
              />
              <FaWindowClose
                onClick={(e) => handleDelete(e, index)}
                title='Excluir tarefa'
                aria-label='Excluir esta tarefa'
                className='delete'
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};