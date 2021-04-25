// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { logger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// reducers
import ChannelsReducer from './reducers/channels_reducer';
import CurrentUserReducer from './reducers/current_user_reducer';
import MessagesReducer from './reducers/messages_reducer';
import SelectedChannelReducer from './reducers/selected_channel_reducer';


const initialState = {
  messages: [],
  channels: ['general', 'react', 'berlin'],
  selectedChannel: 'general',
  currentUser: prompt('your username', 'anonymous')
  // currentUser: prompt('your username', `anonymous${Math.floor(10 + (Math.rand() * 90))}`)
};

// State and reducers
const reducers = combineReducers({
  // changeMe: (state = null, action) => state
  messages: MessagesReducer,
  channels: ChannelsReducer,
  selectedChannel: SelectedChannelReducer,
  currentUser: CurrentUserReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(logger, promiseMiddleware))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
