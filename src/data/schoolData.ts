import { FeeStructure, Curriculum, Schedule } from '../types/Student';

export const feeStructures: FeeStructure[] = [
  {
    grade: 'Kindergarten',
    tuitionFee: 15000,
    admissionFee: 5000,
    booksFee: 2000,
    uniformFee: 3000,
    transportFee: 8000,
    total: 33000
  },
  {
    grade: 'Grade 1-5',
    tuitionFee: 18000,
    admissionFee: 5000,
    booksFee: 3000,
    uniformFee: 3500,
    transportFee: 8000,
    total: 37500
  },
  {
    grade: 'Grade 6-8',
    tuitionFee: 22000,
    admissionFee: 6000,
    booksFee: 4000,
    uniformFee: 4000,
    transportFee: 9000,
    total: 45000
  },
  {
    grade: 'Grade 9-10',
    tuitionFee: 26000,
    admissionFee: 7000,
    booksFee: 5000,
    uniformFee: 4500,
    transportFee: 10000,
    total: 52500
  },
  {
    grade: 'Grade 11-12',
    tuitionFee: 30000,
    admissionFee: 8000,
    booksFee: 6000,
    uniformFee: 5000,
    transportFee: 10000,
    total: 59000
  }
];

export const curriculums: Curriculum[] = [
  {
    grade: 'Kindergarten',
    subjects: [
      { name: 'Pre-Math', description: 'Basic number concepts and counting', hoursPerWeek: 5 },
      { name: 'Language Arts', description: 'Letter recognition and phonics', hoursPerWeek: 6 },
      { name: 'Creative Arts', description: 'Drawing, coloring, and crafts', hoursPerWeek: 4 },
      { name: 'Physical Education', description: 'Basic motor skills and games', hoursPerWeek: 3 },
      { name: 'Story Time', description: 'Listening skills and imagination', hoursPerWeek: 2 }
    ],
    totalHours: 20
  },
  {
    grade: 'Grade 1-5',
    subjects: [
      { name: 'Mathematics', description: 'Arithmetic, geometry, and problem solving', hoursPerWeek: 6 },
      { name: 'English', description: 'Reading, writing, and communication', hoursPerWeek: 6 },
      { name: 'Science', description: 'Basic scientific concepts and experiments', hoursPerWeek: 4 },
      { name: 'Social Studies', description: 'History, geography, and civics', hoursPerWeek: 3 },
      { name: 'Physical Education', description: 'Sports and physical fitness', hoursPerWeek: 2 },
      { name: 'Arts & Crafts', description: 'Creative expression and fine motor skills', hoursPerWeek: 2 },
      { name: 'Computer Basics', description: 'Introduction to technology', hoursPerWeek: 2 }
    ],
    totalHours: 25
  },
  {
    grade: 'Grade 6-8',
    subjects: [
      { name: 'Mathematics', description: 'Algebra, geometry, and advanced arithmetic', hoursPerWeek: 6 },
      { name: 'English Literature', description: 'Reading comprehension and creative writing', hoursPerWeek: 5 },
      { name: 'Science', description: 'Physics, chemistry, and biology basics', hoursPerWeek: 6 },
      { name: 'Social Studies', description: 'World history and cultural studies', hoursPerWeek: 4 },
      { name: 'Physical Education', description: 'Team sports and fitness training', hoursPerWeek: 3 },
      { name: 'Art & Music', description: 'Visual arts and musical appreciation', hoursPerWeek: 2 },
      { name: 'Computer Science', description: 'Programming basics and digital literacy', hoursPerWeek: 2 },
      { name: 'Foreign Language', description: 'Spanish or French language learning', hoursPerWeek: 2 }
    ],
    totalHours: 30
  },
  {
    grade: 'Grade 9-10',
    subjects: [
      { name: 'Advanced Mathematics', description: 'Algebra II, trigonometry, and pre-calculus', hoursPerWeek: 6 },
      { name: 'English Literature', description: 'Classic literature and advanced composition', hoursPerWeek: 5 },
      { name: 'Biology', description: 'Life sciences and laboratory work', hoursPerWeek: 4 },
      { name: 'Chemistry', description: 'Chemical principles and experiments', hoursPerWeek: 4 },
      { name: 'Physics', description: 'Mechanical and electrical physics', hoursPerWeek: 4 },
      { name: 'World History', description: 'Global historical perspectives', hoursPerWeek: 3 },
      { name: 'Physical Education', description: 'Advanced fitness and sports', hoursPerWeek: 2 },
      { name: 'Electives', description: 'Art, music, or additional language', hoursPerWeek: 2 }
    ],
    totalHours: 30
  },
  {
    grade: 'Grade 11-12',
    subjects: [
      { name: 'Calculus', description: 'Advanced mathematical concepts', hoursPerWeek: 6 },
      { name: 'Advanced English', description: 'College-level writing and literature', hoursPerWeek: 5 },
      { name: 'Advanced Sciences', description: 'AP Biology, Chemistry, or Physics', hoursPerWeek: 6 },
      { name: 'Economics', description: 'Micro and macroeconomic principles', hoursPerWeek: 3 },
      { name: 'Government', description: 'Political science and civics', hoursPerWeek: 2 },
      { name: 'College Prep', description: 'SAT preparation and college counseling', hoursPerWeek: 2 },
      { name: 'Electives', description: 'Specialized courses in chosen field', hoursPerWeek: 6 }
    ],
    totalHours: 30
  }
];

export const schedules: Schedule[] = [
  {
    grade: 'Kindergarten',
    startTime: '8:30 AM',
    endTime: '12:30 PM',
    lunchBreak: '11:00 AM - 11:30 AM',
    periods: [
      { time: '8:30 - 9:15 AM', duration: '45 min' },
      { time: '9:15 - 10:00 AM', duration: '45 min' },
      { time: '10:00 - 10:15 AM', duration: '15 min (Break)' },
      { time: '10:15 - 11:00 AM', duration: '45 min' },
      { time: '11:00 - 11:30 AM', duration: '30 min (Lunch)' },
      { time: '11:30 AM - 12:30 PM', duration: '60 min' }
    ]
  },
  {
    grade: 'Grade 1-5',
    startTime: '8:00 AM',
    endTime: '2:30 PM',
    lunchBreak: '12:00 PM - 12:45 PM',
    periods: [
      { time: '8:00 - 8:45 AM', duration: '45 min' },
      { time: '8:45 - 9:30 AM', duration: '45 min' },
      { time: '9:30 - 10:15 AM', duration: '45 min' },
      { time: '10:15 - 10:30 AM', duration: '15 min (Break)' },
      { time: '10:30 - 11:15 AM', duration: '45 min' },
      { time: '11:15 AM - 12:00 PM', duration: '45 min' },
      { time: '12:00 - 12:45 PM', duration: '45 min (Lunch)' },
      { time: '12:45 - 1:30 PM', duration: '45 min' },
      { time: '1:30 - 2:30 PM', duration: '60 min' }
    ]
  },
  {
    grade: 'Grade 6-8',
    startTime: '7:45 AM',
    endTime: '3:15 PM',
    lunchBreak: '12:15 PM - 1:00 PM',
    periods: [
      { time: '7:45 - 8:30 AM', duration: '45 min' },
      { time: '8:30 - 9:15 AM', duration: '45 min' },
      { time: '9:15 - 10:00 AM', duration: '45 min' },
      { time: '10:00 - 10:15 AM', duration: '15 min (Break)' },
      { time: '10:15 - 11:00 AM', duration: '45 min' },
      { time: '11:00 - 11:45 AM', duration: '45 min' },
      { time: '11:45 AM - 12:15 PM', duration: '30 min' },
      { time: '12:15 - 1:00 PM', duration: '45 min (Lunch)' },
      { time: '1:00 - 1:45 PM', duration: '45 min' },
      { time: '1:45 - 2:30 PM', duration: '45 min' },
      { time: '2:30 - 3:15 PM', duration: '45 min' }
    ]
  },
  {
    grade: 'Grade 9-10',
    startTime: '7:30 AM',
    endTime: '3:30 PM',
    lunchBreak: '12:00 PM - 12:45 PM',
    periods: [
      { time: '7:30 - 8:15 AM', duration: '45 min' },
      { time: '8:15 - 9:00 AM', duration: '45 min' },
      { time: '9:00 - 9:45 AM', duration: '45 min' },
      { time: '9:45 - 10:00 AM', duration: '15 min (Break)' },
      { time: '10:00 - 10:45 AM', duration: '45 min' },
      { time: '10:45 - 11:30 AM', duration: '45 min' },
      { time: '11:30 AM - 12:00 PM', duration: '30 min' },
      { time: '12:00 - 12:45 PM', duration: '45 min (Lunch)' },
      { time: '12:45 - 1:30 PM', duration: '45 min' },
      { time: '1:30 - 2:15 PM', duration: '45 min' },
      { time: '2:15 - 3:00 PM', duration: '45 min' },
      { time: '3:00 - 3:30 PM', duration: '30 min (Study Hall)' }
    ]
  },
  {
    grade: 'Grade 11-12',
    startTime: '7:30 AM',
    endTime: '3:45 PM',
    lunchBreak: '12:00 PM - 12:45 PM',
    periods: [
      { time: '7:30 - 8:15 AM', duration: '45 min' },
      { time: '8:15 - 9:00 AM', duration: '45 min' },
      { time: '9:00 - 9:45 AM', duration: '45 min' },
      { time: '9:45 - 10:00 AM', duration: '15 min (Break)' },
      { time: '10:00 - 10:45 AM', duration: '45 min' },
      { time: '10:45 - 11:30 AM', duration: '45 min' },
      { time: '11:30 AM - 12:00 PM', duration: '30 min' },
      { time: '12:00 - 12:45 PM', duration: '45 min (Lunch)' },
      { time: '12:45 - 1:30 PM', duration: '45 min' },
      { time: '1:30 - 2:15 PM', duration: '45 min' },
      { time: '2:15 - 3:00 PM', duration: '45 min' },
      { time: '3:00 - 3:45 PM', duration: '45 min (Study Hall/AP Prep)' }
    ]
  }
];