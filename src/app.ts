import cors from 'cors';
import express from 'express';
import { Application } from 'express';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import { UserRoutes } from './app/modules/users/user.route';
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academincSemester.route';

const app: Application = express();
app.use(cors());

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Applications routes
console.log(app.get('env'));
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);

// Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('Unhandled Promise Rejection'));
// });

// Global error handler
app.use(globalErrorHandler);

export default app;
