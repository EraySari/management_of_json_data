import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import SignupLoginLayout from "../ui/SignupLoginLayout";

function Signup() {
  return (
    <SignupLoginLayout>
      <Logo />
      <Heading as="h4">Create New User</Heading>
      <SignupForm />
    </SignupLoginLayout>
  );
}

export default Signup;
