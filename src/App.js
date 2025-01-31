import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { Navbar } from "./Component/Navbar/Navbar";
import { darkTheme } from "./Theme/DarkTheme";
// import Home from './Component/Home/Home';
// import RestaurantDetails from './Component/Restaurant/RestaurantDetails';
// import Cart from './Component/Cart/Cart';
import Profile from './Component/Profile/Profile';
import CustomerRoute from "./Routers/CustomerRoute";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      {/* <Navbar /> */}
      {/* <Home/> */}
      {/* <RestaurantDetails/> */}
      {/* <Cart /> */}
      {/* <Profile/> */}
      <CustomerRoute/>
3    </ThemeProvider>
  );
}

export default App;
