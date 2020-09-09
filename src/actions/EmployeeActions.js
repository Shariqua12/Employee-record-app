export const ADD_EMPLOYEE= "ADDEMPLOYEE";
export const DELETE_EMPLOYEE="DELETEEMPLOYEE";
export const UPDATE_EMPLOYEE='UPDATEEMPLOYEE';
export function addEmployee(employee)
{
    return {
    type:ADD_EMPLOYEE,
    payload:employee
    }
}

export function deleteEmployee(empCode)
{
    return {
    type:DELETE_EMPLOYEE,
    payload:empCode
    }
}

export function updateEmployee(employee)
{
    return {
        type:UPDATE_EMPLOYEE,
        payload:employee
        }

}