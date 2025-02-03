PROJECTED FS:
/cardoc-be
├── src/
│ ├── config/
│ │ ├── database.ts # Database connection
│ ├── controllers/
│ │ ├── authController.ts # Login & Registration logic
│ │ ├── userController.ts # User-related API handlers
│ ├── models/
│ │ ├── User.ts # User Mongoose schema & model
│ ├── routes/
│ │ ├── authRoutes.ts # Authentication routes
│ │ ├── userRoutes.ts # User routes
│ ├── services/
│ │ ├── userService.ts # User database operations (CRUD)
│ ├── middlewares/
│ │ ├── authMiddleware.ts # JWT authentication middleware
│ ├── utils/ # Utility/helper functions
│ ├── main.ts # Main entry file
