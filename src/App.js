import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import { ThemeProvider } from "@mui/material";
import theme from "./pages/GlobalTheme";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Register from "./pages/register/Register";
import Login from "./pages/Login";
import Profile from "./pages/doctor/Profile";
import TestDetail from "./pages/testpage";
import Pateintdetails from "./pages/patientdetails/Patientdetails";
import MedicalRecords from "./pages/patient/MedicalRecords";
import TestRecords from "./pages/patient/TestRecords";

function App() {
  return (
    <Router>
      <>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/doctor/profile" element={<Profile />} />
            <Route path="/test-data" element={<TestDetail/>}/>
            <Route path="/patient/details" element={<Pateintdetails/>}/>
            <Route path="/records" element={<MedicalRecords/>} />
            <Route path="/tests" element={<TestRecords/>} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </>
    </Router>
  );
}

export default App;
