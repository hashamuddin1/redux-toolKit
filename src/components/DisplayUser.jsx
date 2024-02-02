import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slice/UserSlice";

export default function DisplayUser() {
  const dispatch = useDispatch();
  //useSelector is use to access data from store
  const data = useSelector((state) => {
    return state.users;
  });
  const deleteUser = (userId) => {
    dispatch(removeUser(userId));
  };

  return (
    <>
      <h3>DisplayUser</h3>
      {data.map((user, id) => {
        return (
          <div>
            <li key={id}>{user}</li>
            <span>
              <button onClick={() => deleteUser({ id })}>Delete</button>
            </span>
          </div>
        );
      })}
    </>
  );
}
