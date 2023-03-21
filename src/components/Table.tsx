import React from "react";
import { User } from "../Pages/Homepage";
import TableList from "./TableList";
import styles from "./Table.module.css";

type Props = {
  users: Array<User>;
  currentPage: number;
  handlePagination: (params: number) => void;
};

export default function Table({ users, currentPage, handlePagination }: Props) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>JobTitle</th>
            <th>EmailAddress</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableList key={user.ID} user={user} />
          ))}
        </tbody>
      </table>
      <button
        onClick={() => handlePagination(-12)}
        disabled={currentPage === 0}
      >
        Prev
      </button>
      <button onClick={() => handlePagination(12)}>Next</button>
    </div>
  );
}
