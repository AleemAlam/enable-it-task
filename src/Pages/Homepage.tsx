import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Table from "../components/Table";

export type User = {
  ID: string;
  JobTitle: string;
  EmailAddress: string;
  FirstNameLastName: string;
  Email: string;
  Phone: string;
  Company: string;
};

export default function Homepage() {
  const [users, setUsers] = useState<Array<User>>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const handlePagination = (params: number) => {
    setPage(page + params);
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://give-me-users-forever.vercel.app/api/users/${page}/next`)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.users);
        setLoading(false);
      })
      .catch(console.log);
  }, [page]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Table
          users={users}
          currentPage={page}
          handlePagination={handlePagination}
        />
      )}
    </div>
  );
}
