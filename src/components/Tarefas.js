/* eslint-disable no-unused-vars */

import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './tarefas.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <>
      <ul className='tarefas'>
        {tarefas.map((tarefa, index) => (
          <li key={tarefa}>
            {tarefa}
          <div className='faBtn'>
            <FaEdit
              onClick={(e) => this.handleEdit(e, index)} className='edit'/>

            <FaWindowClose
              onClick={(e) => this.handleDelete(e, index)} className='delete'/>
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
