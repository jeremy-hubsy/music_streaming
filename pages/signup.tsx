import AuthForm from "../components/authFom";

export default function Signup() {
  return (
    <div>
      <AuthForm mode="signup" />
    </div>
  );
}

Signup.authPage = "true";
