# HelperSahi 

**HelperSahi** is a home-services marketplace that connects **customers with local service providers** such as electricians, plumbers, cleaners, carpenters, and other skilled workers.

The idea behind HelperSahi is simple: when someone needs a service at home, they should be able to easily find a suitable worker based on their **service, location, budget, and requirements**.

At the same time, workers should have a platform where they can **create their profiles, showcase their skills, and discover relevant job opportunities**.

---

## 💡 What is HelperSahi?

Finding a reliable local worker for a home service can sometimes be difficult. Customers may not know whom to contact, while skilled workers may struggle to find suitable jobs.

**HelperSahi aims to solve this problem by creating a single platform for both sides.**

### For Customers

Customers can use HelperSahi to:

* Find workers for home services
* Search by service or keyword
* Discover workers based on location
* Consider available budgets
* View worker profiles
* Create service/job requests

### For Workers

Workers can use HelperSahi to:

* Create a professional worker profile
* Add their skills and services
* Discover available jobs
* Find jobs based on their location
* View job requirements and budgets
* Manage their job requests

---

##  Core Features

### 🔐 Authentication

* User registration
* User login
* JWT-based authentication
* Secure password handling
* Role-based users

### 👤 User Management

HelperSahi supports different types of users:

* **Customer**
* **Worker**

Each user can have information and functionality specific to their role.

### 🧑‍🔧 Worker Profiles

Workers can maintain profiles containing information such as:

* Name
* Contact information
* Skills
* Services
* Location
* Experience
* Other professional details

### 💼 Job Management

Customers can create service/job requests containing information such as:

* Required service
* Job description
* Location
* Budget
* Other requirements

Workers can discover relevant jobs and manage their requests.

### 🔎 Job & Worker Discovery

HelperSahi is designed to make discovery easier using:

* **Keywords** — Search for services such as electrician, plumber, carpenter, etc.
* **Location** — Find nearby workers or jobs.
* **Budget** — Find jobs according to available budgets.
* **Service category** — Filter according to the required service.

---

## 🔄 How HelperSahi Works

```text
                    HelperSahi
                        │
             ┌──────────┴──────────┐
             │                     │
         Customer                Worker
             │                     │
             │                     │
       Create Job            Create Profile
             │                     │
             └──────────┬──────────┘
                        │
                 Job Discovery
                        │
              ┌─────────┴─────────┐
              │                   │
          Location              Service
              │                   │
              └─────────┬─────────┘
                        │
                      Budget
                        │
                        ▼
                Matching / Discovery
                        │
                        ▼
                 Service Request
                        │
                        ▼
                    Job Flow
```

The goal is to create a simple connection between a customer who needs a service and a worker who can provide that service.

---

## 🏗️ Project Architecture

The backend follows a structured architecture to keep the application maintainable and scalable.

```text
Client
  │
  ▼
API / Routes
  │
  ▼
Controller
  │
  ▼
Service Layer
  │
  ▼
Repository Layer
  │
  ▼
MongoDB
```

### Main Layers

**Routes**

Responsible for defining API endpoints.

**Controllers**

Handle HTTP requests and responses.

**Services**

Contain business logic and application rules.

**Repositories**

Handle database-related operations.

**Models**

Define MongoDB data structures using Mongoose.

---

## 🛠️ Tech Stack

| Technology | Purpose                       |
| ---------- | ----------------------------- |
| Node.js    | Backend runtime               |
| TypeScript | Type-safe backend development |
| Express.js | REST API framework            |
| MongoDB    | Database                      |
| Mongoose   | MongoDB object modeling       |
| JWT        | Authentication                |
| Argon2     | Password hashing              |
| Git        | Version control               |
| GitHub     | Source code management        |

---

## 📁 Project Structure

```text
HelperSahi/
│
├── src/
│   ├── controllers/
│   │
│   ├── DTO/
│   │
│   ├── model/
│   │
│   ├── Repository/
│   │
│   ├── services/
│   │
│   ├── routes/
│   │
│   ├── types/
│   │
│   └── ...
│
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

The project structure may evolve as new features and modules are introduced.

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* MongoDB
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/vishal-kumar-888/HelperSathi.git
```

### 2. Navigate to the Project

```bash
cd HelperSathi
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root.

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 5. Start the Development Server

```bash
npm run dev
```

The API will start on your configured port.

---

## 🔐 Authentication

HelperSahi uses **JWT-based authentication** to protect authenticated routes.

The authentication flow is designed around:

```text
Register
   │
   ▼
Password Hashing
   │
   ▼
User Stored in Database
   │
   ▼
Login
   │
   ▼
Credentials Verification
   │
   ▼
JWT Token
   │
   ▼
Authenticated Requests
```

Passwords are securely hashed before being stored in the database.

---

## 🗃️ Database

HelperSahi uses **MongoDB** as the primary database.

Mongoose is used to define schemas and interact with MongoDB.

The application is designed around entities such as:

```text
User
 │
 ├── Customer
 │
 └── Worker

Worker
 │
 └── Services / Skills

Customer
 │
 └── Jobs

Job
 │
 ├── Service
 ├── Location
 ├── Budget
 └── Requirements
```

---

## 🗺️ Development Roadmap

HelperSahi is being developed incrementally.

### Authentication

* [x] User registration
* [x] User login
* [x] JWT authentication
* [x] Customer / Worker roles

### User & Worker

* [x] User model
* [x] Worker model
* [ ] Complete worker profile management
* [ ] Service and skill management

### Jobs

* [ ] Create job
* [ ] View jobs
* [ ] Update jobs
* [ ] Delete jobs
* [ ] Worker job discovery
* [ ] Job application/request flow

### Search & Discovery

* [ ] Keyword-based search
* [ ] Service-category filtering
* [ ] Location-based discovery
* [ ] Budget-based filtering

### Platform

* [ ] Notifications
* [ ] Booking workflow
* [ ] Reviews and ratings
* [ ] Production deployment
* [ ] Monitoring and logging

---

## 🎯 Project Goal

The long-term goal of HelperSahi is to build a reliable platform where:

> **Customers can easily find the right worker, and workers can easily find the right job.**

The project is being developed with a focus on:

* Clean backend architecture
* Scalable APIs
* Secure authentication
* Maintainable code
* Real-world marketplace workflows

---

## 🚧 Project Status

**HelperSahi is currently under active development.**

The backend is being developed step by step, starting with authentication, users, workers, jobs, and the core marketplace workflow.

Features will continue to be added as development progresses.

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

If you find a bug or have an idea for improving HelperSahi, feel free to open an issue or submit a pull request.

---

## 👨‍💻 Author

**Vishal Kumar**

GitHub: [vishal-kumar-888](https://github.com/vishal-kumar-888)

---

## ⭐ HelperSahi

**Connecting customers with local service professionals.**

> Built to make finding and providing local home services easier.
