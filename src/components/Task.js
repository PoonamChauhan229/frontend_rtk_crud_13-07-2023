import * as React from "react";
import Counter from "./Counter";

export default function Task({taskName,description,status,deleteButton,editButton}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{taskName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{status}</h6>
        <p className="card-text">{description}</p>
        <Counter />
        {deleteButton}
        {editButton}
      </div>
    </div>
  );
}
