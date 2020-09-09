import React, { Component } from 'react';
import './App.css';
import EmployeeList from './EmployeeList.js';
import NewEmployee from './NewEmployee.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {addEmployee,deleteEmployee,updateEmployee} from './actions/EmployeeActions';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.addNewEmployee = this.addNewEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.editStudentSubmit = this.editStudentSubmit.bind(this);
    this.state={
      employee:[
        {empCode:1,empName:'John Doe',project:"synerzip",technology:'React'}
    ,{empCode:2,empName:'John Doe',project:"synerzip",technology:'React'},
    {empCode:3,empName:'John Doe',project:"synerzip",technology:'React'},
    {empCode:4,empName:'John Doe',project:"synerzip",technology:'React'}
    
   
      ],
      show:false
    }
  }
  
  showModal=()=>{
      this.setState({show:true});
  }
  hideModal=()=>{
    //const show=this.state.show;
    this.setState({show:false});
  }
 
  addNewEmployee()
  {

    //const {employeeList}=this.state;
    const newEmployee={
      empCode:this.state.empCode,
      empName:this.state.empName,
      project:this.state.project,
      technology:this.state.technology
   }
    this.setState({
      employeeList:[...this.state.employeeList,newEmployee]
    })
  }

  deleteEmployee(empCode)
  {
    let r = window.confirm("Do you want to delete this item");
    if( r === true)
    {
    this.props.deleteEmployee(empCode);
   }
  }
  editStudentSubmit(empCode,empName,project,technology)
  {
this.props.updateEmployee({empCode:empCode,empName:empName,project:project,technology:technology});
  }
  
  render() {
    return (
      <div className="container-fluid">
      <div className="row mt-3"><div className="col-lg-12">
      <div className="card">
  <div className="card-header">
    Student Registry
  </div>
  <div className="card-body">
  <table className="table table-hover">
          <thead className="thead-dark">
            <tr><th>EmpCode</th>
          <th>EmpName</th><th>Project</th><th>Technology</th>
          <th>Edit/Save</th><th>Delete</th></tr></thead>
        
          <EmployeeList
           deleteEmployee={this.deleteEmployee}
           
            updateEmployee={this.editStudentSubmit}
             employee={this.state.employee}/>
        </table>
        { this.state.show ? <div onClick={this.state.hideModal} className="back-drop"></div> : null} 
        <button className="open-modal-btn" onClick={e=>{this.showModal()}}>Add New</button>
      <NewEmployee className="modal"
       show={this.state.show} 
       close={this.hideModal}
       addEmployee={this.addNewEmployee}
       />
     
    
      </div></div></div></div></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employee : state.employee
  }
}

const mapDispatchToProps = (dispatch) => {

   return bindActionCreators({
    addEmployee:addEmployee,
    deleteEmployee:deleteEmployee,
    updateEmployee:updateEmployee
  },dispatch); 
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

