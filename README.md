# RBAC-Attendance-Management
The Attendance Management System is a secure application designed to handle the recording and management of attendance for organizations or institutions. It implements core security features like Authentication, Authorization, and Role-Based Access Control (RBAC) to ensure that users interact with the system based on their roles and permissions.


                <a class="nav-link" href="/login">Login</a>
                <a class="nav-link" href="/register">Register</a>
                <a class="nav-link" href="/facultyLogin">Faculty Login</a>
              <%}else if (status == "loggedIn"){%>
                <a class="nav-link" href="/attendance">Attendance</a>
                <a class="nav-link" href="/logout">Logout</a>     
              <%} else if (status == "facultyLoggedIn"){%> 
                <a class="nav-link" href="/markAttendance">Mark Attendance</a>
                <a class="nav-link" href="/logout">Logout</a> 

Here is overview of RBAC
