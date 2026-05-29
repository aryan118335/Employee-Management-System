const employees = [ 
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create homepage UI design",
        taskDate: "2026-05-26",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve login authentication issue",
        taskDate: "2026-05-25",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Setup",
        taskDescription: "Configure database schema",
        taskDate: "2026-05-24",
        category: "Backend"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Build employee dashboard",
        taskDate: "2026-05-26",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "API Testing",
        taskDescription: "Test API endpoints",
        taskDate: "2026-05-23",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Document project setup process",
        taskDate: "2026-05-22",
        category: "Documentation"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update UI",
        taskDescription: "Improve button styles",
        taskDate: "2026-05-21",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy Website",
        taskDescription: "Deploy app to server",
        taskDate: "2026-05-20",
        category: "Deployment"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Integration",
        taskDescription: "Integrate payment gateway",
        taskDate: "2026-05-19",
        category: "Backend"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Optimize Performance",
        taskDescription: "Reduce page load time",
        taskDate: "2026-05-18",
        category: "Performance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Add Search Feature",
        taskDescription: "Create search functionality",
        taskDate: "2026-05-17",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Setup CI/CD",
        taskDescription: "Configure deployment pipeline",
        taskDate: "2026-05-16",
        category: "DevOps"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Reports",
        taskDescription: "Generate monthly reports",
        taskDate: "2026-05-15",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Repair responsive navbar issue",
        taskDate: "2026-05-14",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Bug Analysis",
        taskDescription: "Investigate crash reports",
        taskDate: "2026-05-13",
        category: "Debugging"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123"
  }
];




export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}


export const getLocalStorage = () => {

    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    console.log(employees, admin)
}