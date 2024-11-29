# RBAC-Attendance-Management
The Attendance Management System is a secure application designed to handle the recording and management of attendance for organizations or institutions. It implements core security features like Authentication, Authorization, and Role-Based Access Control (RBAC) to ensure that users interact with the system based on their roles and permissions.

Here is overview of RBAC

                <a class="nav-link" href="/login">Login</a>
                <a class="nav-link" href="/register">Register</a>
                <a class="nav-link" href="/facultyLogin">Faculty Login</a>
              <%}else if (status == "loggedIn"){%>
                <a class="nav-link" href="/attendance">Attendance</a>
                <a class="nav-link" href="/logout">Logout</a>     
              <%} else if (status == "facultyLoggedIn"){%> 
                <a class="nav-link" href="/markAttendance">Mark Attendance</a>
                <a class="nav-link" href="/logout">Logout</a> 

 1. To run on local system
npm install - to install dependencies

2. Start the Server
Launch the server by executing:
node index

3. Access the Application
Once the server is running, you can access the application through your web browser or API client (e.g., Postman) at:

http://localhost:<5000>
port is: 5000


