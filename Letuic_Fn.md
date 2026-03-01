# **Product Idea Document:**

# **School/College LMS for CBSE & State Syllabus**

## 1\. Introduction

* A multi-tenant web \+ mobile LMS & management system tailored for CBSE & State syllabus schools in Kerala.  
* Distinct from generic LMS → focuses on syllabus-aligned materials, assessments, attendance, bus tracking, progress reports, and community engagement.  
* Will be accessible via:  
  * Web: For SuperAdmin (us) and School Admins.  
  * Mobile App 1 → Teachers \+ Drivers  
    * Role-based login → if Teacher logs in, they see Teacher Dashboard; if Driver logs in, they see Driver Dashboard.  
  * Mobile App 2  → Parents \+ Students  
    * Role-based login → if Parent logs in, Parent Dashboard; if Student logs in, Student Dashboard.  
    * Parents login via phone number → OTP → mapped child profiles.  
    * Students login via school-issued credentials (probably with email).

  ## 2\.  Objectives

* Simplify academic & admin management for schools.  
* Provide real-time insights for parents on attendance, transport, and student progress.  
* Empower students with learning materials, assessments, and engagement features.  
* Enable safe & transparent school transport.  
* Foster student collaboration, creativity, and engagement through community features.

  ## 3\. User Roles & Functional Requirements

1. ### SuperAdmin (Us)

   1. Full control across all schools (all access of a school admin \+ ).  
   2. Can create multiple school accounts and students.   
   3. View, filter, and manage data school-wise, class-wise, teacher-wise, student-wise.  
   4. Community: remove posts access if something is wrong with content.  
   5. Post global announcements/notices for all schools or selected schools.  
   6. Create quizzes & mock tests for cross-school usage.  
   7. Organize inter-school competitions.  
   8. Send customized push notifications by role (student/parent/teacher) or by school.  
   9. Monitor bus tracking for all schools.  
   10. Analytics dashboards: active schools, active users, engagement reports.

2. ### Admin (School Management) 

1. **Calendar & Timetable Management:**  
   1. Separate calendar views for teachers (for scheduling).  
   2. Class timetable CRUD Operation.  
   3. Parent calendar functionality to mark holidays, half-day classes, or annual days.  
2. **Fee Management.**  
3. **Attendance Tracking:**  
   1. Standard student attendance.  
   2. Specific attendance/tracking in case of teacher's absence.  
4. **Content Moderation:**  
   1. Removal/moderation of posts made by teachers and students.  
5. **Examination Management:**  
   1. System for defining and managing major examinations.  
   2. Functionality for teachers to upload and manage marks for these examinations.  
   3. Bulk upload of marks via CSV.  
   4. Track student progress across multiple dimensions: class-wise, subject-wise, and teacher-wise.  
6. **User Management:**  
   1. Add/Manage students, teachers, and drivers.  
   2. Bulk user addition via CSV import.  
   3. Normal form-based user addition.  
7. **Curriculum Mapping:**  
   1. Map students to subjects and assign relevant teachers.  
8. **Communication & Engagement:**  
9. **Announcements/Circulars:**  
   1. Post announcements in a central activity center.  
   2. Set granular visibility: by subject, class, teachers only, students only, or everyone.  
10. **Post Moderation:**  
    1. Functionality to delete and create posts.  
11. **Activities & Assessments:**  
    1. Organize and manage school-level quizzes, mock tests, and competitions.  
12. **Custom Notifications:**  
    1. Send customized notifications filtered by user role (e.g., student, teacher, parent).  
    2. Track notification delivery and view status.  
    3. Engagement Analytics.  
13. **Transportation Management:**

    **Bus Tracking:**

    1. View and manage real-time bus tracking and current status.  
    2. Creation of unique Bus Login IDs for tracking access.

3. ### Teacher 

1. Manage assigned classes, subjects, and students.  
2. Separate dashboards will be implemented for Class Teachers and Non-Class Teachers to meet their unique needs.  
3. Create and manage attendance, quizzes, and assessments, uploading notes.  
4. Provide marks for major and minor examinations. Major examination details will be pre-loaded by the administrator, and teachers will need to upload the corresponding marks. For class-wise unit exams, teachers can create the exam entries and add the marks..  
5. Real-time Q\&A support in discussion boards (e.g., Stack Overflow style \- *implementation*).  
   **Communication & Moderation:**  
1. Post community updates and notices with visibility filters.  
2. Approve/reject student posts (moderator role).  
3. Send push notifications to students/parents (e.g., PTA meeting).

**Attendance:**

1. Draft attendance (editable for 30 minutes).  
2. Auto-submit attendance after 30 minutes.  
3. Only Class Teachers will have the authority to record student attendance.  
4. Ensure instant parent notification (SMS (If feasible) \+ Push) if a student is absent.

**Analytics Section:**

1. Generate subject-wise reports.  
2. Generate class performance reports.  
3. Class dashboard display: attendance percentages, class averages, and lists of top/bottom performing students.

   

4. ### Driver

   The driver module will support two possible approaches for bus tracking:  
   1. Option 1 – Mobile-Based Tracking  
      1. Driver/Helper logs in using Bus ID credentials (bus-number-based login).  
      2. Location is fetched via the driver’s mobile GPS.  
      3. Driver can start/stop trips (check-in/check-out).  
      4. Parents/admin can view the real-time bus location through the app.  
   2. **Option 2 – Vehicle GPS Integration (Future Scope)**  
      1. If access to Kerala MVD’s GPS system is provided, the app will fetch live bus tracking data via API.  
      2. This will allow direct bus-based tracking without depending on driver phones.

   Note: The Driver and Teacher roles share the same mobile app. The displayed dashboard and available features will depend on the user’s role after login.

   

5. ### Parents

   1. Login with phone number → OTP.  
   2. Ability to read the calendar to identify holidays for the following day or upcoming dates, as well as any special occasions noted by an admin.  
   3. Multiple children dashboard if mapped.  
   4. View child’s performance, class average, reports.  
   5. View important announcements (exams, PTAs, events).  
   6. Track bus location live.  
   7. Absence notification (SMS \+ Push).  
   8. Download circulars, reports.  
   9. Fee reminders & payment gateway.  
   10. **Future Scope :**   
       1. Event calendar (holidays, exams, PTAs).  
       2. Read receipts for critical notifications.

6. ### Students

     
   1. View community posts (school & inter-school).  
   2. Attach questions and files in discussions/assignments.  
   3. Attempt the quiz  
   4. Aura Gamification:  
      1. Earn Aura score for contributions.  
      2. Verified answers \= Aura boost.  
      3. Badges for top performers/quizzes.  
   5. Dashboard with Aura, progress, achievements.  
   6. Access study materials, reports, averages.  
   7. View their report and marks  
   8. Discussion Forums: Participate in threads, review discussions, and solve doubts.   
   9. **FutureScope** :   
      1. Personal study planner (assignments, upcoming exams).  
      2. AI exam prep & crash classes (future scope).  
      3. Post in community feed (after approval from admin section)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Note:** The previously mentioned **App Level Admin** role has been removed.

**Top Priority Features:**

* Attendance  
* Community  
* Assignment  
* Exam/Mark/User Management  
* Bus Tracking