import React from "react";
import { GoogleLogout } from "react-google-login";
import { GoogleLogin } from "react-google-login";

const clientId =
  "373101881628-cm0tnjj01m2q6kc5pjmarkh7c457t3ki.apps.googleusercontent.com";

const Login = () => {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };

  const onSignOutSuccess = () => {
    alert("You have been signed out");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSignOutSuccess}
      ></GoogleLogout>
    </div>
  );
};

export default Login;
