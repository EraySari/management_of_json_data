import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

function Signup() {
  return (
    <>
      <Heading as="h3">Create New User</Heading>
      <SignupForm />
    </>
  );
}

export default Signup;
