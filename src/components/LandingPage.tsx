import React from 'react';
import { GraduationCap, Users, BookOpen, Award, ArrowRight, School } from 'lucide-react';

interface LandingPageProps {
  onStartRegistration: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartRegistration }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Cpath d='m20 20 20-20H20v20zm0 0v20h20L20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Brightfield Academy</h1>
                <p className="text-sm text-gray-600">Excellence in Education Since 1985</p>
              </div>
            </div>
            <button
              onClick={onStartRegistration}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Apply Now</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Quality Education for
            <span className="text-blue-600"> Every Grade</span>
          </h2>
          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            From Kindergarten through Grade 12, we provide comprehensive education that nurtures 
            academic excellence and character development at every stage of learning.
          </p>
          <p className="text-lg text-blue-600 font-semibold mb-8">
            Supporting students from Elementary through High School
          </p>
          <button
            onClick={onStartRegistration}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Begin Your Journey
          </button>
        </div>
      </section>

      {/* Grade Levels Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">Grade Levels We Support</h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our comprehensive educational program serves students across all grade levels, 
            providing age-appropriate curriculum and learning environments.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-blue-100">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
                <School className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Elementary School</h4>
              <p className="text-center text-gray-600 mb-4">Kindergarten - Grade 5</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Foundation skills in reading, writing, and math</li>
                <li>• Creative arts and physical education</li>
                <li>• Social skills development</li>
                <li>• Science exploration and discovery</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-blue-100">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Middle School</h4>
              <p className="text-center text-gray-600 mb-4">Grades 6 - 8</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Advanced academic subjects</li>
                <li>• Introduction to specialized courses</li>
                <li>• Leadership and teamwork skills</li>
                <li>• Extracurricular activities</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-blue-100">
              <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">High School</h4>
              <p className="text-center text-gray-600 mb-4">Grades 9 - 12</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• College preparatory curriculum</li>
                <li>• Advanced Placement (AP) courses</li>
                <li>• Career guidance and planning</li>
                <li>• University admission support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Brightfield Academy?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-blue-100">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">K-12 Curriculum</h4>
              <p className="text-gray-600">Complete educational pathway from Kindergarten to Grade 12, ensuring seamless academic progression.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-emerald-100">
              <div className="bg-emerald-100 p-3 rounded-lg w-fit mb-4">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Faculty</h4>
              <p className="text-gray-600">Certified teachers specialized in age-appropriate learning methods for each grade level.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-purple-100">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Grade-Level Excellence</h4>
              <p className="text-gray-600">Tailored programs that meet developmental needs from elementary through high school.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-orange-100">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mb-4">
                <GraduationCap className="h-6 w-6 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">College Preparation</h4>
              <p className="text-gray-600">Advanced placement courses and college counseling for high school students.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Join Our K-12 Community?</h3>
          <p className="text-xl text-blue-100 mb-8">
            Take the first step towards your child's bright future. Our admission process welcomes students at any grade level.
          </p>
          <button
            onClick={onStartRegistration}
            className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200"
          >
            Start Application Process
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;