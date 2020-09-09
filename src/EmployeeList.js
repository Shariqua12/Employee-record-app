import React, { Component } from 'react';
import EmployeeItem from './EmployeeItem.js';



export default class EmployeeList extends Component {
    render() {
        let students = this.props.employee;
       
        const trItem = students.map( (emp,index) => 
        <EmployeeItem key={index} employee={emp} 
            updateEmployee={this.updateEmployee}
            deleteEmployee={this.deleteEmployee}/>)
      return (
            <tbody>{trItem}</tbody>
      );
    }
  }