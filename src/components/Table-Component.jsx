import React from 'react';

function TableComponent() {
  return (
    <div className="card w-100 mx-auto mt-4 mr-3 px-4" >
      <div className="card-body">
        <table className="table table-striped-columns text-center">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Julierose Obias</td>
              <td>julie@gmail.com</td>
              <td>Active</td>
              <td>
                <select className="form-select">
                  <option>...</option>
                  <option>Admin</option>
                  <option>Block</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Adrian Lleva</td>
              <td>adrian@gmail.com</td>
              <td>Inactive</td>
              <td>
                <select className="form-select">
                  <option>...</option>
                  <option>Admin</option>
                  <option>Block</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableComponent;
