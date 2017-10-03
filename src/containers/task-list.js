import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../App.css';
import {changeBox} from '../actions/index'

class TaskList extends Component {

  showList() {
    return this.props.tasks.map ((task, i) => {
      if (task.status)
      {
        return (
        <div className="App-task">
          <input type="checkbox" onChange={() => this.props.changeBox(i)}/>
          {task.name}
        </div>
        )
      } else {
        return (
          <div className="App-task">
            <input type="checkbox" onChange={() => this.props.changeBox(i)}/>
            <s>{task.name}</s>
          </div>
        )
      }
    });
  }

  render () {
    console.log(this.props);
    return (
      <div>
        {this.showList()}
      </div>
    )
  }
}

function mapStateToProps (state) {
    return {
      tasks: state.tasks
    };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({changeBox: changeBox}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);