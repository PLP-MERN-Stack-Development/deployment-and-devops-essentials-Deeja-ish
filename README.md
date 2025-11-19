# Full-Stack MERN Application

A modern full-stack application built with MongoDB, Express.js, React, and Node.js. Features a user management system with full CRUD operations.

## 🚀 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **dotenv** - Environment variables

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **CSS3** - Styling

## 📁 Project Structure

```
my-app/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── users.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── render.yaml
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   └── main.jsx
    ├── public/
    ├── .env
    ├── package.json
    ├── vite.config.js
    └── vercel.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-Deeja-ish.git
cd deployment-and-devops-essentials-Deeja-ish
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

Edit `.env` file:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
FRONTEND_URL=https://deployment-and-devops-5li4.vercel.app/
```

### 3. Frontend Setup
```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

Edit `.env` file:
```env
VITE_API_BASE=https://deployment-and-devops-essentials-deeja.onrender.com
```

## 🚀 Running the Application

### Development Mode

#### Start Backend Server
```bash
cd backend
npm run dev
```
Backend runs on: `https://deployment-and-devops-essentials-deeja.onrender.com`

#### Start Frontend Development Server
```bash
cd frontend
npm run dev
```
Frontend runs on: `https://deployment-and-devops-5li4.vercel.app/`

### Production Build
```bash
# Backend
cd backend
npm start

# Frontend
cd frontend
npm run build
npm run preview
```

## 🌐 API Endpoints

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Health Check
- `GET /api/health` - Server status

## 📦 Deployment

### Backend on Render
1. Push code to GitHub
2. Connect repository to Render
3. Set environment variables in Render dashboard:
   - `MONGODB_URI`
   - `https://deployment-and-devops-5li4.vercel.app/` 
4. Deploy automatically

### Frontend on Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variable:
   - `https://deployment-and-devops-essentials-deeja.onrender.com` 
4. Deploy automatically

### MongoDB Setup
1. Create MongoDB Atlas cluster
2. Get connection string
3. Add to environment variables
4. Configure network access to allow Render IPs

## 🔧 Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
PORT=5000
FRONTEND_URL= https://deployment-and-devops-5li4.vercel.app/
```

### Frontend (.env)
```env
VITE_API_BASE=https://deployment-and-devops-essentials-deeja.onrender.com
```

## 🎯 Features

- ✅ Create, read, update, delete users
- ✅ Responsive design
- ✅ Real-time form validation
- ✅ Error handling
- ✅ RESTful API
- ✅ Modern React hooks
- ✅ MongoDB integration

## 📝 Available Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Frontend
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔍 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure `FRONTEND_URL` environment variable is set correctly
   - Check that backend CORS configuration includes frontend URL

2. **MongoDB Connection Issues**
   - Verify connection string in environment variables
   - Check network access in MongoDB Atlas

3. **Environment Variables Not Loading**
   - Restart development servers after adding new environment variables
   - Ensure `.env` files are in correct directories

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.