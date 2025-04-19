import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AddItemsComponent() {
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleAddItem = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        
        try {
            const lostItem = { 
                itemName, 
                description, 
                date: startDate.toISOString() 
            };
            
            console.log("Lost item added:", lostItem);
            
            const response = await fetch("http://localhost:8080/items/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(lostItem) 
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            console.log("New Item added!");
            
            
            setItemName('');
            setDescription('');
            setStartDate(new Date());
            document.getElementById('closeModal').click();
            
        } catch (error) {
            console.error("Error adding item:", error);
            setError("Failed to add item. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="">
            <button
                type="button"
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                Add Lost Item
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleAddItem}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Lost Item</h5>
                                <button
                                    id="closeModal"
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>

                            <div className="modal-body">
                                {error && (
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                )}
                                
                                <div className="mb-3">
                                    <label className="form-label">Lost Item</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={itemName}
                                        onChange={(e) => setItemName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="datePicker" className="form-label">Date Lost</label>
                                    <div className="mt-2">
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            className="form-control" 
                                            wrapperClassName="w-100" 
                                            dateFormat="yyyy/MM/dd"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button 
                                    type="submit" 
                                    className="btn btn-dark"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Adding...' : 'Add Item'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddItemsComponent;