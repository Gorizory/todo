import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTask } from '../actions/index'
import '../App.css';

class AddTask extends Component {
  render () {
    return (
      <div>
        <form onSubmit={(ev) => {
          ev.preventDefault();
          const text = ev.target.querySelector('.input-todo').value;
          const desc = ev.target.querySelector('.input-desc').value;
          if (text !== '') {
            this.props.addTask({text, desc});
          }
          ev.target.querySelector('.input-todo').value = '';
          ev.target.querySelector('.input-desc').value = '';
        }
        }>
          <input placeholder='Задача' id='text' className='input-todo'/>
          <input placeholder='Описание' id='desc' className='input-desc'/>
          <button type='submit'> Добавить задачу </button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({addTask: addTask}, dispatch)
}

export default connect(null, mapDispatchToProps)(AddTask);