import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { IUser } from "../types/types";
import List from "./List";
import { UserItem } from "./UserItem";

// export interface UserItemPageParams {
//   id: string;
// }
export const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams();
  const navigate = useNavigate()
  

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div>
      <button onClick={()=>navigate('/users')}>back</button>
      <h1>The page of {user?.name} </h1>
      <p>{user?.email} </p>
      <p>{user?.address.city}{user?.address.street}{user?.address.zipcode} </p>

    </div>
  );
};
