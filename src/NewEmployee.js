import React from 'react';
import './Modal.css';

export default class NewEmployee extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            employee:[],
            empName:"",
            empCode:"",
            project:"",
            technology:"" 
        }
      
    }
    handleChange=(event)=> {
        this.setState({[event.target.name]: event.target.value});
      }

    handleSubmit=(event)=>{
        event.prevendefault();
        let employee={
            empCode:this.state.empCode,
      empName:this.state.empName,
      project:this.state.project,
      technology:this.state.technology
        }
        this.props.addEmployee(employee);
        this.setState({
            employee:{...this.state.employee,
                empCode:'',
                empName:'',
                project:'',
                technology:''
            }
        })
        
    }
    render(){
    return (
    <div >
        <div className="modal-wrapper"  style={{
                    transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
    
    
        <div className="modal-header">
        <span className="close-modal-btn" onClick={this.props.close}>×</span>
        </div>
        <div className="modal-body">
                    <form onSubmit={this.handlSubmit}>
                    <input type="text"
                          name="empCode"
                         value={this.state.empCode}
                         onChange={this.handleChange}
                         className="form-control"
                         placeholder="Enter Emp Code"
                         ></input>
                         <br></br>
                        <input type="text"
                        name="empName"
                         value={this.state.empName}
                         onChange={this.handleChange}
                         className="form-control"
                         placeholder="Enter Name"
                         ></input>
                         <br></br>
                         
                         
                          <input type="text"
                          name="project"
                         value={this.state.project}
                         onChange={this.handleChange}
                         className="form-control"
                         placeholder="Enter Project Assigned"
                         ></input>
                         <br></br>
                          <input type="text"
                          name="technology"
                         value={this.state.technology}
                         onChange={this.handleChange}
                         className="form-control"
                         placeholder="Enter Technology Stack"
                         ></input>
                   
                  
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={this.props.close}>CLOSE</button>
                    <button className="btn-continue" onClick={this.props.addEmployee}>SAVE</button>
                </div>
                
                </form>
                </div>
        
    </div>
    </div>)
}
}