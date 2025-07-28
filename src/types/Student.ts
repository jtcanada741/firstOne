export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  grade: string;
  guardianName: string;
  guardianPhone: string;
  address: string;
  previousSchool?: string;
  medicalConditions?: string;
  registrationDate: string;
}

export interface FeeStructure {
  grade: string;
  tuitionFee: number;
  admissionFee: number;
  booksFee: number;
  uniformFee: number;
  transportFee: number;
  total: number;
}

export interface Subject {
  name: string;
  description: string;
  hoursPerWeek: number;
}

export interface Curriculum {
  grade: string;
  subjects: Subject[];
  totalHours: number;
}

export interface Schedule {
  grade: string;
  startTime: string;
  endTime: string;
  lunchBreak: string;
  periods: {
    time: string;
    duration: string;
  }[];
}