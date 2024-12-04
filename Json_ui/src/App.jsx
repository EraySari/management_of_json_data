import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginForm from "./features/authentication/LoginForm";
import Home from "./pages/Home";
import Cabin from "./pages/Cabin";
import Bookings from "./pages/Bookings";
import User from "./pages/User";
import Settings from "./pages/Settings";
import AppLayout from "./pages/AppLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Signup from "./pages/Signup";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0, //Veriler her zaman bayat(stale) kabul edilir.
        //Uygulama her seferinde sunucudan en güncel veriyi getirmek için sorgu yapar.
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/cabins" element={<Cabin />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/users" element={<User />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;

// 1 - Cabin create icin button olustur ve modalda form acilsin
