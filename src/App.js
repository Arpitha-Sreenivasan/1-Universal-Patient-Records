import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import { ThemeProvider } from "@mui/material";
import theme from "./pages/GlobalTheme";
// PAGES
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterPatient from "./pages/register/RegisterPatient";
import RegisterDoctor from "./pages/register/RegisterDoctor";
import AddConsultation from "./pages/AddConsultation";
import AddTest from "./pages/patient/AddTest";
import SearchPatient from "./pages/doctor/SearchPatient";
import ViewPatientProfile from "./pages/patient/ViewPatientProfile";
import ViewDoctorProfile from "./pages/doctor/ViewDoctorProfile";
import MedicalRecords from "./pages/patient/MedicalRecords";
import TestRecords from "./pages/patient/TestRecords";
import DoctorList from "./pages/admin/DoctorList";
import PatientList from "./pages/admin/PatientList";
import Footer from "./pages/Footer";

// CSS IMPORTS
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register-patient" element={<RegisterPatient />} />
            <Route path="/register-doctor" element={<RegisterDoctor />} />
            <Route path="/add-consultation" element={<AddConsultation />} />
            <Route path="/add-test" element={<AddTest />} />
            <Route path="/search-patient" element={<SearchPatient />} />
            <Route path="/patient-profile" element={<ViewPatientProfile />} />
            <Route path="/doctor-profile" element={<ViewDoctorProfile />} />
            <Route path="/:aadharnumber/records" element={<MedicalRecords />} />
            <Route path="/:aadharnumber/tests" element={<TestRecords />} />
            <Route path="/patients" element={<PatientList />} />
            <Route path="/doctors" element={<DoctorList />} />
            <Route path="/records" element={<MedicalRecords />} />
            <Route path="/tests" element={<TestRecords />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </>
    </Router>
  );
}

export default App;
