import React from 'react';
import { GraduationCap, Users, BookOpen, Award, ArrowRight } from 'lucide-react';

interface LandingPageProps {
  onStartRegistration: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartRegistration }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Shaping Tomorrow's
            <span className="text-blue-600"> Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of learners where academic excellence meets character development. 
            We provide a nurturing environment that helps students reach their full potential.
          </p>
          <button
            onClick={onStartRegistration}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Begin Your Journey
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Brightfield Academy?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Curriculum</h4>
              <p className="text-gray-600">From Kindergarten to Grade 12, we offer a well-rounded education that prepares students for success.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-emerald-100 p-3 rounded-lg w-fit mb-4">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Faculty</h4>
              <p className="text-gray-600">Our qualified teachers are dedicated to providing personalized attention to every student.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Award-Winning Programs</h4>
              <p className="text-gray-600">Recognized for excellence in academics, sports, and extracurricular activities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mb-4">
                <GraduationCap className="h-6 w-6 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">College Preparation</h4>
              <p className="text-gray-600">95% of our graduates gain admission to their preferred colleges and universities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Join Our Community?</h3>
          <p className="text-xl text-blue-100 mb-8">
            Take the first step towards your child's bright future. Our admission process is simple and welcoming.
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