import AuthForm from "../components/authFom";

export default function Signin() {
  return (
    <div>
      <AuthForm mode="signin" />
    </div>
  );
}
Signin.authPage = "true";
