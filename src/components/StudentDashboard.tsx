import React, { useState } from 'react';
import { Student } from '../types/Student';
import { feeStructures, curriculums, schedules } from '../data/schoolData';
import { 
  User, 
  DollarSign, 
  BookOpen, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Calendar
} from 'lucide-react';

interface StudentDashboardProps {
  student: Student;
  onBack: () => void;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ student, onBack }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'fees' | 'curriculum' | 'schedule'>('overview');

  const studentFees = feeStructures.find(f => f.grade === student.grade);
  const studentCurriculum = curriculums.find(c => c.grade === student.grade);
  const studentSchedule = schedules.find(s => s.grade === student.grade);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const TabButton = ({ 
    id, 
    label, 
    icon, 
    isActive 
  }: { 
    id: 'overview' | 'fees' | 'curriculum' | 'schedule';
    label: string;
    icon: React.ReactNode;
    isActive: boolean;
  }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
        isActive 
          ? 'bg-blue-600 text-white' 
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </button>
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Registration Complete</h1>
                <p className="text-sm text-gray-600">Welcome to Brightfield Academy!</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <GraduationCap className="h-16 w-16 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl font-bold mb-2">Welcome, {student.firstName}!</h2>
            <p className="text-xl opacity-90">Your journey at Brightfield Academy begins now</p>
            <div className="mt-4 inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
              <Calendar className="h-4 w-4" />
              <span>Registered on {formatDate(student.registrationDate)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap gap-2 mb-8">
          <TabButton
            id="overview"
            label="Overview"
            icon={<User className="h-4 w-4" />}
            isActive={activeTab === 'overview'}
          />
          <TabButton
            id="fees"
            label="Fee Structure"
            icon={<DollarSign className="h-4 w-4" />}
            isActive={activeTab === 'fees'}
          />
          <TabButton
            id="curriculum"
            label="Curriculum"
            icon={<BookOpen className="h-4 w-4" />}
            isActive={activeTab === 'curriculum'}
          />
          <TabButton
            id="schedule"
            label="Schedule"
            icon={<Clock className="h-4 w-4" />}
            isActive={activeTab === 'schedule'}
          />
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Student Information */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <User className="h-5 w-5 text-blue-600" />
                  <span>Student Information</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Full Name:</span>
                    <span className="font-medium">{student.firstName} {student.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Grade Level:</span>
                    <span className="font-medium">{student.grade}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date of Birth:</span>
                    <span className="font-medium">{formatDate(student.dateOfBirth)}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-gray-600">Email:</span>
                    <div className="flex items-center space-x-1">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="font-medium">{student.email}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-gray-600">Phone:</span>
                    <div className="flex items-center space-x-1">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="font-medium">{student.phone}</span>
                    </div>
                  </div>
                  {student.previousSchool && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Previous School:</span>
                      <span className="font-medium">{student.previousSchool}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Guardian Information */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <User className="h-5 w-5 text-emerald-600" />
                  <span>Guardian Information</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Guardian Name:</span>
                    <span className="font-medium">{student.guardianName}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-gray-600">Guardian Phone:</span>
                    <div className="flex items-center space-x-1">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="font-medium">{student.guardianPhone}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-gray-600">Address:</span>
                    <div className="flex items-start space-x-1 max-w-xs">
                      <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="font-medium text-right">{student.address}</span>
                    </div>
                  </div>
                  {student.medicalConditions && (
                    <div className="pt-3 border-t border-gray-200">
                      <span className="text-gray-600 block mb-2">Medical Conditions:</span>
                      <p className="font-medium text-sm bg-red-50 p-3 rounded-lg border border-red-200">
                        {student.medicalConditions}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'fees' && studentFees && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
                <DollarSign className="h-6 w-6 text-green-600" />
                <span>Fee Structure for {student.grade}</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-700">Tuition Fee:</span>
                    <span className="font-semibold">{formatCurrency(studentFees.tuitionFee)}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-700">Admission Fee:</span>
                    <span className="font-semibold">{formatCurrency(studentFees.admissionFee)}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-700">Books & Materials:</span>
                    <span className="font-semibold">{formatCurrency(studentFees.booksFee)}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-700">Uniform Fee:</span>
                    <span className="font-semibold">{formatCurrency(studentFees.uniformFee)}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-700">Transportation (Optional):</span>
                    <span className="font-semibold">{formatCurrency(studentFees.transportFee)}</span>
                  </div>
                  <div className="flex justify-between py-4 bg-blue-50 px-4 rounded-lg">
                    <span className="text-lg font-semibold text-blue-900">Total Annual Fee:</span>
                    <span className="text-xl font-bold text-blue-900">{formatCurrency(studentFees.total)}</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">Payment Information</h4>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>• Payment can be made in 2 or 4 installments</p>
                    <p>• 5% discount for full annual payment</p>
                    <p>• Transportation fee is optional and can be added later</p>
                    <p>• Late payment penalty: 2% per month</p>
                    <p>• Scholarships available based on merit and need</p>
                  </div>
                  <div className="mt-6">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                      Proceed to Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'curriculum' && studentCurriculum && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-purple-600" />
                <span>Curriculum for {student.grade}</span>
              </h3>
              <div className="mb-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-900 font-medium">
                    Total Weekly Hours: {studentCurriculum.totalHours} hours
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                {studentCurriculum.subjects.map((subject, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{subject.name}</h4>
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded">
                        {subject.hoursPerWeek} hrs/week
                      </span>
                    </div>
                    <p className="text-gray-700">{subject.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'schedule' && studentSchedule && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
                <Clock className="h-6 w-6 text-orange-600" />
                <span>Daily Schedule for {student.grade}</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-orange-50 p-4 rounded-lg mb-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-orange-900">School Hours:</span>
                        <span className="text-orange-800">{studentSchedule.startTime} - {studentSchedule.endTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-orange-900">Lunch Break:</span>
                        <span className="text-orange-800">{studentSchedule.lunchBreak}</span>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Daily Periods</h4>
                  <div className="space-y-2">
                    {studentSchedule.periods.map((period, index) => (
                      <div key={index} className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded">
                        <span className="text-gray-700">{period.time}</span>
                        <span className="text-sm font-medium text-gray-600">{period.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">Important Notes</h4>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>• Students should arrive 15 minutes before school starts</p>
                    <p>• Late arrivals must report to the office</p>
                    <p>• Lunch can be brought from home or purchased from cafeteria</p>
                    <p>• After school activities available until 5:00 PM</p>
                    <p>• School buses depart 15 minutes after school ends</p>
                    <p>• Parent pickup should be arranged by dismissal time</p>
                  </div>
                  <div className="mt-6 p-3 bg-blue-50 rounded border border-blue-200">
                    <p className="text-blue-800 text-sm font-medium">
                      📅 School starts on September 5th, 2024. Orientation day is September 3rd.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;