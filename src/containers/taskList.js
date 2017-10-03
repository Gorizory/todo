import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../App.css';
import { checkBox, uncheckBox } from '../actions/index'
import { v4 } from 'node-uuid'

class TaskList extends Component {

  showList() {
    return this.props.tasks.map ((task, i) => {
      if (!task.done)
      {
        return (
        <div className="App-task" key={v4()}>
          <input type="checkbox" onChange={() => this.props.checkBox(i)}/>
          {task.name}
        </div>
        )
      } else {
        return (
          <div className="App-task" key={v4()}>
            <input type="checkbox" defaultChecked onChange={() => this.props.uncheckBox(i)}/>
            <s>{task.name}</s>
          </div>
        )
      }
    });
  }

  render () {
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
  return bindActionCreators({checkBox: checkBox, uncheckBox: uncheckBox}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);