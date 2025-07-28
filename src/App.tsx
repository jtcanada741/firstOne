import React, { useState } from 'react';
import { Student } from './types/Student';
import LandingPage from './components/LandingPage';
import RegistrationForm from './components/RegistrationForm';
import StudentDashboard from './components/StudentDashboard';

type AppState = 'landing' | 'registration' | 'dashboard';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('landing');
  const [registeredStudent, setRegisteredStudent] = useState<Student | null>(null);

  const handleStartRegistration = () => {
    setCurrentState('registration');
  };

  const handleRegistrationComplete = (student: Student) => {
    setRegisteredStudent(student);
    setCurrentState('dashboard');
  };

  const handleBackToHome = () => {
    setCurrentState('landing');
    setRegisteredStudent(null);
  };

  const handleBackToHomeFromRegistration = () => {
    setCurrentState('landing');
  };

  return (
    <div className="App">
      {currentState === 'landing' && (
        <LandingPage onStartRegistration={handleStartRegistration} />
      )}
      
      {currentState === 'registration' && (
        <RegistrationForm 
          onSubmit={handleRegistrationComplete}
          onBack={handleBackToHomeFromRegistration}
        />
      )}
      
      {currentState === 'dashboard' && registeredStudent && (
        <StudentDashboard 
          student={registeredStudent}
          onBack={handleBackToHome}
        />
      )}
    </div>
  );
}

export default App;