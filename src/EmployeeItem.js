import React, { Component } from 'react';


export default class EmployeeItem extends Component {

  constructor(props)
  {
    super(props);
    this.state ={isEdit:false}
    this.editStudent = this.editStudent.bind(this);
    this.editStudentSubmit = this.editStudentSubmit.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }
  deleteEmployee()
  {
    const {empCode} = this.props;
      this.props.deleteEmployee(empCode);
  }
  editStudent()
  {
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }))
  }
  editStudentSubmit()
  {
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }));
    this.props.updateEmployee(this.props.employee.empCode,this.empCodeInput.value,this.empNameInput.value,this.projectInput.value,this.technologyInput.value);
  }
    render() {
        //const {empName,empCode,project,technology} = this.state.mployee;
      return (
        this.state.isEdit === true ? 

        <tr className="bg-warning" key={this.props.index}>
          <td>
                <input defaultValue ={this.props.empCode} ref={empCodeInput => this.empCodeInput = empCodeInput}/>
            </td>
            <td>
                <input ref={empNameInput => this.empNameInput = empNameInput} defaultValue ={this.props.empName}/>
            </td>
            <td>
                <input defaultValue={this.props.project} ref={projectInput => this.projectInput = projectInput}/>
            </td>
            <td>
                <input ref={technologyInput => this.technologyInput = technologyInput} defaultValue={this.props.technology}/>
            </td>
            <td>
                <i className="far fa-save" onClick={this.editStudentSubmit}></i></td><td><i className="fas fa-trash"></i>
            </td>
        </tr>
 :
        <tr>
          <td>{this.props.employee.empCode}</td>
            <td>{this.props.employee.empName}</td>
            <td>{this.props.employee.project}</td>
            <td>{this.props.employee.technology}</td>
            <td><i className="far fa-edit" onClick={this.editStudent}></i></td>
            <td><i className="fas fa-trash" onClick={()=>this.deleteEmployee(this.empCode)}></i></td>
            </tr>
      );
    }
  }
