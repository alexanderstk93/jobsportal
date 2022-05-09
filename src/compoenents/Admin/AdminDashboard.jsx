import React from "react";
import AddJobItemForm from "./AddJobItemForm";
import styles from "./AdminDashboard.module.css";

/* -------------------------------------------------

This component is the parent of AddJobItemForm and it 
will render the child component.

------------------------------------------------- */

export default function AdminDashboard() {
  return (
    <div>
      <AddJobItemForm />
    </div>
  );
}
