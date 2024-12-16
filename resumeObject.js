// Create your own resume
// Set up info
export const myResumeInfoObject = {
  resumeTitle: "Branislav - Resume",
  titleName: "Branislav Jovanović",
  address: "Bulevar JNA 30",
  birthday: "January 1, 1996",
  languages: "Serbian, English",
  educationalTitle: "Bachelor of Science in Computer Science",
  facultyName: "Faculty of Sciences",
  graduationYear: "2020",
  skills: [
    "Proficient in Swift and iOS Development",
    "Experience with TypeScript and JavaScript",
    "Version control using Git",
    "Excellent problem-solving and communication skills",
  ],
  experience: [
    // Add experience object
    {
      companyNameText: "Robert Bosch d.o.o.",
      workPeriodStartText: 2021,
      workPeriodEndText: "Present",
      companyRoleText: "iOS Developer",
      tasksList: [
        "Developed and maintained iOS applications using Swift",
        "Collaborated with cross-functional teams to design scalable solutions",
      ],
    },
    {
      companyNameText: "Robert Bosch d.o.o.",
      workPeriodStartText: 2021,
      workPeriodEndText: "Present",
      companyRoleText: "Frontend Developer",
      tasksList: [
        "Currently learning and developing web applications using HTML, CSS, and TypeScript",
      ],
    },
  ],
  projects: [
    {
      projectName: "My iOS Project",
      projectDescriptionList: [
        "Developed using Swift, SwiftUI and UI",
        "Google Maps SDK",
        "Offline-first approach - Core Data",
        "MVVM Architecture",
      ],
    },
    {
      projectName: "My Java Project",
      projectDescriptionList: [
        "Developed a library management system using Java",
        "Integrated MySQL for database management",
        "Implemented multi-threading for concurrent operations",
      ],
    },
    {
      projectName: "My TypeScript Project",
      projectDescriptionList: [
        "Building my resume web page",
        "Developed using HTML/CSS",
      ],
    },
  ],
  footerCopyrightText: "Branislav Jovanović",
};
