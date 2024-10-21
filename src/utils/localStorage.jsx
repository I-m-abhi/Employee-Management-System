const employees = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false,
        "title": "Complete feature implementation",
        "description": "Task related to Development",
        "date": "2024-10-19",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false,
        "title": "Design a new logo",
        "description": "Task related to Design",
        "date": "2024-10-15",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completedTask": false,
        "failedTask": true,
        "title": "Conduct market research",
        "description": "Task related to Marketing",
        "date": "2024-10-17",
        "category": "Marketing"
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completedTask": 1,
      "failedTask": 1
    }
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false,
        "title": "Develop marketing strategy",
        "description": "Task related to Marketing",
        "date": "2024-10-19",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": true,
        "completedTask": false,
        "failedTask": false,
        "title": "Fix app bugs",
        "description": "Task related to Development",
        "date": "2024-10-16",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completedTask": false,
        "failedTask": true,
        "title": "Prototype new product",
        "description": "Task related to Research",
        "date": "2024-10-18",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": true,
        "completedTask": false,
        "failedTask": false,
        "title": "Prepare sales report",
        "description": "Task related to Sales",
        "date": "2024-10-14",
        "category": "Sales"
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 2,
      "completedTask": 0,
      "failedTask": 1
    }
  },
  {
    "id": 3,
    "firstName": "Ravi",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completedTask": false,
        "failedTask": false,
        "title": "Enhance customer engagement",
        "description": "Task related to Sales",
        "date": "2024-10-13",
        "category": "Sales"
      },
      {
        "active": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false,
        "title": "Test application module",
        "description": "Task related to Development",
        "date": "2024-10-19",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false,
        "title": "Organize team meeting",
        "description": "Task related to Research",
        "date": "2024-10-18",
        "category": "Research"
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completedTask": 1,
      "failedTask": 0
    }
  },
  {
    "id": 4,
    "firstName": "Sonal",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false,
        "title": "Complete feature implementation",
        "description": "Task related to Development",
        "date": "2024-10-19",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": true,
        "completedTask": false,
        "failedTask": false,
        "title": "Develop marketing strategy",
        "description": "Task related to Marketing",
        "date": "2024-10-12",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false,
        "title": "Prepare sales report",
        "description": "Task related to Sales",
        "date": "2024-10-10",
        "category": "Sales"
      },
      {
        "active": false,
        "newTask": false,
        "completedTask": false,
        "failedTask": true,
        "title": "Fix app bugs",
        "description": "Task related to Development",
        "date": "2024-10-18",
        "category": "Development"
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completedTask": 1,
      "failedTask": 1
    }
  },
  {
    "id": 5,
    "firstName": "Neha",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false,
        "title": "Design a new logo",
        "description": "Task related to Design",
        "date": "2024-10-17",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": true,
        "completedTask": false,
        "failedTask": false,
        "title": "Conduct market research",
        "description": "Task related to Marketing",
        "date": "2024-10-18",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false,
        "title": "Enhance customer engagement",
        "description": "Task related to Sales",
        "date": "2024-10-19",
        "category": "Sales"
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completedTask": 1,
      "failedTask": 0
    }
  }
];

const admin = [
  {
    'id': 1,
    'email': 'admin@example.com',
    'password': '123',
  },
];

export const setLocalStorage = () => {
  localStorage.setItem('Employees', JSON.stringify(employees));
  localStorage.setItem('Admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('Employees'));
  const admin = JSON.parse(localStorage.getItem('Admin'));

  return { employees, admin };
};