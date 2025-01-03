import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Cabin from "./pages/Cabin";
import Bookings from "./pages/Bookings";
import User from "./pages/User";
import Settings from "./pages/Settings";
import AppLayout from "./pages/AppLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import PageNotFound from "./pages/PageNotFound";
import Booking from "./pages/Booking";
import CreateBooking from "./features/bookings/CreateBooking";
import ProtectedRouter from "./ui/ProtectedRouter";
import Login from "./pages/Login";

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
            <Route
              element={
                <ProtectedRouter>
                  <AppLayout />
                </ProtectedRouter>
              }
            >
              <Route index element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cabins" element={<Cabin />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/bookings/:bookingId" element={<Booking />} />
              <Route
                path="/createBooking/:bookingId"
                element={<CreateBooking />}
              />
              <Route path="/users" element={<User />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

// TODO:

// cikis yapacakken modal acilip sorsun (tamam)
// logout apisini kullan (tamam)
// spinneri spinner mini ile degistir(tamam)
// bookingsi silmeyi userdan kaldir, sadece istek atabilsin. Iptal istegi gibi
// signup ekranini yap, signup olunca login ekranina yönlendirsin ve succes toast ciksin
// login olurken password gizlemeyi yap, eski bilgiler cikiyor onlari hallet
// formlarda errorlari göster, eger login basarisiz ise login or password yanlis erroru yazdir
// ayni username name, password ayni olmasi lazim bak onlara
