
## WiseHealth Navigator - Patient Queue Management System
Welcome to the WiseHealth Navigator. This application is designed to streamline the process of managing patient queues for various tests and procedures in a hospital setting, particularly catering to the needs of elderly patients.

## Features

- Centralized Queue Management: Patients can view their queue status and wait comfortably in the waiting area until their turn comes up.

- Real-time Updates: The system displays the next patient's number on a screen, ensuring patients are informed without the need to wait in line.

- Ease of Use: The interface is designed with simplicity in mind to accommodate users with varying levels of technological literacy.

- Minimal User Interaction: Users, particularly elderly patients, do not need to interact directly with the system. The interface is designed to operate seamlessly in the background.

- Administrative Control: Admin (doctors or nurses) have the authority to add or update patient information, ensuring accurate and up-to-date records.


### 🛠 Skills
- ReactJs + Vite: Frontend
- TailwindCSS: Styling
- Node.js + Express.js: Backend Runtime & HTTP Servers
- MongoDB + Mongoose: Database
- Axios API: HTTP Requests




## Getting Started

To get started with the WiseHealth Navigator, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine.

2. **Install Dependencies**:
   - Navigate to the project directory.
   - Go to the `frontend` and `backend` folders and run:
     ```
     npm install
     ```

3. **Set Up the Database**:
   - Database settings are pre-configured in the application.
   - This application uses MongoDB for data storage.
   - A free tier MongoDB Atlas link has been provided for database connection.
   - If you wish to view the database using MongoDB Compass, follow these steps:
     - Copy the provided MongoDB Atlas link.
     - Open MongoDB Compass.
     - Paste the link in the connection dialog and click "Connect".

4. **Start the Backend Server**:
   - In the `backend` folder, run:
     ```
     node index.js
     ```
     or
     ```
     nodemon index.js 
     // Make sure nodemon is intalled on your system.
     ```
     

5. **Start the Frontend Server**:
   - In the `frontend` folder, run:
     ```
     npm run dev
     ```

6. **Access the Application**:
   - Open your web browser and navigate to [http://localhost:5173](http://localhost:5173) to access the application.

7. **Additional Troubleshooting**:
   - If you encounter any issues, ensure all dependencies are installed by running `npm install` in the root folder.

Happy navigating with WiseHealth Navigator!

## Screenshots
- Landing Page
![App Screenshot](https://github.com/Mrunal112/wisehealth-navigator/blob/main/Screenshots/Admin%20Login.png?raw=true)
- Admin Login
![App Screenshot](https://github.com/Mrunal112/wisehealth-navigator/blob/main/Screenshots/Admin%20Login.png?raw=true)
- Valid User
![App Screenshot](https://github.com/Mrunal112/wisehealth-navigator/blob/main/Screenshots/Valid%20User.png?raw=true)
- Unvalid User
![App Screenshot](https://github.com/Mrunal112/wisehealth-navigator/blob/main/Screenshots/Unvalid%20User.png?raw=true)
- Database 
![App Screenshot](https://github.com/Mrunal112/wisehealth-navigator/blob/main/Screenshots/Database.png?raw=true)