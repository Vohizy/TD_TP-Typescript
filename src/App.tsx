import React from 'react';
import './App.css';
import './css/bootstrap.css'
import { Form } from './component/form';
import { Card } from './component/card';
function App() {
  return (
<>
<Form />

<div className="d-flex justify-content-around">
  <div className="row">
    <Card Status='To Do' badge='card-title badge badge-primary text-wrap' />
    <Card Status='Progresse' badge='card-title badge badge-secondary text-wrap' />
    <Card Status='Done' badge='card-title badge badge-success text-wrap' />
  </div>
</div>
</>
  );
}

export default App;
