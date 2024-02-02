import React from "react";
import { useSelector } from "react-redux";

export default function DisplayUser() {
  //useSelector is use to access data from store
  const data = useSelector((state) => {
    return state.users;
  });
  console.log(data);

  return (
    <>
      <h3>DisplayUser</h3>
      {data.map((user, id) => {
        return <li key={id}>{user}</li>;
      })}
    </>
  );
}
