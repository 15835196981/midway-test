import React from 'react';
import ReactDOM from 'react-dom';
import { useRequest } from 'ahooks';
import { user, role } from './api'
import './index.css';

function App() {
  const { data: userData } = useRequest(user.list);
  const { data: roleData } = useRequest(role.list);

  console.log(666, userData, roleData);

  return (
    <div className="app">
      <img src="/logo.png" className="logo" />
      <h2>Hello Midway Hooks</h2>
      <p style={{ textAlign: 'center' }}>
        Edit <code>src/api/*.ts</code> and watch it change.
        <br />
        You can also open Devtools to see the request details.
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
