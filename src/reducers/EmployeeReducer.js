import {ADD_EMPLOYEE,DELETE_EMPLOYEE,UPDATE_EMPLOYEE} from "../actions/EmployeeActions";
const initialState={employees:[]}

const studentReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_EMPLOYEE:return{
            ...state,
            employees:state.employees.concat([action.payload])
        }
    
   
       case DELETE_EMPLOYEE:return {
                employees:state.employees.filter( x => x.empCode !== action.payload)
        }
        

        case UPDATE_EMPLOYEE:
           let employee = state.map((emp) => {
                const {empCode,empName,project,technology} = action.payload;
                if(emp.empCode=== empCode)
                {
                
                emp.project = project;
                emp.technology=technology;
                }
                return emp;
            })
            return employee;
        
    
        default:return state;
        }
}

/* const studentReducer = (state = [],action) => {

    switch(action.type){
    
    case 'ADD_STUDENT':
        return addStudent(
    let stateCopy = [...state,action.payload];
    localStorage.setItem('students',JSON.stringify(stateCopy));
    return stateCopy
    
    case 'DELETE_STUDENT':
    stateCopy = state.filter( x => x.id !== action.payload);
    localStorage.setItem('students',JSON.stringify(stateCopy));
    return stateCopy
        
    case 'UPDATE_STUDENT':
    
    stateCopy = state.map((student) => {
        const {id,name,grade,school} = action.payload;
        if(student.id === id)
        {
        student.name = name;
        student.grade = grade;
        student.school = school;
        }
        return student;
    })
    localStorage.setItem('students',JSON.stringify(stateCopy));
    return stateCopy
    
    default:
        return state;
    }
    
    } */
    export default studentReducer;