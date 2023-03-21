import React from "react";
import { User } from "../Pages/Homepage";

type Props = {
  user: User;
};

export default function TableList({ user }: Props) {
  return (
    <tr>
      <td>{user.ID}</td>
      <td>{user.JobTitle}</td>
      <td>{user.EmailAddress}</td>
      <td>{user.FirstNameLastName}</td>
      <td>{user.Email}</td>
      <td>{user.Phone}</td>
      <td>{user.Company}</td>
    </tr>
  );
}
