# 🚀 Customs API

A RESTful API built with Node.js, Express and MongoDB (Mongoose) to manage customs‑broker customers and their branch offices. Includes CRUD, branch‑count statistics, OpenAPI docs and a Postman collection for rapid testing.

---

## 📦 Tech Stack

- **Node.js** & **Express.js**
- **MongoDB** & **Mongoose**
- **Swagger / OpenAPI** for documentation
- **Postman** for API testing

---

## 🔧 Prerequisites

- **Node.js** (v18+ recommended)
- **npm** (v8+ recommended)
- **MongoDB** (running locally on port 27017 or via Atlas)

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your‑username/customs-api.git
   cd customs-api

   ```

2. **Install dependencies**
   npm install

3. **Create your environment file**
   In the project root, create a file named .env with:
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/customs-api

   **If you use MongoDB Atlas, replace MONGO_URI with your connection string.**
   **Do not commit your real credentials—.env is listed in .gitignore.**

4. **Start the server**
   npm run dev

   **The server will launch at: http://localhost:5000**

## 📂 Project Structure

customs-api/
├── config/ # MongoDB connection setup
│ └── db.js
├── controllers/ # Route handlers
│ ├── customerController.js
│ └── branchController.js
├── models/ # Mongoose schemas
│ ├── Customer.js
│ └── Branch.js
├── routes/ # Express routers
│ ├── customerRoutes.js
│ └── branchRoutes.js
├── docs/ # Documentation files
│ ├── openapi.yaml # OpenAPI 3.0 specification
│ └── postman_collection.json # Postman collection
├── .env # Environment variables
├── .gitignore
├── server.js # Entry point
└── README.md # Project overview and instructions

## ▶️ NPM Scripts

| Script  | Command             | Description         |
| ------- | ------------------- | ------------------- |
| `start` | `node server.js`    | Run the server once |
| `dev`   | `nodemon server.js` | Run with hot reload |

## 📄 API Documentation (OpenAPI)

**Specification**: docs/openapi.yaml
**To view**: 1. Go to Swagger Editor 2. Import the openapi.yaml file

## 🧪 Postman Collection

**File**: docs/postman_collection.json

**To import**:

1. In Postman, File → Import
2. Select this JSON file
3. Run requests against http://localhost:5000

## 🔗 Endpoints Reference

**Customers**
| Method | Endpoint                      | Description                             |
| ------ | ----------------------------- | --------------------------------------- |
| POST   | `/customers`                  | Create a new customer                   |
| GET    | `/customers`                  | List all customers with their branches  |
| GET    | `/customers/:id`              | Get one customer by ID                  |
| PUT    | `/customers/:id`              | Update customer details                 |
| DELETE | `/customers/:id`              | Delete a customer (and its branches)    |
| GET    | `/customers/:id/branch-count` | Get number of branches for one customer |
| GET    | `/customers/branch-counts`    | Get branch‑count for all customers      |

**Branches**
| Method | Endpoint                    | Description                           |
| ------ | --------------------------- | ------------------------------------- |
| POST   | `/branches`                 | Create a new branch                   |
| GET    | `/branches?customerId=<id>` | List branches for a specific customer |
| PUT    | `/branches/:id`             | Update branch details                 |
| DELETE | `/branches/:id`             | Delete a branch                       |

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

**Abhijith Kumar**
GitHub: AbhijithKumar-07
Feel free to open issues or pull requests!

