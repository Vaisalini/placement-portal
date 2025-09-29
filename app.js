// === MOCK DATA === //
const mockData = {
  users: {
    students: [
      {
        id: "s1",
        name: "Arjun Sharma",
        email: "arjun@university.edu",
        password: "student123",
        department: "Computer Science",
        year: 3,
        cgpa: 8.5,
        profileCompleteness: 85,
        jobFitScore: 92,
        skills: ["React", "Python", "Machine Learning", "Data Structures"],
        resumeUploaded: true,
        mentorId: "m1",
        phone: "9876543210",
        address: "123 Student Hostel, University Campus",
        projects: ["E-commerce Website", "ML Prediction Model"],
        certifications: ["AWS Cloud Practitioner", "Google Analytics"]
      },
      {
        id: "s2",
        name: "Priya Patel",
        email: "priya@university.edu",
        password: "student123",
        department: "Electronics",
        year: 4,
        cgpa: 9.1,
        profileCompleteness: 78,
        jobFitScore: 88,
        skills: ["VLSI", "Embedded Systems", "C++", "MATLAB"],
        resumeUploaded: false,
        mentorId: "m2",
        phone: "9876543211",
        address: "456 Girls Hostel, University Campus",
        projects: ["IoT Home Automation", "FPGA Design"],
        certifications: ["Embedded Systems", "PCB Design"]
      },
      {
        id: "s3",
        name: "Rahul Singh",
        email: "rahul@university.edu",
        password: "student123",
        department: "Computer Science",
        year: 3,
        cgpa: 7.8,
        profileCompleteness: 60,
        jobFitScore: 75,
        skills: ["Java", "Spring Boot", "SQL", "Git"],
        resumeUploaded: true,
        mentorId: "m1",
        phone: "9876543212",
        address: "789 Boys Hostel, University Campus",
        projects: ["Library Management System", "Chat Application"],
        certifications: ["Oracle Java"]
      }
    ],
    mentors: [
      {
        id: "m1",
        name: "Dr. Rajesh Kumar",
        email: "rajesh@university.edu",
        password: "mentor123",
        department: "Computer Science",
        mentees: ["s1", "s3"],
        phone: "9876543200",
        experience: "15 years",
        specialization: "Software Engineering, AI/ML"
      },
      {
        id: "m2",
        name: "Prof. Sunita Gupta",
        email: "sunita@university.edu",
        password: "mentor123",
        department: "Electronics",
        mentees: ["s2"],
        phone: "9876543201",
        experience: "12 years",
        specialization: "VLSI Design, Embedded Systems"
      }
    ],
    placement: [
      {
        id: "p1",
        name: "Mr. Vikram Singh",
        email: "vikram@university.edu",
        password: "placement123",
        role: "Senior Placement Officer",
        phone: "9876543202",
        experience: "8 years"
      }
    ],
    employers: [
      {
        id: "e1",
        name: "TechCorp Solutions",
        email: "hr@techcorp.com",
        password: "employer123",
        contactPerson: "Sarah Johnson",
        industry: "Technology",
        location: "Bangalore",
        phone: "9876543203",
        website: "www.techcorp.com",
        employeeCount: "500-1000"
      },
      {
        id: "e2",
        name: "DataFlow Analytics",
        email: "careers@dataflow.com",
        password: "employer123",
        contactPerson: "Mike Chen",
        industry: "Data Analytics",
        location: "Pune",
        phone: "9876543204",
        website: "www.dataflow.com",
        employeeCount: "100-500"
      },
      {
        id: "e3",
        name: "ChipTech Industries",
        email: "recruitment@chiptech.com",
        password: "employer123",
        contactPerson: "Lisa Wang",
        industry: "Semiconductor",
        location: "Chennai",
        phone: "9876543205",
        website: "www.chiptech.com",
        employeeCount: "1000+"
      }
    ],
    admins: [
      {
        id: "a1",
        name: "System Administrator",
        email: "admin@university.edu",
        password: "admin123",
        role: "Super Admin",
        phone: "9876543206"
      }
    ]
  },

  internships: [
    {
      id: "i1",
      title: "Full Stack Developer Intern",
      company: "TechCorp Solutions",
      employerId: "e1",
      department: "Computer Science",
      stipend: 25000,
      duration: "6 months",
      location: "Bangalore",
      skills: ["React", "Node.js", "MongoDB", "JavaScript"],
      description: "Work on cutting-edge web applications using modern technologies",
      requirements: "Strong programming skills, knowledge of web technologies, good communication skills",
      placementChance: "High",
      conversionRate: 85,
      posted: "2025-09-20",
      deadline: "2025-10-15",
      status: "active",
      applicants: 15,
      shortlisted: 5,
      interviewed: 2,
      selected: 0
    },
    {
      id: "i2",
      title: "Data Science Intern",
      company: "DataFlow Analytics",
      employerId: "e2",
      department: "Computer Science",
      stipend: 30000,
      duration: "4 months",
      location: "Pune",
      skills: ["Python", "Machine Learning", "SQL", "Statistics"],
      description: "Analyze large datasets and build predictive models for business insights",
      requirements: "Strong analytical skills, Python programming, statistical knowledge",
      placementChance: "Medium",
      conversionRate: 70,
      posted: "2025-09-25",
      deadline: "2025-10-20",
      status: "active",
      applicants: 12,
      shortlisted: 4,
      interviewed: 1,
      selected: 0
    },
    {
      id: "i3",
      title: "VLSI Design Intern",
      company: "ChipTech Industries",
      employerId: "e3",
      department: "Electronics",
      stipend: 22000,
      duration: "5 months",
      location: "Chennai",
      skills: ["VLSI", "Verilog", "ASIC Design", "Circuit Design"],
      description: "Design and verify digital circuits for semiconductor products",
      requirements: "Knowledge of digital design, Verilog, circuit analysis",
      placementChance: "High",
      conversionRate: 80,
      posted: "2025-09-18",
      deadline: "2025-10-10",
      status: "active",
      applicants: 8,
      shortlisted: 3,
      interviewed: 1,
      selected: 1
    },
    {
      id: "i4",
      title: "Mobile App Developer Intern",
      company: "TechCorp Solutions",
      employerId: "e1",
      department: "Computer Science",
      stipend: 23000,
      duration: "4 months",
      location: "Bangalore",
      skills: ["React Native", "JavaScript", "Mobile Development", "API Integration"],
      description: "Develop cross-platform mobile applications",
      requirements: "Mobile development experience, React Native knowledge",
      placementChance: "Medium",
      conversionRate: 75,
      posted: "2025-09-22",
      deadline: "2025-10-25",
      status: "active",
      applicants: 10,
      shortlisted: 3,
      interviewed: 0,
      selected: 0
    }
  ],

  applications: [
    {
      id: "app1",
      studentId: "s1",
      internshipId: "i1",
      status: "Interview",
      appliedDate: "2025-09-22",
      mentorApproval: "approved",
      mentorRemarks: "Strong candidate with excellent technical skills",
      timeline: [
        { stage: "Applied", date: "2025-09-22", status: "completed" },
        { stage: "Mentor Approval", date: "2025-09-23", status: "completed", remarks: "Strong candidate" },
        { stage: "Shortlisted", date: "2025-09-25", status: "completed" },
        { stage: "Interview", date: "2025-09-30", status: "pending" },
        { stage: "Offer", date: null, status: "pending" }
      ]
    },
    {
      id: "app2",
      studentId: "s2",
      internshipId: "i3",
      status: "Mentor Approval",
      appliedDate: "2025-09-26",
      mentorApproval: "pending",
      mentorRemarks: "",
      timeline: [
        { stage: "Applied", date: "2025-09-26", status: "completed" },
        { stage: "Mentor Approval", date: null, status: "pending" },
        { stage: "Shortlisted", date: null, status: "pending" },
        { stage: "Interview", date: null, status: "pending" },
        { stage: "Offer", date: null, status: "pending" }
      ]
    },
    {
      id: "app3",
      studentId: "s3",
      internshipId: "i2",
      status: "Applied",
      appliedDate: "2025-09-27",
      mentorApproval: "pending",
      mentorRemarks: "",
      timeline: [
        { stage: "Applied", date: "2025-09-27", status: "completed" },
        { stage: "Mentor Approval", date: null, status: "pending" },
        { stage: "Shortlisted", date: null, status: "pending" },
        { stage: "Interview", date: null, status: "pending" },
        { stage: "Offer", date: null, status: "pending" }
      ]
    }
  ],

  interviews: [
    {
      id: "int1",
      applicationId: "app1",
      studentId: "s1",
      internshipId: "i1",
      employerId: "e1",
      scheduledDate: "2025-09-30",
      scheduledTime: "10:00 AM",
      interviewType: "Technical",
      meetingLink: "https://meet.google.com/abc-defg-hij",
      status: "scheduled",
      interviewers: ["Sarah Johnson", "Tech Lead"],
      duration: "60 minutes"
    },
    {
      id: "int2",
      applicationId: "app2",
      studentId: "s2",
      internshipId: "i3",
      employerId: "e3",
      scheduledDate: "2025-10-02",
      scheduledTime: "2:00 PM",
      interviewType: "Technical + HR",
      meetingLink: "https://zoom.us/j/123456789",
      status: "proposed",
      interviewers: ["Lisa Wang", "HR Manager"],
      duration: "90 minutes"
    }
  ],

  certificates: [
    {
      id: "cert1",
      studentId: "s1",
      internshipId: "i1",
      companyName: "Previous Tech Company",
      duration: "3 months",
      completionDate: "2025-08-15",
      feedback: "Excellent performance in web development tasks. Showed great learning ability and teamwork.",
      skills: ["React", "JavaScript", "Problem Solving", "Team Collaboration"],
      qrCode: "QR_PLACEHOLDER_12345",
      rating: 4.5,
      mentorFeedback: "Outstanding intern with strong technical and soft skills"
    }
  ],

  analytics: {
    placementStats: {
      totalStudents: 150,
      studentsPlaced: 98,
      placementRate: 65.3,
      averageStipend: 26000,
      topCompanies: ["TechCorp", "DataFlow", "ChipTech"],
      departmentWise: [
        { department: "Computer Science", applied: 45, placed: 32, rate: 71.1 },
        { department: "Electronics", applied: 38, placed: 25, rate: 65.8 },
        { department: "Mechanical", applied: 42, placed: 28, rate: 66.7 },
        { department: "Civil", applied: 25, placed: 13, rate: 52.0 }
      ],
      monthlyTrends: [
        { month: "Jan", applications: 20, placements: 15 },
        { month: "Feb", applications: 35, placements: 28 },
        { month: "Mar", applications: 45, placements: 32 },
        { month: "Apr", applications: 30, placements: 23 }
      ],
      stipendRanges: [
        { range: "0-15k", count: 25 },
        { range: "15-25k", count: 40 },
        { range: "25-35k", count: 25 },
        { range: "35k+", count: 8 }
      ]
    }
  },

  auditLogs: [
    {
      id: "log1",
      timestamp: "2025-09-28T10:30:00Z",
      userId: "s1",
      userRole: "student",
      action: "Application Submitted",
      details: "Applied for Full Stack Developer Intern at TechCorp",
      ipAddress: "192.168.1.100",
      module: "Applications"
    },
    {
      id: "log2",
      timestamp: "2025-09-28T11:15:00Z",
      userId: "m1",
      userRole: "mentor",
      action: "Application Approved",
      details: "Approved application for student Arjun Sharma",
      ipAddress: "192.168.1.101",
      module: "Approvals"
    },
    {
      id: "log3",
      timestamp: "2025-09-28T14:20:00Z",
      userId: "p1",
      userRole: "placement",
      action: "Internship Posted",
      details: "Posted new internship: Mobile App Developer Intern",
      ipAddress: "192.168.1.102",
      module: "Internships"
    },
    {
      id: "log4",
      timestamp: "2025-09-28T16:45:00Z",
      userId: "e1",
      userRole: "employer",
      action: "Student Shortlisted",
      details: "Shortlisted student for Full Stack Developer position",
      ipAddress: "192.168.1.103",
      module: "Recruitment"
    }
  ],

  systemMonitoring: {
    uptime: 99.8,
    responseTime: 250,
    errorRate: 0.02,
    activeUsers: 45,
    databaseHealth: "Good",
    lastBackup: "2025-09-28T02:00:00Z",
    storageUsage: 78,
    memoryUsage: 65,
    cpuUsage: 32
  },

  crisisManagement: [
    {
      id: "crisis1",
      type: "Incomplete Profile",
      studentId: "s2",
      description: "Student profile missing resume upload",
      priority: "Medium",
      status: "Open",
      createdDate: "2025-09-26",
      dueDate: "2025-10-05"
    },
    {
      id: "crisis2",
      type: "Employer Non-Response",
      employerId: "e2",
      description: "No response for interview scheduling for 3 days",
      priority: "High",
      status: "Escalated",
      createdDate: "2025-09-25",
      dueDate: "2025-09-30"
    }
  ],

  offers: [
    {
      id: "offer1",
      studentId: "s1",
      internshipId: "i1",
      employerId: "e1",
      stipend: 25000,
      startDate: "2025-11-01",
      duration: "6 months",
      status: "Pending",
      terms: "Full-time internship with potential for conversion",
      sentDate: "2025-09-28",
      expiryDate: "2025-10-05"
    }
  ]
};

// =========== GLOBAL STATE ========= //
let currentUser = null;
let currentRole = null;
let currentPage = "landingPage";
const chartStore = {};

// === INITIALIZATION === //
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded, initializing application...");
  showLanding();
  setupEventListeners();
});

// Make functions globally accessible
window.showLogin = showLogin;
window.handleLogin = handleLogin;
window.logout = logout;
window.showLanding = showLanding;
window.navigateToPage = navigateToPage;
window.switchTab = switchTab;
window.saveProfile = saveProfile;
window.removeResume = removeResume;
window.removeSkill = removeSkill;
window.removeCert = removeCert;
window.applyForInternship = applyForInternship;
window.prevMonth = prevMonth;
window.nextMonth = nextMonth;
window.viewInterviewDetails = viewInterviewDetails;
window.downloadCertificate = downloadCertificate;
window.approveApplication = approveApplication;
window.rejectApplication = rejectApplication;
window.resolveCrisis = resolveCrisis;
window.exportToPDF = exportToPDF;
window.exportToExcel = exportToExcel;
window.exportUsers = exportUsers;
window.exportLogs = exportLogs;
window.saveDraft = saveDraft;
window.saveFeedbackDraft = saveFeedbackDraft;
window.submitFeedback = submitFeedback;
window.initiateSemesterReset = initiateSemesterReset;
window.switchAssessmentTab = switchAssessmentTab;
window.switchOfferTab = switchOfferTab;
window.openCreateUserModal = openCreateUserModal;
window.closeModal = closeModal;

// === AUTHENTICATION === //
function showLogin(role) {
  console.log("showLogin called with role:", role);
  currentRole = role;
  
  // Clear form
  const emailEl = document.getElementById("email");
  const passwordEl = document.getElementById("password");
  
  if (emailEl) emailEl.value = "";
  if (passwordEl) passwordEl.value = "";
  
  // Update title
  const titleEl = document.getElementById("loginTitle");
  if (titleEl) {
    titleEl.textContent = `${capitalizeFirst(role)} Login`;
  }
  
  // Show login page
  showPage("loginPage");
}

function handleLogin(event) {
  event.preventDefault();
  console.log("handleLogin called for role:", currentRole);
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  console.log("Login attempt:", email, "password length:", password.length);
  
  // Get user array based on role
  let userArray;
  if (currentRole === "student") userArray = mockData.users.students;
  else if (currentRole === "mentor") userArray = mockData.users.mentors;  
  else if (currentRole === "placement") userArray = mockData.users.placement;
  else if (currentRole === "employer") userArray = mockData.users.employers;
  else if (currentRole === "admin") userArray = mockData.users.admins;
  
  console.log("User array:", userArray);
  
  const user = userArray ? userArray.find(u => u.email === email && u.password === password) : null;
  
  if (user) {
    console.log("Login successful for user:", user.name);
    currentUser = user;
    showDashboard();
  } else {
    console.log("Login failed");
    alert("Invalid credentials. Please check your email and password.");
  }
}

function logout() {
  console.log("Logout called");
  currentUser = null;
  currentRole = null;
  
  document.getElementById("navUser").style.display = "none";
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("mainContent").classList.remove("with-sidebar");
  
  showLanding();
}

// === NAVIGATION === //
function showPage(pageId) {
  console.log("showPage called:", pageId);
  
  // Hide all pages
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });
  
  // Show selected page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add("active");
    currentPage = pageId;
    console.log("Page shown:", pageId);
  } else {
    console.error("Page not found:", pageId);
  }
}

function showLanding() {
  showPage("landingPage");
  document.getElementById("navUser").style.display = "none";
  document.getElementById("sidebar").style.display = "none"; 
  document.getElementById("mainContent").classList.remove("with-sidebar");
}

function showDashboard() {
  console.log("showDashboard called for role:", currentRole);
  
  document.getElementById("navUser").style.display = "flex";
  document.getElementById("userName").textContent = currentUser.name;
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("mainContent").classList.add("with-sidebar");
  
  setupSidebar();
  
  // Navigate to appropriate dashboard
  if (currentRole === "student") {
    navigateToPage("studentDashboard");
  } else if (currentRole === "mentor") {
    navigateToPage("mentorDashboard");
  } else if (currentRole === "placement") {
    navigateToPage("placementDashboard");
  } else if (currentRole === "employer") {
    navigateToPage("employerDashboard");
  } else if (currentRole === "admin") {
    navigateToPage("adminDashboard");
  }
}

function setupSidebar() {
  const sidebarNav = document.getElementById("sidebarNav");
  let menuItems = [];
  
  if (currentRole === "student") {
    menuItems = [
      { label: "Dashboard", page: "studentDashboard", icon: "📊" },
      { label: "Profile Setup", page: "studentProfile", icon: "👤" },
      { label: "AI Resume Checker", page: "aiResumeChecker", icon: "🤖" },
      { label: "Internship Board", page: "internshipBoard", icon: "💼" },
      { label: "Applications", page: "applicationTracking", icon: "📋" },
      { label: "Interview Calendar", page: "interviewCalendar", icon: "📅" },
      { label: "Certificates", page: "certificates", icon: "📜" }
    ];
  } else if (currentRole === "mentor") {
    menuItems = [
      { label: "Dashboard", page: "mentorDashboard", icon: "📊" },
      { label: "Approvals", page: "approvalScreen", icon: "✅" },
      { label: "Feedback", page: "feedbackEntry", icon: "📝" }
    ];
  } else if (currentRole === "placement") {
    menuItems = [
      { label: "Dashboard", page: "placementDashboard", icon: "📊" },
      { label: "Post Opportunity", page: "postOpportunity", icon: "➕" },
      { label: "Analytics", page: "analytics", icon: "📈" },
      { label: "Crisis Management", page: "crisisManagement", icon: "🚨" },
      { label: "Matching Overview", page: "matchingOverview", icon: "🔍" }
    ];
  } else if (currentRole === "employer") {
    menuItems = [
      { label: "Dashboard", page: "employerDashboard", icon: "📊" },
      { label: "Shortlisting", page: "shortlisting", icon: "📑" },
      { label: "Interview Scheduling", page: "interviewScheduling", icon: "📅" },
      { label: "Assessment", page: "assessmentModule", icon: "🧩" },
      { label: "Offers & Feedback", page: "offersAndFeedback", icon: "💌" }
    ];
  } else if (currentRole === "admin") {
    menuItems = [
      { label: "Dashboard", page: "adminDashboard", icon: "📊" },
      { label: "User Management", page: "userManagement", icon: "👥" },
      { label: "Audit Logs", page: "auditLogs", icon: "📜" },
      { label: "Semester Reset", page: "semesterReset", icon: "♻️" },
      { label: "System Monitoring", page: "systemMonitoring", icon: "🖥️" }
    ];
  }
  
  const menuHTML = `
    <ul>
      ${menuItems.map(item => `
        <li>
          <a href="#" onclick="navigateToPage('${item.page}')" class="${currentPage === item.page ? 'active' : ''}">
            <span class="nav-icon">${item.icon}</span>
            ${item.label}
          </a>
        </li>
      `).join('')}
    </ul>
  `;
  
  sidebarNav.innerHTML = menuHTML;
}

function navigateToPage(pageId) {
  console.log("navigateToPage called:", pageId);
  showPage(pageId);
  setupSidebar(); // Update sidebar active states
  
  // Load page-specific content
  const loaders = {
    studentDashboard: loadStudentDashboard,
    studentProfile: loadStudentProfile,
    internshipBoard: loadInternshipBoard,
    applicationTracking: loadApplicationTracking,
    interviewCalendar: loadInterviewCalendar,
    certificates: loadCertificates,
    mentorDashboard: loadMentorDashboard,
    approvalScreen: loadApprovalScreen,
    placementDashboard: loadPlacementDashboard,
    analytics: loadAnalytics,
    crisisManagement: loadCrisisManagement,
    matchingOverview: loadMatchingOverview,
    employerDashboard: loadEmployerDashboard,
    adminDashboard: loadAdminDashboard,
    userManagement: loadUserManagement,
    auditLogs: loadAuditLogs,
    systemMonitoring: loadSystemMonitoring
  };
  
  if (loaders[pageId]) {
    loaders[pageId]();
  }
}

// === STUDENT FUNCTIONS === //
function loadStudentDashboard() {
  const student = currentUser;
  if (!student) return;
  
  console.log("Loading student dashboard for:", student.name);
  
  // Update name
  const studentNameEl = document.getElementById("studentName");
  if (studentNameEl) studentNameEl.textContent = student.name;
  
  // Update profile completeness
  const completenessEl = document.getElementById("profileCompleteness");
  if (completenessEl) completenessEl.textContent = `${student.profileCompleteness}%`;
  
  const progressEl = document.getElementById("profileProgress");
  if (progressEl) {
    progressEl.style.background = `conic-gradient(var(--color-primary) ${student.profileCompleteness * 3.6}deg, var(--color-secondary) 0deg)`;
  }
  
  // Update job fit score
  const jobFitEl = document.getElementById("jobFitScore");
  if (jobFitEl) jobFitEl.textContent = student.jobFitScore;
  
  const fitScoreBarEl = document.getElementById("fitScoreBar");
  if (fitScoreBarEl) fitScoreBarEl.style.width = `${student.jobFitScore}%`;
  
  // Update application stats
  const totalApps = mockData.applications.filter(a => a.studentId === student.id).length;
  const totalAppsEl = document.getElementById("totalApplications");
  if (totalAppsEl) totalAppsEl.textContent = totalApps;
  
  const interviews = mockData.interviews.filter(i => i.studentId === student.id).length;
  const interviewsEl = document.getElementById("interviewsScheduled");
  if (interviewsEl) interviewsEl.textContent = interviews;
  
  // Load recommended internships
  loadRecommendedInternships();
}

function loadRecommendedInternships() {
  const container = document.getElementById("recommendedInternships");
  if (!container || !currentUser) return;
  
  // Filter internships based on student's department and skills
  const recommended = mockData.internships.filter(internship => 
    internship.department === currentUser.department ||
    internship.skills.some(skill => currentUser.skills.includes(skill))
  ).slice(0, 3);
  
  container.innerHTML = recommended.map(internshipCardHTML).join("");
}

function internshipCardHTML(internship) {
  return `
    <div class="internship-card">
      <div class="internship-header">
        <div>
          <h3 class="internship-title">${internship.title}</h3>
          <p class="internship-company">${internship.company}</p>
        </div>
        <div class="status status--${internship.placementChance === 'High' ? 'success' : 'warning'}">
          ${internship.placementChance}
        </div>
      </div>
      
      <div class="internship-meta">
        <div class="meta-item">💰 ₹${internship.stipend.toLocaleString()}</div>
        <div class="meta-item">📍 ${internship.location}</div>
        <div class="meta-item">⏱️ ${internship.duration}</div>
      </div>
      
      <div class="internship-skills">
        ${internship.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
      
      <div class="match-reason">
        <h4>Why you're a good fit:</h4>
        <p>${getMatchReason(currentUser, internship)}</p>
      </div>
      
      <button class="btn btn--primary" onclick="applyForInternship('${internship.id}')">
        Apply Now
      </button>
    </div>
  `;
}

function loadStudentProfile() {
  const student = currentUser;
  if (!student) return;
  
  // Populate form fields
  const fields = {
    fullName: student.name,
    profileEmail: student.email,
    phone: student.phone,
    address: student.address,
    department: student.department,
    year: student.year,
    cgpa: student.cgpa
  };
  
  Object.keys(fields).forEach(fieldId => {
    const el = document.getElementById(fieldId);
    if (el) el.value = fields[fieldId] || '';
  });
  
  // Projects
  const projectsEl = document.getElementById("projects");
  if (projectsEl && student.projects) {
    projectsEl.value = student.projects.join(", ");
  }
  
  loadSkillTags();
  loadCertTags();
}

function loadSkillTags() {
  const container = document.getElementById("skillTags");
  if (!container || !currentUser.skills) return;
  
  container.innerHTML = currentUser.skills.map(skill => `
    <span class="skill-tag removable">
      ${skill}
      <button class="skill-remove" onclick="removeSkill('${skill}')">×</button>
    </span>
  `).join('');
}

function loadCertTags() {
  const container = document.getElementById("certTags");
  if (!container) return;
  
  const certs = currentUser.certifications || [];
  container.innerHTML = certs.map(cert => `
    <span class="skill-tag removable">
      ${cert}
      <button class="skill-remove" onclick="removeCert('${cert}')">×</button>
    </span>
  `).join('');
}

function removeSkill(skill) {
  if (currentUser.skills) {
    currentUser.skills = currentUser.skills.filter(s => s !== skill);
    loadSkillTags();
  }
}

function removeCert(cert) {
  if (currentUser.certifications) {
    currentUser.certifications = currentUser.certifications.filter(c => c !== cert);
    loadCertTags();
  }
}

function saveProfile() {
  const fields = {
    fullName: 'name',
    profileEmail: 'email', 
    phone: 'phone',
    address: 'address',
    department: 'department',
    year: 'year',
    cgpa: 'cgpa'
  };
  
  Object.keys(fields).forEach(fieldId => {
    const el = document.getElementById(fieldId);
    if (el) {
      const key = fields[fieldId];
      currentUser[key] = el.value;
    }
  });
  
  // Projects
  const projectsEl = document.getElementById("projects");
  if (projectsEl) {
    currentUser.projects = projectsEl.value.split(",").map(p => p.trim()).filter(Boolean);
  }
  
  // Recalculate profile completeness
  recalcProfileCompleteness();
  
  alert("Profile saved successfully!");
  if (currentPage === "studentDashboard") {
    loadStudentDashboard();
  }
}

function recalcProfileCompleteness() {
  let score = 0;
  if (currentUser.name) score += 15;
  if (currentUser.phone) score += 10;
  if (currentUser.address) score += 10;
  if (currentUser.department) score += 10;
  if (currentUser.cgpa) score += 10;
  if (currentUser.skills && currentUser.skills.length) score += 20;
  if (currentUser.resumeUploaded) score += 25;
  
  currentUser.profileCompleteness = Math.min(score, 100);
}

function switchTab(event, tabName) {
  // Hide all tab panes
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.remove('active');
  });
  
  // Remove active class from all tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Show selected tab pane
  const targetPane = document.getElementById(`${tabName}Tab`);
  if (targetPane) targetPane.classList.add('active');
  
  // Add active class to clicked tab
  if (event && event.target) {
    event.target.classList.add('active');
  }
}

function removeResume() {
  const previewEl = document.getElementById("resumePreview");
  const fileEl = document.getElementById("resumeFile");
  
  if (previewEl) previewEl.style.display = "none";
  if (fileEl) fileEl.value = "";
  if (currentUser) currentUser.resumeUploaded = false;
}

// === INTERNSHIP BOARD === //
function loadInternshipBoard() {
  const grid = document.getElementById("internshipGrid");
  if (!grid) return;
  
  grid.innerHTML = mockData.internships.map(internshipCardHTML).join("");
}

function applyForInternship(internshipId) {
  if (!currentUser || currentRole !== "student") {
    alert("Please log in as a student to apply for internships.");
    return;
  }
  
  // Check if already applied
  const existingApplication = mockData.applications.find(app => 
    app.studentId === currentUser.id && app.internshipId === internshipId
  );
  
  if (existingApplication) {
    alert("You have already applied for this internship!");
    return;
  }
  
  // Create new application
  const newApplication = {
    id: `app${Date.now()}`,
    studentId: currentUser.id,
    internshipId: internshipId,
    status: "Applied",
    appliedDate: new Date().toISOString().split('T')[0],
    mentorApproval: "pending",
    mentorRemarks: "",
    timeline: [
      { stage: "Applied", date: new Date().toISOString().split('T')[0], status: "completed" },
      { stage: "Mentor Approval", date: null, status: "pending" },
      { stage: "Shortlisted", date: null, status: "pending" },
      { stage: "Interview", date: null, status: "pending" },
      { stage: "Offer", date: null, status: "pending" }
    ]
  };
  
  mockData.applications.push(newApplication);
  alert("Application submitted successfully!");
  
  // Refresh if we're on application tracking page
  if (currentPage === "applicationTracking") {
    loadApplicationTracking();
  }
}

// === APPLICATION TRACKING === //
function loadApplicationTracking() {
  const list = document.getElementById("applicationsList");
  if (!list || !currentUser) return;
  
  const userApplications = mockData.applications.filter(app => app.studentId === currentUser.id);
  
  if (userApplications.length === 0) {
    list.innerHTML = '<p>No applications found. Start applying for internships!</p>';
    return;
  }
  
  list.innerHTML = userApplications.map(application => {
    const internship = mockData.internships.find(i => i.id === application.internshipId);
    if (!internship) return '';
    
    return `
      <div class="application-card">
        <div class="application-header">
          <div>
            <h3>${internship.title}</h3>
            <p>${internship.company}</p>
            <p class="meta-item">Applied: ${formatDate(application.appliedDate)}</p>
          </div>
          <div class="status status--${getStatusClass(application.status)}">
            ${application.status}
          </div>
        </div>
        
        <div class="application-timeline">
          ${application.timeline.map((step, index) => {
            const isCurrentStep = step.status === 'pending' && 
              application.timeline.slice(0, index).every(s => s.status === 'completed');
            
            return `
              <div class="timeline-step ${step.status}">
                <div class="step-indicator ${step.status} ${isCurrentStep ? 'current' : ''}">
                  ${step.status === 'completed' ? '✓' : index + 1}
                </div>
                <div class="step-label">
                  <strong>${step.stage}</strong>
                  ${step.date ? `<br><small>${formatDate(step.date)}</small>` : ''}
                  ${step.remarks ? `<br><small>${step.remarks}</small>` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// === INTERVIEW CALENDAR === //
let currentCalendarDate = new Date();

function loadInterviewCalendar() {
  updateCalendarHeader();
  generateCalendar();
}

function updateCalendarHeader() {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const currentMonthEl = document.getElementById('currentMonth');
  if (currentMonthEl) {
    currentMonthEl.textContent = 
      `${monthNames[currentCalendarDate.getMonth()]} ${currentCalendarDate.getFullYear()}`;
  }
}

function generateCalendar() {
  const calendarGrid = document.getElementById('calendarGrid');
  if (!calendarGrid || !currentUser) return;
  
  const firstDay = new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth(), 1);
  const lastDay = new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth() + 1, 0);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());
  
  let calendarHTML = `
    <div class="calendar-header-row">
      ${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => 
        `<div class="calendar-day-header">${day}</div>`
      ).join('')}
    </div>
    <div class="calendar-days">
  `;
  
  for (let i = 0; i < 42; i++) {
    const currentDay = new Date(startDate);
    currentDay.setDate(startDate.getDate() + i);
    
    const isCurrentMonth = currentDay.getMonth() === currentCalendarDate.getMonth();
    const dayInterviews = getInterviewsForDate(currentDay);
    
    calendarHTML += `
      <div class="calendar-day ${!isCurrentMonth ? 'other-month' : ''}">
        <div class="day-number">${currentDay.getDate()}</div>
        <div class="day-events">
          ${dayInterviews.map(interview => `
            <div class="event-item" onclick="viewInterviewDetails('${interview.id}')">
              ${interview.scheduledTime} - ${interview.interviewType}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  calendarHTML += '</div>';
  calendarGrid.innerHTML = calendarHTML;
}

function getInterviewsForDate(date) {
  if (!currentUser) return [];
  
  const dateString = date.toISOString().split('T')[0];
  return mockData.interviews.filter(interview => 
    interview.studentId === currentUser.id && interview.scheduledDate === dateString
  );
}

function prevMonth() {
  currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
  loadInterviewCalendar();
}

function nextMonth() {
  currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
  loadInterviewCalendar();
}

function viewInterviewDetails(interviewId) {
  const interview = mockData.interviews.find(i => i.id === interviewId);
  if (!interview) return;
  
  const internship = mockData.internships.find(i => i.id === interview.internshipId);
  
  const content = `
    <div class="interview-details">
      <h3>Interview Details</h3>
      <p><strong>Position:</strong> ${internship.title}</p>
      <p><strong>Company:</strong> ${internship.company}</p>
      <p><strong>Date:</strong> ${formatDate(interview.scheduledDate)}</p>
      <p><strong>Time:</strong> ${interview.scheduledTime}</p>
      <p><strong>Type:</strong> ${interview.interviewType}</p>
      <p><strong>Meeting Link:</strong> <a href="${interview.meetingLink}" target="_blank">${interview.meetingLink}</a></p>
      <p><strong>Status:</strong> ${interview.status}</p>
    </div>
  `;
  
  openModal('Interview Details', content, '<button class="btn btn--primary" onclick="closeModal()">Close</button>');
}

// === CERTIFICATES === //
function loadCertificates() {
  const container = document.getElementById("certificatesList");
  if (!container || !currentUser) return;
  
  const userCertificates = mockData.certificates.filter(cert => cert.studentId === currentUser.id);
  
  if (userCertificates.length === 0) {
    container.innerHTML = '<p>No certificates yet. Complete internships to earn certificates!</p>';
    return;
  }
  
  container.innerHTML = userCertificates.map(certificate => `
    <div class="certificate-card">
      <div class="certificate-header">
        <div class="certificate-icon">🏆</div>
        <h3>${certificate.companyName}</h3>
        <p>Completed: ${formatDate(certificate.completionDate)}</p>
      </div>
      <p><strong>Duration:</strong> ${certificate.duration}</p>
      <p><strong>Rating:</strong> ${certificate.rating}/5</p>
      <p><strong>Feedback:</strong> ${certificate.feedback}</p>
      <div style="margin-top: 16px;">
        <button class="btn btn--primary" onclick="downloadCertificate('${certificate.id}')">
          Download PDF
        </button>
      </div>
    </div>
  `).join('');
}

function downloadCertificate(certificateId) {
  alert(`Downloading certificate ${certificateId} (placeholder functionality)`);
}

// === MENTOR FUNCTIONS === //
function loadMentorDashboard() {
  const mentor = currentUser;
  if (!mentor) return;
  
  const mentorNameEl = document.getElementById("mentorName");
  if (mentorNameEl) mentorNameEl.textContent = mentor.name;
  
  loadPendingApprovals();
  loadMenteeList();
}

function loadPendingApprovals() {
  const container = document.getElementById("pendingApprovals");
  if (!container) return;
  
  // Get applications from mentor's mentees that need approval
  const pendingApprovals = mockData.applications.filter(app => {
    const student = mockData.users.students.find(s => s.id === app.studentId);
    return student && student.mentorId === currentUser.id && app.status === 'Applied';
  });
  
  const countEl = document.getElementById("pendingCount");
  if (countEl) countEl.textContent = pendingApprovals.length;
  
  if (pendingApprovals.length === 0) {
    container.innerHTML = '<p>No pending approvals.</p>';
    return;
  }
  
  container.innerHTML = pendingApprovals.map(application => {
    const student = mockData.users.students.find(s => s.id === application.studentId);
    const internship = mockData.internships.find(i => i.id === application.internshipId);
    
    return `
      <div class="pending-item">
        <div class="pending-info">
          <h4>${student.name}</h4>
          <p>${internship.title} at ${internship.company}</p>
          <p class="meta-item">Applied: ${formatDate(application.appliedDate)}</p>
        </div>
        <div class="pending-actions">
          <button class="btn btn--primary btn--sm" onclick="approveApplication('${application.id}')">
            Approve
          </button>
          <button class="btn btn--outline btn--sm" onclick="rejectApplication('${application.id}')">
            Decline
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function loadMenteeList() {
  const container = document.getElementById("menteeList");
  if (!container) return;
  
  const mentees = mockData.users.students.filter(s => s.mentorId === currentUser.id);
  
  const countEl = document.getElementById("menteeCount");
  if (countEl) countEl.textContent = mentees.length;
  
  container.innerHTML = mentees.map(mentee => `
    <div class="mentee-item">
      <h4>${mentee.name}</h4>
      <p>${mentee.department} - Year ${mentee.year}</p>
      <p>CGPA: ${mentee.cgpa} | Profile: ${mentee.profileCompleteness}% complete</p>
    </div>
  `).join('');
}

function approveApplication(applicationId) {
  const application = mockData.applications.find(app => app.id === applicationId);
  if (application) {
    application.status = 'Mentor Approval';
    application.mentorApproval = 'approved';
    application.timeline[1].status = 'completed';
    application.timeline[1].date = new Date().toISOString().split('T')[0];
    application.timeline[1].remarks = 'Approved by mentor';
    
    alert('Application approved successfully!');
    loadPendingApprovals();
  }
}

function rejectApplication(applicationId) {
  const application = mockData.applications.find(app => app.id === applicationId);
  if (application) {
    application.status = 'Rejected';
    application.timeline[1].status = 'completed';
    application.timeline[1].date = new Date().toISOString().split('T')[0];
    application.timeline[1].remarks = 'Declined by mentor';
    
    alert('Application declined.');
    loadPendingApprovals();
  }
}

function loadApprovalScreen() {
  const container = document.getElementById("approvalDetails");
  if (!container) return;
  
  // Get first pending approval
  const pendingApplication = mockData.applications.find(app => {
    const student = mockData.users.students.find(s => s.id === app.studentId);
    return student && student.mentorId === currentUser.id && app.status === 'Applied';
  });
  
  if (!pendingApplication) {
    container.innerHTML = '<p>No applications awaiting approval.</p>';
    return;
  }
  
  const student = mockData.users.students.find(s => s.id === pendingApplication.studentId);
  const internship = mockData.internships.find(i => i.id === pendingApplication.internshipId);
  
  container.innerHTML = `
    <div class="approval-student">
      <h3>Student: ${student.name}</h3>
      <p><strong>Department:</strong> ${student.department}</p>
      <p><strong>Year:</strong> ${student.year}</p>
      <p><strong>CGPA:</strong> ${student.cgpa}</p>
      <p><strong>Skills:</strong> ${student.skills.join(', ')}</p>
      <p><strong>Profile Completeness:</strong> ${student.profileCompleteness}%</p>
    </div>
    <div class="approval-internship">
      <h3>Internship: ${internship.title}</h3>
      <p><strong>Company:</strong> ${internship.company}</p>
      <p><strong>Location:</strong> ${internship.location}</p>
      <p><strong>Duration:</strong> ${internship.duration}</p>
      <p><strong>Stipend:</strong> ₹${internship.stipend.toLocaleString()}</p>
      <p><strong>Required Skills:</strong> ${internship.skills.join(', ')}</p>
      <p><strong>Description:</strong> ${internship.description}</p>
      
      <div class="approval-actions">
        <button class="btn btn--primary" onclick="approveApplication('${pendingApplication.id}'); loadApprovalScreen()">
          Approve Application
        </button>
        <button class="btn btn--outline" onclick="rejectApplication('${pendingApplication.id}'); loadApprovalScreen()">
          Decline Application
        </button>
      </div>
    </div>
  `;
}

// === PLACEMENT FUNCTIONS === //
function loadPlacementDashboard() {
  document.getElementById("totalInternships").textContent = mockData.internships.filter(i => i.status === 'active').length;
  document.getElementById("studentsPlaced").textContent = mockData.analytics.placementStats.studentsPlaced;
  
  const pendingApprovals = mockData.applications.filter(app => app.status === 'Applied' || app.status === 'Mentor Approval').length;
  document.getElementById("pendingApprovalsCount").textContent = pendingApprovals;
  
  const upcomingInterviews = mockData.interviews.filter(interview => 
    new Date(interview.scheduledDate) >= new Date()
  ).length;
  document.getElementById("upcomingInterviews").textContent = upcomingInterviews;
}

function loadAnalytics() {
  const { departmentWise, monthlyTrends, stipendRanges, topCompanies } = mockData.analytics.placementStats;
  
  // Department-wise chart
  renderChart('departmentChart', 'bar', 
    departmentWise.map(d => d.department),
    departmentWise.map(d => d.placed)
  );
  
  // Monthly trends chart
  renderChart('trendsChart', 'line',
    monthlyTrends.map(t => t.month),
    monthlyTrends.map(t => t.applications)
  );
  
  // Stipend distribution chart
  renderChart('stipendChart', 'pie',
    stipendRanges.map(s => s.range),
    stipendRanges.map(s => s.count)
  );
  
  // Company hiring chart
  renderChart('companyChart', 'bar',
    topCompanies,
    topCompanies.map(() => Math.floor(Math.random() * 20) + 5)
  );
}

function renderChart(canvasId, type, labels, data) {
  // Destroy existing chart if it exists
  if (chartStore[canvasId]) {
    chartStore[canvasId].destroy();
  }
  
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  
  const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];
  
  chartStore[canvasId] = new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: [{
        label: type === 'line' ? 'Applications' : 'Count',
        data: data,
        backgroundColor: colors.slice(0, labels.length),
        borderColor: type === 'line' ? colors[0] : colors.slice(0, labels.length),
        borderWidth: type === 'line' ? 2 : 1,
        fill: type === 'line' ? false : true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: type === 'pie'
        }
      }
    }
  });
}

function loadCrisisManagement() {
  const container = document.getElementById("crisisItems");
  if (!container) return;
  
  container.innerHTML = mockData.crisisManagement.map(crisis => `
    <div class="crisis-item priority-${crisis.priority.toLowerCase()}">
      <div class="crisis-info">
        <h4>${crisis.type}</h4>
        <p>${crisis.description}</p>
        <p><strong>Priority:</strong> ${crisis.priority}</p>
        <p><strong>Status:</strong> ${crisis.status}</p>
        <p><strong>Due:</strong> ${formatDate(crisis.dueDate)}</p>
      </div>
      <button class="btn btn--primary btn--sm" onclick="resolveCrisis('${crisis.id}')">
        Resolve
      </button>
    </div>
  `).join('');
}

function resolveCrisis(crisisId) {
  const crisis = mockData.crisisManagement.find(c => c.id === crisisId);
  if (crisis) {
    crisis.status = 'Resolved';
    alert('Crisis resolved successfully!');
    loadCrisisManagement();
  }
}

function loadMatchingOverview() {
  const container = document.getElementById("matchingResults");
  if (!container) return;
  
  container.innerHTML = mockData.applications.map(application => {
    const student = mockData.users.students.find(s => s.id === application.studentId);
    const internship = mockData.internships.find(i => i.id === application.internshipId);
    const matchScore = calculateMatchScore(student, internship);
    
    return `
      <div class="matching-item">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <h4>${student.name} → ${internship.title}</h4>
          <span class="match-score">${matchScore}% match</span>
        </div>
        <p><strong>Company:</strong> ${internship.company}</p>
        <p><strong>Match Reason:</strong> ${getMatchReason(student, internship)}</p>
        <p><strong>Application Status:</strong> ${application.status}</p>
      </div>
    `;
  }).join('');
}

// === EMPLOYER FUNCTIONS === //
function loadEmployerDashboard() {
  const employer = currentUser;
  if (!employer) return;
  
  const employerNameEl = document.getElementById("employerName");
  if (employerNameEl) employerNameEl.textContent = employer.name;
  
  // Get employer's internships
  const employerInternships = mockData.internships.filter(i => i.employerId === employer.id);
  document.getElementById("postedRoles").textContent = employerInternships.length;
  
  // Get applications for employer's internships
  const employerApplications = mockData.applications.filter(app => 
    employerInternships.some(internship => internship.id === app.internshipId)
  );
  document.getElementById("candidateResponses").textContent = employerApplications.length;
  
  // Get today's interviews
  const today = new Date().toISOString().split('T')[0];
  const todayInterviews = mockData.interviews.filter(interview => 
    interview.employerId === employer.id && interview.scheduledDate === today
  );
  document.getElementById("interviewsToday").textContent = todayInterviews.length;
  
  // Get offers extended
  const offersExtended = mockData.offers.filter(offer => offer.employerId === employer.id);
  document.getElementById("offersExtended").textContent = offersExtended.length;
  
  // Load recent applications
  loadRecentApplications();
}

function loadRecentApplications() {
  const container = document.getElementById("recentApplications");
  if (!container) return;
  
  const employer = currentUser;
  const employerInternships = mockData.internships.filter(i => i.employerId === employer.id);
  const recentApps = mockData.applications
    .filter(app => employerInternships.some(internship => internship.id === app.internshipId))
    .slice(0, 5);
  
  if (recentApps.length === 0) {
    container.innerHTML = '<p>No recent applications.</p>';
    return;
  }
  
  container.innerHTML = recentApps.map(app => {
    const student = mockData.users.students.find(s => s.id === app.studentId);
    const internship = mockData.internships.find(i => i.id === app.internshipId);
    
    return `
      <div style="padding: 12px; border: 1px solid var(--color-card-border); border-radius: var(--radius-base); margin-bottom: 8px;">
        <h4>${student.name}</h4>
        <p>Applied for: ${internship.title}</p>
        <p>Status: ${app.status}</p>
        <p>Applied: ${formatDate(app.appliedDate)}</p>
      </div>
    `;
  }).join('');
}

// === ADMIN FUNCTIONS === //
function loadAdminDashboard() {
  // Calculate total users
  const totalUsers = Object.values(mockData.users).reduce((sum, userArray) => sum + userArray.length, 0);
  document.getElementById("totalUsers").textContent = totalUsers;
  
  // System monitoring data
  document.getElementById("systemUptime").textContent = `${mockData.systemMonitoring.uptime}%`;
  document.getElementById("activeConnections").textContent = mockData.systemMonitoring.activeUsers;
  
  // Security alerts (based on error rate)
  const securityAlerts = mockData.systemMonitoring.errorRate > 0.05 ? 1 : 0;
  document.getElementById("securityAlerts").textContent = securityAlerts;
}

function loadUserManagement() {
  const container = document.getElementById("usersTable");
  if (!container) return;
  
  let tableRows = '';
  Object.keys(mockData.users).forEach(roleKey => {
    mockData.users[roleKey].forEach(user => {
      tableRows += `
        <tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${capitalizeFirst(roleKey === 'placement' ? 'placement' : roleKey.slice(0, -1))}</td>
          <td>
            <button class="btn btn--outline btn--sm">Edit</button>
            <button class="btn btn--outline btn--sm">Delete</button>
          </td>
        </tr>
      `;
    });
  });
  
  container.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
  `;
}

function loadAuditLogs() {
  const container = document.getElementById("logsTable");
  if (!container) return;
  
  const tableRows = mockData.auditLogs.map(log => `
    <tr>
      <td>${formatDate(log.timestamp)}</td>
      <td>${log.userId}</td>
      <td>${capitalizeFirst(log.userRole)}</td>
      <td>${log.action}</td>
      <td>${log.details}</td>
      <td>${log.module}</td>
    </tr>
  `).join('');
  
  container.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>User ID</th>
          <th>Role</th>
          <th>Action</th>
          <th>Details</th>
          <th>Module</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
  `;
}

function loadSystemMonitoring() {
  // System monitoring metrics are already displayed in HTML
  // This function can be used to update real-time metrics
  console.log("System monitoring loaded");
}

// === UTILITY FUNCTIONS === //
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}

function getMatchReason(user, internship) {
  if (!user || !internship) return 'This is a great opportunity to learn and grow.';
  
  const matchingSkills = internship.skills.filter(skill => user.skills.includes(skill));
  
  if (matchingSkills.length > 0) {
    return `Your skills in ${matchingSkills.join(', ')} align perfectly with this role.`;
  } else if (user.department === internship.department) {
    return `This role matches your ${user.department} background and will help you develop relevant skills.`;
  } else {
    return 'This is a great opportunity to expand your skill set and explore new domains.';
  }
}

function calculateMatchScore(student, internship) {
  let score = 0;
  
  // Department match (40 points)
  if (student.department === internship.department) {
    score += 40;
  }
  
  // Skills match (60 points)
  const matchingSkills = internship.skills.filter(skill => student.skills.includes(skill));
  const skillScore = (matchingSkills.length / internship.skills.length) * 60;
  score += skillScore;
  
  return Math.round(score);
}

function getStatusClass(status) {
  switch (status) {
    case 'Applied': return 'info';
    case 'Mentor Approval': return 'warning';
    case 'Shortlisted': return 'success';
    case 'Interview': return 'warning';
    case 'Offer': return 'success';
    case 'Rejected': return 'error';
    default: return 'info';
  }
}

// === MODAL FUNCTIONS === //
function openModal(title, content, actions = '') {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = content;
  document.getElementById('modalFooter').innerHTML = actions;
  document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

// === EVENT LISTENERS === //
function setupEventListeners() {
  console.log("Setting up event listeners...");
  
  // Skill input for adding skills
  document.addEventListener('keypress', function(e) {
    if (e.target.id === 'skillInput' && e.key === 'Enter') {
      e.preventDefault();
      const skill = e.target.value.trim();
      if (skill && currentUser && currentUser.skills && !currentUser.skills.includes(skill)) {
        currentUser.skills.push(skill);
        loadSkillTags();
        e.target.value = '';
      }
    }
    
    if (e.target.id === 'certInput' && e.key === 'Enter') {
      e.preventDefault();
      const cert = e.target.value.trim();
      if (cert && currentUser) {
        currentUser.certifications = currentUser.certifications || [];
        if (!currentUser.certifications.includes(cert)) {
          currentUser.certifications.push(cert);
          loadCertTags();
          e.target.value = '';
        }
      }
    }
  });
  
  // Resume file upload
  document.addEventListener('change', function(e) {
    if (e.target.id === 'resumeFile') {
      const file = e.target.files[0];
      if (file) {
        const fileNameEl = document.getElementById('resumeFileName');
        const previewEl = document.getElementById('resumePreview');
        if (fileNameEl && previewEl) {
          fileNameEl.textContent = file.name;
          previewEl.style.display = 'block';
          if (currentUser) currentUser.resumeUploaded = true;
        }
      }
    }
  });
  
  // Post opportunity form
  const opportunityForm = document.getElementById('opportunityForm');
  if (opportunityForm) {
    opportunityForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(e.target);
      const skills = formData.get('requiredSkills') ? 
        formData.get('requiredSkills').split(',').map(s => s.trim()).filter(Boolean) : [];
      
      const newInternship = {
        id: `i${Date.now()}`,
        title: formData.get('jobTitle'),
        company: formData.get('companyName'),
        employerId: currentUser.id,
        department: formData.get('targetDepartment'),
        stipend: parseInt(formData.get('jobStipend')),
        duration: formData.get('jobDuration'),
        location: formData.get('jobLocation'),
        skills: skills,
        description: formData.get('jobDescription'),
        requirements: formData.get('jobRequirements'),
        placementChance: formData.get('placementChance'),
        conversionRate: 70,
        posted: new Date().toISOString().split('T')[0],
        deadline: formData.get('applicationDeadline'),
        status: 'active',
        applicants: 0,
        shortlisted: 0,
        interviewed: 0,
        selected: 0
      };
      
      mockData.internships.push(newInternship);
      alert('Internship opportunity posted successfully!');
      e.target.reset();
      
      if (currentPage === 'placementDashboard') {
        loadPlacementDashboard();
      }
    });
  }
  
  // Rating stars functionality
  document.addEventListener('click', function(e) {
    if (e.target.closest('.rating-stars span')) {
      const star = e.target;
      const ratingContainer = star.parentElement;
      const rating = parseInt(star.dataset.rating);
      
      // Update visual state
      const stars = ratingContainer.children;
      for (let i = 0; i < stars.length; i++) {
        stars[i].classList.toggle('active', i < rating);
      }
      
      // Store rating value
      ratingContainer.dataset.rating = rating;
    }
  });
}

// === PLACEHOLDER FUNCTIONS === //
function exportToPDF() {
  alert('PDF export functionality would be implemented here');
}

function exportToExcel() {
  alert('Excel export functionality would be implemented here');
}

function exportUsers() {
  alert('User export functionality would be implemented here');
}

function exportLogs() {
  alert('Log export functionality would be implemented here');
}

function saveDraft() {
  alert('Draft saved successfully');
}

function saveFeedbackDraft() {
  const ratings = {};
  document.querySelectorAll('.rating-stars').forEach(ratingEl => {
    const field = ratingEl.dataset.field;
    const rating = ratingEl.dataset.rating || 0;
    ratings[field] = parseInt(rating);
  });
  
  console.log('Feedback draft saved:', ratings);
  alert('Feedback draft saved successfully');
}

function submitFeedback() {
  const ratings = {};
  document.querySelectorAll('.rating-stars').forEach(ratingEl => {
    const field = ratingEl.dataset.field;
    const rating = ratingEl.dataset.rating || 0;
    ratings[field] = parseInt(rating);
  });
  
  const overallComments = document.getElementById('overallComments').value;
  const strengths = document.getElementById('strengths').value;
  const improvements = document.getElementById('improvements').value;
  
  console.log('Feedback submitted:', { ratings, overallComments, strengths, improvements });
  alert('Feedback submitted successfully');
  
  // Reset form
  document.getElementById('feedbackForm').reset();
  document.querySelectorAll('.rating-stars span').forEach(star => {
    star.classList.remove('active');
  });
}

function initiateSemesterReset() {
  if (confirm('Are you sure you want to reset the semester? This action cannot be undone.')) {
    alert('Semester reset process initiated (placeholder functionality)');
  }
}

function switchAssessmentTab(tab) {
  document.querySelectorAll('.assessment-tabs .tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  const activeBtn = document.querySelector(`[onclick="switchAssessmentTab('${tab}')"]`);
  if (activeBtn) activeBtn.classList.add('active');
  
  const content = document.getElementById('assessmentContent');
  if (content) {
    content.innerHTML = `<h3>${tab === 'create' ? 'Create Assessment' : 'View Results'}</h3><p>This functionality would be implemented here.</p>`;
  }
}

function switchOfferTab(tab) {
  document.querySelectorAll('.offers-feedback-tabs .tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  const activeBtn = document.querySelector(`[onclick="switchOfferTab('${tab}')"]`);
  if (activeBtn) activeBtn.classList.add('active');
  
  const content = document.getElementById('offersContent');
  if (content) {
    content.innerHTML = `<h3>${tab === 'offers' ? 'Manage Offers' : 'Student Feedback'}</h3><p>This functionality would be implemented here.</p>`;
  }
}

function openCreateUserModal() {
  const modalContent = `
    <form id="createUserForm">
      <div class="form-group">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" required>
      </div>
      <div class="form-group">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" required>
      </div>
      <div class="form-group">
        <label class="form-label">Role</label>
        <select class="form-control" required>
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="mentor">Mentor</option>
          <option value="employer">Employer</option>
          <option value="placement">Placement Officer</option>
        </select>
      </div>
    </form>
  `;
  
  const modalActions = `
    <button class="btn btn--outline" onclick="closeModal()">Cancel</button>
    <button class="btn btn--primary" onclick="createUser()">Create User</button>
  `;
  
  openModal('Create New User', modalContent, modalActions);
}

function createUser() {
  alert('User creation functionality would be implemented here');
  closeModal();
}

console.log("Application script loaded successfully");