import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Main';

const App = () => {
  return <Main />;
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;