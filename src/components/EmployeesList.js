import React from 'react';

class EmployeesList extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      filterInput: ''
    }
  }
  
  filterNames( {target} ){
    console.log(target.value);
    this.setState({
      filterInput: target.value
    });
  }

  render() {
    const { employees } = this.props;
    console.log(employees);
    return (
      <React.Fragment>
        <div className="controls">
          <input type="text" className="filter-input" data-testid="filter-input" 
          onChange={this.filterNames} />
        </div>
        <ul className="employees-list">
          { employees.map(employee => (
            <li key={employee.name} data-testid="employee">{employee.name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
