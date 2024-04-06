import './App.css';
import { Provider } from 'react-redux';
import { store } from './shared/store';
import React from 'react';
import { connect_socket } from './shared/functions';
import { router } from './shared/router';
import { RouterProvider,} from "react-router-dom";

const App = React.memo(() => {
  React.useLayoutEffect(() => {
    connect_socket()
  }, [])
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
})


export default App