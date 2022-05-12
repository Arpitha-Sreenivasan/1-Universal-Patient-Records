import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import { ThemeProvider } from "@mui/material";
import theme from "./pages/GlobalTheme";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./pages/Footer";
import RegisterPatient from "./pages/register/RegisterPatient";
import RegisterDoctor from "./pages/register/RegisterDoctor";
import Profile from "./pages/doctor/Profile";
import TestDetail from "./pages/testpage";
import Pateintdetails from "./pages/patientdetails/Patientdetails";
import MedicalRecords from "./pages/patient/MedicalRecords";
import TestRecords from "./pages/patient/TestRecords";
import DoctorList from "./pages/admin/DoctorList";
import PatientList from "./pages/admin/PatientList";

// CSS IMPORTS
import "./App.css";
import SearchPatient from "./pages/doctor/SearchPatient";

function App() {
  return (
    <Router>
      <>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search-patient" element={<SearchPatient />} />
            <Route path="/register-patient" element={<RegisterPatient />} />
            <Route path="/register-doctor" element={<RegisterDoctor />} />
            <Route path="/doctor/profile" element={<Profile />} />
            <Route path="/test-data" element={<TestDetail />} />
            <Route path="/patient/details" element={<Pateintdetails />} />
            <Route path="/:aadharnumber/records" element={<MedicalRecords />} />
            <Route path="/:aadharnumber/tests" element={<TestRecords />} />
            <Route path="/patients" element={<PatientList />} />
            <Route path="/doctors" element={<DoctorList />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </>
    </Router>
  );
}

export default App;
