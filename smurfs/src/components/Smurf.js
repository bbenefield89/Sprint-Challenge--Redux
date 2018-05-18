import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editSmurf } from '../actions/actions';

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editSmurf: false,
      smurfValues: {
        id: this.props.id,
        name: '',
        age: '',
        height: '',
      },
    }
  }

  // setEditSmurf
  setEditSmurf = () => {
    this.setState({ editSmurf: !this.state.editSmurf })
  }

  // setInputVal
  setInputVal = e => {
    const newValue = Object.assign({}, this.state.smurfValues, { [e.target.name] : e.target.value });
    this.setState({ smurfValues: newValue });
  }

  sendEditSmurf = () => {
    this.setEditSmurf();
    this.props.editSmurf(this.state.smurfValues)
  }
  
  render() {
    if (this.state.editSmurf) {
      return (
        <form onSubmit={ e => e.preventDefault() }>
          {/* inputs */}
          <input
            name='name'
            type='text'
            placeholder={ this.props.name }
            value={ this.state.smurfValues.name }
            onChange={ this.setInputVal }
          />
          <input
            name='age'
            type='text'
            placeholder={ this.props.age }
            value={ this.state.smurfValues.age }
            onChange={ this.setInputVal }
          />
          <input
            name='height'
            type='text'
            placeholder={ this.props.height }
            value={ this.state.smurfValues.height }
            onChange={ this.setInputVal }
          />

          {/* buttons */}
          <input
            type='submit'
            onClick={ this.sendEditSmurf }
          />
          <input
            type='reset'
          />
        </form>
      )
    }
    
    return (
      <ul onClick={ this.setEditSmurf }>
        <li>{ this.props.name }</li>
        <li>{ this.props.age }</li>
        <li>{ this.props.height }</li>
      </ul>
    )
  }
}

export default connect(null, { editSmurf })(Smurf);