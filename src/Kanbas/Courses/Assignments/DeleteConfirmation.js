import React from "react";
import "./DeleteConfirmation.css";

function DeleteConfirmation({ onCancel, onConfirm }) {
  return (
    <div className="delete-confirmation-dialog">
      <h6>Are you sure you want to remove this assignment?</h6>
      <hr />
      <button className="btn btn-danger" onClick={onConfirm}>
        Yes
      </button>
      <button className="btn btn-success" onClick={onCancel}>
        No
      </button>
    </div>
  );
}

export default DeleteConfirmation;
