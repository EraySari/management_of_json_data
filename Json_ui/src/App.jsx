import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import SignupForm from "./features/authentication/SignupForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginForm from "./features/authentication/LoginForm";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
