import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Student from './Student.jsx';

const students = [
  {id:1, name: 'Oliver'},
  {id:2, name: 'Jeck'},
  {id:3, name: 'Bred'},
  {id:1, name: 'Oliver'},
  {id:2, name: 'Jeck'},
  {id:3, name: 'Bred'},
  {id:1, name: 'Oliver'},
  {id:2, name: 'Jeck'},
  {id:3, name: 'Bred'}
];


ReactDOM.render(
  <React.StrictMode>
    {students.map((value)=>{
        return <Student data={value} />;
      })}
  </React.StrictMode>,
  document.getElementById('root')
);


 
