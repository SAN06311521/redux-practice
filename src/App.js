import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as chatActions from './store/actions/chatActions';
import Auth from './components/pages/Auth';

class App extends Component {

  componentDidMount() {
    this.props.setupSocket();
  }

  render() {
    return (
      <div className="App">
        <button onClick={e => {
          e.preventDefault();
          if(this.props.socket) {
            this.props.socket.send(JSON.stringify)({
              type: 'Hello',
              data: 'World'
          })
        }
      }}></button>
        <BrowserRouter>
          <Switch>
            <Route 
              path='/login'
              component={Auth}
            />
            <Route 
              path='/signup'
              component={Auth}
            />
            <Route 
              path="./"
              render={props => {
                if(!this.props.token) {
                  return (
                    <Redirect to='./login' />
                  )
                }else {
                  return (
                    <h1>Root</h1>
                  )
                }
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  ...state.auth,
  ...state.chat
})

const mapDispatchToProps = dispatch => ({
  setupSocket: () => {
    dispatch(chatActions.setupSocket());
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
