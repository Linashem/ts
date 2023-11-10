import React, { FC } from "react";
import { IUser } from "../types/types";
interface UserItemProps{
    user:IUser,
    onClick:(user:IUser)=>void
}

export const UserItem:FC<UserItemProps> = ({user, onClick}) => {
  return (
    <div onClick={()=>onClick(user)}
          style={{ padding: "15px", border : "2px solid pink" }}
        >
          {user.id} {user.name} live in the city: {user.address.city}, and
          street: {user.address.street}
        </div>
  )
}
