import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './shared/store';
import MainComponent from './components/MainComponent';
import React from 'react';
import MainDisplay from './components/main-subs/MainDisplay';
import SubDisplay from './components/server-sub/SubDisplay';
import SettingsMain from './components/profile-comps/settings/SettingsMain';
import MainProfie from './components/profile-comps/settings/MainProfile';
import { connect_socket } from './shared/functions';
import AudioChannel from './components/audio-channel/AudioChannel';

const App = React.memo(() => {
  React.useLayoutEffect(() => {
    connect_socket()
  }, [])
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" 
            element={<MainComponent />}
            children={[
              <Route 
                path='server/:serverId' 
                element={<MainDisplay />}
                children={[
                  <Route 
                    path='channel/:channelId' 
                    element={<SubDisplay />}
                  />,
                  <Route 
                    path='audio-channel' 
                    element={<AudioChannel />}
                  />,
                ]}
              />
            ]}
          />
          <Route 
            path='settings'
            element={<SettingsMain />}
            children={[
              <Route path='main-profile' element={<MainProfie />} />
            ]}
          />
        </Routes>
      </Router>
    </Provider>
  );
})


export default App