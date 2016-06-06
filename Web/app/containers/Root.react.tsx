import * as React from 'react';
import { PropTypes } from 'react';
import { Provider } from 'react-redux';
import {Store} from "redux";
import {IState} from "../Models/IState";
import ConnectedTodoApp from './ConnectedTodoApp.redux';
import DevTools from './DevTools';

const __DEBUG__:boolean;
const __DEBUG_NEW_WINDOW__:boolean;
interface IRootProps { store:Store<IState> }

export default class Root extends React.Component<{},{}> {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  get content () {
    return (
        <ConnectedTodoApp />
    );
  }

  get devTools () {
    if (__DEBUG__) {
      if (__DEBUG_NEW_WINDOW__) {
        if (!window.devToolsExtension) {
          require('../redux/utils/createDevToolsWindow').default(this.props.store);
        } else {
          window.devToolsExtension.open();
        }
      } else if (!window.devToolsExtension) {
        return <DevTools />;
      }
    }
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          {this.content}
          {this.devTools}
        </div>
      </Provider>
    );
  }
}
