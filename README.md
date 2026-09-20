# HelperSahi 🛠️

### Find the right helper for your home services.

HelperSahi is a home-services marketplace designed to connect customers with workers such as electricians, plumbers, and other local service providers.

The platform aims to make it easier for customers to find suitable workers and for workers to discover job opportunities.

## 🚀 Features

* User registration and login
* Customer and worker roles
* Worker profiles
* Job and service management
* Search workers by service category and keywords
* Location-based worker and job discovery
* Budget-based job filtering

> Some features are planned and may not yet be implemented.

## 🛠️ Tech Stack

Update this section to match the technologies used in your current project.

| Technology   | Purpose                 |
| ------------ | ----------------------- |
| Node.js      | Backend runtime         |
| TypeScript   | Type-safe development   |
| Express.js   | REST API                |
| MongoDB      | Database                |
| Mongoose     | MongoDB object modeling |
| JWT          | Authentication          |
| Git & GitHub | Version control         |

## 📁 Project Structure

```text
HelperSahi/
├── src/
│   ├── model/
│   ├── Repository/
│   ├── services/
│   ├── controllers/
│   ├── routes/
│   └── ...
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

* Node.js
* npm
* MongoDB
* Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/vishal-kumar-888/HelperSathi
```

2. Navigate to the project:

```bash
cd HelperSahi
```

3. Install dependencies:

```bash
npm install
```

4. Configure your environment variables in a `.env` file.

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

5. Start the development server:

```bash
npm run dev
```

*Update the commands according to your `package.json` scripts.*

## 👥 User Roles

### Customer

* Create an account and log in.
* Find workers for home services.
* Search by service type, location, and budget.
* Create and manage service requests.

### Worker

* Create an account and manage a profile.
* Specify services and skills.
* Discover jobs matching their skills and location.
* Manage job requests.

## 🔍 Job Discovery

HelperSahi is designed to support job discovery using:

* **Location:** Find nearby service opportunities.
* **Budget:** Filter jobs by the customer's budget.
* **Keywords:** Search for services such as electrician, plumber, or helper.

## 🔐 Authentication

The backend supports user authentication using JWT.

Authentication endpoints and authorization rules will be documented here as they are finalized.

## 🗺️ Roadmap

* [ ] Complete customer and worker authentication
* [ ] Develop job creation and management APIs
* [ ] Implement job discovery and filtering
* [ ] Add location-based search
* [ ] Add job application and booking workflows
* [ ] Add notifications
* [ ] Deploy the backend

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

## 👨‍💻 Author

**Vishal Kumar**

GitHub: [vishal-kumar-888](https://github.com/vishal-kumar-888)

---

*HelperSahi — Connecting customers with local service professionals.*
