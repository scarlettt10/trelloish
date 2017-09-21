import React from 'react';
import { connect } from 'react-redux';
import { Button, Header, Container, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Board from './Board';
import { getBoards } from '../actions/boards';

class Boards extends React.Component {

  componentDidMount() {
    this.props.dispatch(getBoards())

  }

  render() {
    return(
      <Container>

        <Link to="/">Home</Link>
      </Container> 
    )
  }
}
 


const mapStateToProps = (state, props) => {
  return { boards: state.boards }
}

export default connect(mapStateToProps)(Boards);