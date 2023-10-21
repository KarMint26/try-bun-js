"use client";

import React from "react";
import { logIn, logOut, toggleModerator } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";

export default function SignIn() {
  const [username, setUsername] = React.useState("");
  const isModerator = useAppSelector(
    (state) => state.authReducer.value.isModerator
  );

  const user = useAppSelector((state) => state.authReducer.value.username);
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

  const dispatch = useDispatch();

  const onClickLogIn = () => {
    dispatch(logIn(username));
  };

  const onClickToggle = () => {
    dispatch(toggleModerator());
  };

  const onClickLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="bg-no-repeat w-screen h-screen flex justify-center items-center flex-col">
      {!isAuth ? (
        <>
          <input
            type="text"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          <br></br>
          <button onClick={onClickLogIn}>Log In</button>
          <br></br>
        </>
      ) : (
        <>
          <h1>You Have Logged In</h1>
        </>
      )}
      <button onClick={onClickLogOut}>Log Out</button>
      <br></br>

      <button onClick={onClickToggle}>Toggle Moderator Status</button>

      <h1>Username : {user}</h1>
      {isModerator && <h1>This User is A Moderator</h1>}
    </div>
  );
}
