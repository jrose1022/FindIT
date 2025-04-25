import React, { useEffect, useState } from 'react';
import AddItemsComponent from './Add-Items-Component';

function ItemTableComponent() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch("http://localhost:8080/items/getAll")
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching items:", err);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await fetch(`http://localhost:8080/items/delete/${id}`, {
          method: "DELETE"
        });

        if (!response.ok) throw new Error("Delete failed");

        setItems(items.filter(item => item.id !== id));
      } catch (error) {
        console.error("Error deleting item:", error);
        alert("Failed to delete item.");
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Lost Items List</h2>

      <div className="mb-3 d-flex justify-content-between align-items-center">
        <input
         type="text"
            className="form-control w-50"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />

        <div className="ms-2">
            <AddItemsComponent />
        </div>
        </div>


      {loading ? (
        <p>Loading items...</p>
      ) : (
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Item Name</th>
              <th>Description</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items
              .filter(item =>
                item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.itemName}</td>
                  <td>{item.description}</td>
                  <td>{new Date(item.date).toLocaleDateString()}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ItemTableComponent;
