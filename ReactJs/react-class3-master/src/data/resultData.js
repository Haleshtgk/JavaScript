const students = [
    {
      name: "Amit Sharma",
      rollNumber: "S101",
      department: "Computer Science",
      year: "3rd",
      marks: {
        Math: { midterm: 42, final: 43, total: 85 },
        Science: { midterm: 37, final: 41, total: 78 },
        English: { midterm: 45, final: 43, total: 88 },
        History: { midterm: 38, final: 38, total: 76 },
        Computer: { midterm: 47, final: 43, total: 90 }
      },
      assessments: [
        { type: "Quiz", subject: "Math", score: 18, maxScore: 20 },
        { type: "Assignment", subject: "Computer", score: 20, maxScore: 20 },
        { type: "Presentation", subject: "History", score: 8, maxScore: 10 }
      ],
      CGPA: 8.5,
      attendance: "92%",
      grade: "A",
      status: "Pass"
    },
    {
      name: "Priya Verma",
      rollNumber: "S102",
      department: "Electronics",
      year: "2nd",
      marks: {
        Math: { midterm: 35, final: 37, total: 72 },
        Science: { midterm: 40, final: 40, total: 80 },
        English: { midterm: 36, final: 39, total: 75 },
        History: { midterm: 34, final: 36, total: 70 },
        Computer: { midterm: 42, final: 43, total: 85 }
      },
      assessments: [
        { type: "Quiz", subject: "Science", score: 17, maxScore: 20 },
        { type: "Assignment", subject: "English", score: 18, maxScore: 20 },
        { type: "Presentation", subject: "Math", score: 7, maxScore: 10 }
      ],
      CGPA: 7.8,
      attendance: "87%",
      grade: "B",
      status: "Pass"
    },
    {
      name: "Rahul Kumar",
      rollNumber: "S103",
      department: "Mechanical",
      year: "3rd",
      marks: {
        Math: { midterm: 28, final: 32, total: 60 },
        Science: { midterm: 30, final: 35, total: 65 },
        English: { midterm: 27, final: 31, total: 58 },
        History: { midterm: 25, final: 30, total: 55 },
        Computer: { midterm: 33, final: 37, total: 70 }
      },
      assessments: [
        { type: "Quiz", subject: "History", score: 12, maxScore: 20 },
        { type: "Assignment", subject: "Science", score: 15, maxScore: 20 },
        { type: "Presentation", subject: "English", score: 6, maxScore: 10 }
      ],
      CGPA: 6.2,
      attendance: "75%",
      grade: "C",
      status: "Pass"
    },
    {
      name: "Sneha Gupta",
      rollNumber: "S104",
      department: "Biotechnology",
      year: "4th",
      marks: {
        Math: { midterm: 48, final: 47, total: 95 },
        Science: { midterm: 49, final: 49, total: 98 },
        English: { midterm: 48, final: 48, total: 96 },
        History: { midterm: 45, final: 48, total: 93 },
        Computer: { midterm: 50, final: 49, total: 99 }
      },
      assessments: [
        { type: "Quiz", subject: "Science", score: 19, maxScore: 20 },
        { type: "Assignment", subject: "Math", score: 20, maxScore: 20 },
        { type: "Presentation", subject: "Computer", score: 9, maxScore: 10 }
      ],
      CGPA: 9.8,
      attendance: "98%",
      grade: "A+",
      status: "Pass"
    },
    {
      name: "Rohan Singh",
      rollNumber: "S105",
      department: "Civil Engineering",
      year: "3rd",
      marks: {
        Math: { midterm: 20, final: 25, total: 45 },
        Science: { midterm: 22, final: 28, total: 50 },
        English: { midterm: 23, final: 25, total: 48 },
        History: { midterm: 25, final: 27, total: 52 },
        Computer: { midterm: 28, final: 32, total: 60 }
      },
      assessments: [
        { type: "Quiz", subject: "English", score: 10, maxScore: 20 },
        { type: "Assignment", subject: "History", score: 13, maxScore: 20 },
        { type: "Presentation", subject: "Science", score: 5, maxScore: 10 }
      ],
      CGPA: 5.4,
      attendance: "68%",
      grade: "D",
      status: "Pass"
    }
  ];
  
  console.log(students);
  