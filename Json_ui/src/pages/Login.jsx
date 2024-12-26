import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import SignupLoginLayout from "../ui/SignupLoginLayout";

function Login() {
  return (
    <SignupLoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </SignupLoginLayout>
  );
}

export default Login;
