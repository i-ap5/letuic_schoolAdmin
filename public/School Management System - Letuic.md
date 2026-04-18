# School Management System

# School Management System

## Independent Schema

### Quiz

| {	"Id": "Unique id of the quiz",	"Name": "Name of the quiz",       “Questions”: \[          “QID”: “Question ID of the current question”,          “Question”: “Question to be displayed”,          “Options”: \[{              “OID”: “Option ID”,              “Option”: “Option displayed”           }\],          “Answer”: “The correct option (OID)”,          “Point”:  “Point for correct answer”       \],       “Start date and time”: “Time when students can start answering the quiz”,      “End date and time”: “Time when students stop answering and the quiz is submitted”,      “School ID”: \[“List of schools for which this quiz is applicable”\],      “Class ID”: \[“List of class IDs where the quiz is displayed”\]} |
| :---- |

### Quiz Response By Students

| {	"Id": "Response ID",	"Quiz ID": "Source Quiz",	"Student ID": "ID of the student who responded",      "Calculated Score": "Score calculated by the points assigned",	"Answers": \[{		"QID": "ID of the question",            "OID": "ID of the answered option"       }\]} |
| :---- |

### Class

| {	"Id": "Unique id of the class",	"School Id": "Unique id of the school under which the class comes in",	"Class Name": "Name of the class",       “Class Teacher ID”: “ID of the class teacher”} |
| :---- |

### Competition	

| {	"Id": "Competition ID unique to the competition",	"Name": "Name of the competition",	"Date and Time": "Date and time of the competition",	"Venue": "Place of the competition",	"Results": \[{		"Position": "First/Second/Third/Other placement",		"Student/School ID": "Student/School ID of first place",		"Type of Competition": "School/Individual"}\]} |
| :---- |

### Exams

| {	"ID": "Unique ID of the exam",	"Name": "Name of the exam",	"Dates": \[{		"Date": "Date of the exam",		"Subject": "Subject",		"Syllabus": "Subject syllabus for exam",		"Time": "Exam timing"      }\]} |
| :---- |

### Student Marks

| {	"ID": "Unique ID of the entry",	"Student ID": "Unique ID of the student whose marks are being entered",	"Exam ID": "Examination ID",	"Marks": \[{		"Subject": "Subject Name",		"Marks": "Marks scored"}\]} |
| :---- |

### Curriculum Mapping

| {	"ID": "Mapping ID",	"School ID": "Relevant school ID",	"Subject": "Subject Name",	"Class ID": "Class ID",	"Teacher ID": "Teacher ID",	"Students": \["IDs of students mapped to the subject and teacher"\]} |
| :---- |

### Notification

| {	"ID": "Notification ID",	"School ID": \["IDs of schools where the notification has to be delivered"\],	"Response": \[{		"Receiver ID": "ID of the receiver",		"Receiver role": "Role of the receiver",		"Delivered at": "Date and time when the notification was delivered",		"Read at": "Date and time when the notification was read"      }\],	"Content": {		"Title": "Notification title",		"Content": "Notification content"       }} |
| :---- |

### 

## Roles

- Super Admin  
- App Admin  
- School Admin  
- Teacher  
- Student  
- Parent  
- Driver

### Super Admin

#### Schema (Initial)

| {	"Id": "Unique ID of the user",	"Name": "Name of the super admin to be displayed on dashboard",	"Email": "Email ID of the super admin",	"Password": "Password hash of super admin's login password"} |
| :---- |

#### Functions

- Create the super admin  
- Edit the Name, Email and Password fields  
- Login to the account  
- Manage all other accounts by editing schemas of corresponding roles (See corresponding roles \> Managed By \> Super Admin for detailed breakdown)  
- **\+ All functions of App Admin (See App Admin role for detailed breakdown)**  
- Allow/Revoke access to the system for app admin and their users (schools, students, parents, teachers, drivers)

### App Admin

#### Schema (Initial)

| {	"Id": "Unique ID of the user",	"Name": "Name of the user",	"Email Id": "Email ID of the user",	"Password": "Password Hash of the user"} |
| :---- |

#### Functions

- Create school account  
- Delete school account  
- Manage school account (See School Admin \> Managed By \> App Admin for more on what can be managed)  
- View school accounts and corresponding details  
- Create student account  
- Delete student account  
- Manage student account (See Student \> Managed By \> App Admin for more on what can be managed)  
- Manage teacher account (See Teacher \> Managed By \> App Admin for more on what can be managed)  
- Manage driver account (See Driver \> Managed By \> App Admin for more on what can be managed)  
- Manage parent account (See Parent \> Managed By \> App Admin for more on what can be managed)  
- View all student accounts and corresponding details  
- Post school specific announcements/notices  
- Post notice/announcements for all schools  
- Create quiz/mock tests for multiple schools  
- Edit quiz/mock tests for multiple schools  
- Delete quiz/mock tests for multiple schools  
- View quiz/mock tests for multiple schools  
- Create inter school competition  
- Edit inter school competition  
- Delete inter school competition  
- View inter school competition  
- View notifications sent to different roles  
- Edit notifications sent to different roles  
- Delete notifications sent to different roles  
- Add notification to different roles  
- View different driver locations  
- Analytics:  
  - Active schools  
  - Active users grouped by roles  
  - Daily usage report:  
    - Peak usage time  
    - Most used APIs on a regular basis (Monthly/weekly)  
- **\+ ALL functions of School Admins**

#### Managed By

##### Super Admin

- Add, delete, view details of the app admin  
- Edit different fields of the app admin db schema

### School Admin

#### Schema (Initial)

| {	"ID": "Unique ID of the school",	"Name": "Name of the school",	"Address": "Address of the school",	"Contact": "Public contact number of the school",	"Email": "Public email id of the school",	"Website": "Website of the school, if any"} |
| :---- |

#### Functions

- Calendar Management  
  - Create calendars for teachers  
  - View calendars  
  - Edit existing calendars  
  - Delete existing calendars  
  - Add/Edit/Delete/View calendar events (Includes half days, annual day, holidays)  
- Fee management  
  - Set fees for students  
  - Edit fees for students  
  - Delete fees for students  
  - View fees for students  
  - View unpaid fees by students  
- Attendance tracking  
  - Mark attendance for student/teacher  
  - Unmark attendance for student/teacher  
  - Teacher attendance marking/unmarking to mark/unmark halfday/fullday  
- Examination management (See schema for fields that can be edited)  
  - Add major examination details  
  - Edit examination details  
  - Delete examination details  
  - View all examination details  
  - Upload CSV files for filling out student marks  
  - Edit Student marks  
  - Delete student marks  
  - View student marks  
  - Track progress of student  
- User Management  
  - Add/Edit/View/Delete students, teachers, drivers, parents  
  - Ability to add users based on CSV files  
- Curriculum Mapping  
  - Add/edit/delete/view student \- subject mapping  
  - Add/delete/edit/view teacher \- subject mapping  
- Announcements  
  - Add/edit/delete/view announcements based on roles or for every roles  
- Activities  
  - Add/edit/delete/view school events like competitions, quizzes and mock tests (Schema remains same as in Independent schemas)  
- Notifications  
  - Add/edit/delete/view role based notifications (target: parents, students, teachers, drivers)  
  - Engagement analytics  
  - Report on when the notification was viewed and when it is delivered  
- Route (Bus) tracking  
  - View/Delete tracking for bus (live preview of the location, removal of location from all users)

#### Managed By

##### App Admin

- Add/edit/delete/view school admins  
- Edit schema details of school admins

### Teacher

#### Schema (Initial)

| {	"ID": "Unique ID",	"Name": "Name of the teacher",	"Email ID": "Email ID of the teacher",	"Mobile No": "Mobile number of the teacher",	"Password": "Password hash of the teacher",	"Classes": \["List of class IDs attached to the teacher"\],} |
| :---- |

#### Functions

- Manage assigned classes, subjects and students  
- Class teacher dashboard  
  - View entire calendar for the class  
  - Attendance for students \- mark/unmark  
    - Attendance will be editable for 30 minutes after which it auto submits as final  
  - Edit classroom calendar  
- Subject Teacher dashboard  
  - Add tests  
  - Edit tests  
  - Delete tests  
  - View tests  
  - Add/edit/delete/view subject resources (file attachments)  
  - Add/edit/delete/view assignments, quizzes  
- Upload student marks  
- Analytics

#### Managed By

##### Super Admin

- Add/edit/delete/view teachers  
- Edit schema details of teachers

##### App Admin

- Add/edit/delete/view teachers  
- Edit schema details of teachers

##### School Admin

- Add/edit/delete/view teachers  
- Edit schema details of teachers

### Student

#### Schema (Initial)

| { 	“ID”: “Unique ID”, 	“Name”: “Student name”, 	“Admission number”: “Admission number”, 	“Address”: “Student address”, 	“Class”: “Class ID” } |
| :---- |

#### 

#### Functions

- Access subject resources attached to subject by subject teachers  
- View reports, averages, marks  
- Attempt quizzes and view results

#### Managed By

##### Super Admin

- Add/edit/delete/view students  
- Edit schema details of students

##### App Admin

- Add/edit/delete/view students  
- Edit schema details of students

##### School Admin

- Add/edit/delete/view students  
- Edit schema details of students

### Parent

#### Schema (Initial)

#### 

| {	"ID": "Unique ID",	"Name": "Name of the parent",	"Email ID": "Email ID of the parent",	"Password": "Password hash of the parent",	"Children": \["List of Student IDs attached to the parent"\],} |
| :---- |

#### 

#### Functions

- Authentication  
  - Create/Edit/Delete parent users  
  - Attach students to parents  
  - Login using OTP \+ Mobile number  
- Read access to school calendar (See calendar related function in School Admin)  
- Option to view multiple children’s record if more than one child is attached to the parent account  
- View results of exams, class average and reports of the child  
- View targeted notifications from school/app admins/teachers  
- View live location of the bus  
- Receive absence notification on SMS  
- Fee reminder  
- Payment gateway for fee payment  
- Download circulars and reports which are issued from the school/app admin/teachers for a child

#### Managed By

##### Super Admin

- Add/edit/delete/view parents  
- Edit schema details of parents

##### App Admin

- Add/edit/delete/view parents  
- Edit schema details of parents

##### School Admin

- Add/edit/delete/view parents  
- Edit schema details of parents

### Driver

#### Schema (Initial)

| {	"ID": "Unique ID",	"Name": "Name of the driver",	"Email ID": "Email ID of the driver",       “Mobile number”: “Contact number of the driver”,	"Password": "Password hash of the driver",	"Bus Licence No": "Licence number of the bus",} |
| :---- |

#### Functions

- Create driver user  
- Edit driver user fields  
- Delete driver user  
- Login for driver  
- Start location tracking (start continuously fetching location/websocket)  
- Stop location tracking (stop fetching location/websocket)  
- Broadcast live location  
- Publish location to an endpoint usable by logged in and authorized school, student, parent, teacher and the admins

#### Managed By

##### Super Admin

- Add/edit/delete/view drivers  
- Edit schema details of drivers

##### App Admin

- Add/edit/delete/view drivers  
- Edit schema details of drivers

##### School Admin

- Add/edit/delete/view drivers  
- Edit schema details of drivers

# Report

1. Quiz  
   1. Multi answer quiz option integrity.  
   2. General Add  
      1. Time taken for each answer marking\!  
      2. Allotted time for this question  
      3. Mark for each Question for each  
2. Competition  
   1. General Add:  
      1. Description for Competition   
           
3. Class  
   1. Categories like Upper Primary, Lower Primary, High School, Higher Secondary etc…  
4. Exam:   
   1. Should we add a type field too ? (Mainly for analysis purpose) Like Major Exam, Mid term Exam, Unit Test

5. Curriculum Mapping:   
   1. Do we need an "academicYear" field ?  
6. Notification:   
   1. Assets also needed it seems for notification, (optional)

7. App Admin:  
   1. [Analytics](https://docs.google.com/document/d/1ms9LVUNoD0AsUqMlJ3Rq0PJf4qYwKYUModFaLLE4OE4/edit?disco=AAABzppPX1M) :  
      1. There are some categories already mentioned there, in addition to that  
         1. Inter-School Activity & Content Performance  
         2. Top Performing Quizzes/Competitions: Track which system-wide quizzes or inter-school competitions have the highest participation rates and average scores.  
         3. Parent/Student Engagement Metrics  
            1. Notification Response Rate: Track the overall delivery vs. read/view rate for system-wide notifications (e.g., app-level announcements, fee reminders).  
            2. Parent App Activity: Metrics on how often parents log in to view child records (including time of engagement), bus locations, or pay fees (aligned with Parent functions).  
8. School Admin:  
   1. Create calendar for teachers/students   
   2. [Track Progress](https://docs.google.com/document/d/1ms9LVUNoD0AsUqMlJ3Rq0PJf4qYwKYUModFaLLE4OE4/edit?disco=AAABzppPX1Q) :   
      	To get a full view of a student's performance. Including:  
      1. Academic Records: Viewing their marks from past exams and quizzes.  
         2. Attendance: Monitoring their attendance history (present, absent, half-day).  
         3. Reports: Generating a report basis on these above entities.  
   3. [Engagement Analytics](https://docs.google.com/document/d/1ms9LVUNoD0AsUqMlJ3Rq0PJf4qYwKYUModFaLLE4OE4/edit?disco=AAABzppPX1I)   
      1. The document currently includes the Notification Response Report. This should be expanded to also cover the Fee Reminder Notification engagement and subsequent actions.  
   4. All function of school admin \+ Teacher Functions   
9. Teacher:  
   1. Schema contains a list of Class IDs. We assume the Class Teacher can be derived from this, but is there a requirement to include an `isClassTeacher` flag specific to the academic year?  
   2. [Manage assigned classes](https://docs.google.com/document/d/1ms9LVUNoD0AsUqMlJ3Rq0PJf4qYwKYUModFaLLE4OE4/edit?disco=AAABzppPX1U)  
      1. Teachers can technically perform all assigned actions, such as adding posts, taking attendance, and posting quizzes but these actions are restricted to the classes they are specifically assigned to. Additionally, each section requires filtering with a class option.  
   3. Can add/edit/delete/update community post of her/his own

    


10. Students:  
    1. View attendance, assignment (view, edit), subject resources,marks, timetable, quiz result,view/interact with community post  
11. Parents:  
    1. View attendance also   
12. Bus Driver:   
    1. Bus ID in the driver field will be dynamic. The driver is not assigned to a bus, but the bus is assigned to a driver with a Secret 4 digit PIN, which will be shared by admin to driver specific. 

# Doubts

## Doubts

### App Admin

#### Analytics:

- what metrics to use for analytics  
- what to analyze under app admin  
- how the analysis is done

### School Admin

#### Track progress

- What progress to track  
- How is it tracked?

#### Engagement analytics

- what to track  
- how to track  
- how is it done

### Teachers

#### Manage assigned classes

- what to manage

#### Analytics

- what to analyze  
- how to analyze  
- what metrics to use for analysis

## Aura points

- What is it  
- How is it earned  
- What is the purpose  
    
* **What to Analyze & What Metrics to Use:**  
  * **System Usage & Health:**  
    * Track **Active Schools** and **Active Users grouped by role** (Super Admin, App Admin, School Admin, Teacher, Student, Parent, Driver) to monitor platform access, including community feature usage.  
  * **Activity & Content Performance (Community Focus):** Monitor system-wide and inter-school activities posted in the community space:  
    * **Inter-School Activity & Content Performance:** Track overall participation, traffic, and impact of content (global announcements, shared resources) across all schools.  
    * **Top Performing Quizzes/Competitions:** Track system-wide quizzes or inter-school competitions (managed and posted by App Admin) with the highest participation rates, average scores, and overall engagement in the community feed.  
  * **Parent/Student Engagement Metrics:** Focus on how users interact with communication features:  
    * **Notification Response Rate:** Track the overall delivery vs. read/view rate for system-wide notifications and announcements (e.g., app-level announcements, fee reminders) often displayed in a feed-like community space.  
    * **Parent App Activity:** Metrics on how often parents log in to view child records, bus locations, **or interact with announcements/circulars** posted in their feed.  
* **How the Analysis is Done:**  
  * Data is aggregated across all schools daily, monthly, and weekly.  
  * Includes: Daily Usage Report (peak usage time, most used APIs including community post/interaction APIs), Performance Tracking (ranking quizzes/competitions by participation), and Engagement Tracking (monitoring delivery, view, and subsequent action for role-based communications).

School Admin: Track Progress

* **What Progress to Track & How is it Tracked?**  
  * **What to Track:**  
    * **Academic Records:** Marks from past exams and quizzes (Major Exams, Mid-term Exams, Unit Tests).  
    * **Attendance:** Monitoring the student’s attendance history (present, absent, half-day).  
    * **Reports:** Generating a comprehensive report based on collected academic and attendance entities.  
  * **Reports:** Generating comprehensive, customizable reports and detailed analytics dashboards based on collected academic performance data (e.g., test scores, grades, subject-wise analysis), attendance records (e.g., daily attendance, absenteeism rates, tardiness trends), and behavioral records. These reports will facilitate informed decision-making by school administrators, teachers, and parents.  
  * **How it is Tracked:** Progress is tracked by linking records to various dimensions for filtering and analysis:  
    * Class-wise  
    * Subject-wise  
    * Teacher-wise

School Admin: Engagement Analytics

* **What to Track, How to Track, & How is it Done?**  
  * **What to Track:** The focus is on communication effectiveness and subsequent user action:  
    * **Notification Response Report:** Tracks the delivery and viewing status of role-based notifications (targeting parents, students, teachers, drivers), including general announcements and circulars posted in the school's communication stream.  
    * **Fee Reminder Engagement:** Tracks whether the user proceeded to the payment gateway after viewing a fee reminder notification, expanding the scope beyond just viewing.  
  * **How to Track / How is it Done:** Tracking is performed by logging specific user actions within the system:  
    * Delivery status (time notification was delivered).  
    * View status (time the notification/announcement was read).  
    * Subsequent actions (e.g., clicking a link to the payment gateway or a school event page).

Teachers: Manage Assigned Classes

* **What to Manage?** Teachers manage their assigned classes, subjects, and students, with significant content generation and community interaction responsibilities, all restricted to their mapped groups:  
  * **Content and Content Management:**  
    * **Subject Teacher Dashboard Functions:**  
      1. Adding, editing, deleting, and viewing tests, assignments, and quizzes.  
      2. Adding, editing, deleting, and viewing subject resources (file attachments).  
      3. Uploading student marks for major and unit exams.  
  * **Classroom Administration:**  
    * **Class Teacher Dashboard Functions:**  
      1. Viewing the entire calendar for the class.  
      2. Marking and Unmarking student attendance (editable for 30 minutes before auto-submission).  
      3. Editing the classroom calendar.  
  * **Community and Communication Management (Restricted to Assigned Groups):**  
    * **Teacher Posts:** Adding, editing, deleting, and updating their own community posts/updates for their assigned groups.  
    * **Moderation:** Holding a moderator role to approve or reject student posts in the community feed to ensure content is appropriate.  
    * **Q\&A Support:** Providing real-time Q\&A support in discussion boards (e.g., Stack Overflow style), actively managing the community-driven learning environment.

Teachers: Analytics

* **What to Analyze, How to Analyze, & What Metrics to Use for Analysis?** Teachers analyze the performance of their classes and subjects using these reporting tools:  
  * **Generate Subject-wise Reports:** Detailed performance reports specific to the subjects they teach.  
  * **Generate Class Performance Reports:** Comprehensive reports on the overall performance of their assigned classes.  
  * **Class Dashboard Display Metrics:** Real-time metrics displayed in the dashboard for quick analysis:  
    * Attendance percentages.  
    * Class averages.  
    * Lists of top and bottom performing students.

Aura Points (Gamified Community Engagement)

Aura points are awarded to students for participation in various community activities, such as quizzes and engagements. Students receive 5 aura points for each correct answer in a quiz. Additionally, students who achieve wins in school sports or arts competitions will also be granted aura points; these points will be added by the system administrators.

Initially, the primary sources for students to earn aura points will be quiz participation- (For quizzes conducted by schools and Letuic \- 2 point for every correct answer and extra 2 for fastest first 15 students) ,Event participation (Conducted by both school and letuic \- extra boost if prize won), No fail in class Attendance (Aura points addition if successfully attended classes without fail \-2 points per day),

**Future expansion**

* **What is it, How is it Earned, & What is the Purpose?**  
  * **What is it:** The **Aura score** is a gamified point system for students, serving as a progress and achievement metric displayed on their personal dashboard.  
  * **How is it Earned (Community Focus):** It is directly linked to contributions and high-quality participation:  
    * Students earn an **Aura score for contributions** in discussion forums and community-related activities.  
    * **Verified answers** in the discussion forums provide a significant **Aura boost**, rewarding helpfulness and accurate knowledge sharing within the peer community.  
    * **Badges** are awarded for top performance in quizzes and other system-wide activities.  
  * **Purpose:** The main goal is to **foster student collaboration, creativity, and engagement** by incentivizing positive contributions and assistance within the discussion forums, linking participation directly to a student's displayed progress and achievements.


  The Aura score is an accumulating score tied to a student's positive, valuable participation within the platform's learning and community features. The calculation is based on three main earning mechanisms:

  1\. Contributions (Base Earning)


  This is the foundational way a student builds their Aura score, rewarding active engagement in the platform's community and content consumption.

* **Mechanism:** Students "Earn Aura score for contributions," meaning points are awarded for basic, productive interactions.  
* **Examples of Calculation:**  
  * **Simple Post:** Adding a new thread to a **Discussion Forum** or posting an insightful update in the **Community Feed** might earn **\+5 Aura Points**.  
  * **Resource Access:** Viewing a **Subject Resource** (file attachment) added by a teacher or accessing an **Assignment** page might earn **\+1 Aura Point** (to incentivize using learning materials).  
  * **Basic Q\&A Reply:** Posting a non-verified response to a question in a discussion board might earn **\+2 Aura Points**.

2\. Verified Answers (The Boost)

This is a critical modifier that awards a significant "boost" for providing high-quality, verified information, directly promoting peer-to-peer learning and accuracy.

* **Mechanism:** "Verified answers \= Aura boost." This suggests a multiplier or substantial fixed bonus for the most valuable contributions, making quality more rewarding than mere quantity.  
* **Examples of Calculation:**  
  * **Successful Verification:** If a student answers a question in the Discussion Forum, and that answer is **verified** as correct (e.g., marked by the Teacher-Moderator), the student receives the standard base points *plus* a substantial boost.  
    * *Scenario:* A student posts an answer (+2 Aura base). A teacher marks it as verified. **Aura Calculation: \+2 Base Points \+ 15 Aura Boost \= \+17 Total Aura Points.**  
  * **Top Peer Answer:** If the system tracks which of the student answers receive the most 'Helpful' votes from other students, the top answer might receive a similar boost.

3\. Achievements (Badges and Rewards)

This mechanism awards large, one-time bonuses for exceptional performance and achievement, significantly moving a student's overall score.

* **Mechanism:** "Badges for top performers/quizzes." The score is directly linked to the student's progress and achievements within the core academic modules.  
* **Examples of Calculation:**  
  * **Quiz Achievement:** Placing in the top 3 of a system-wide or class **Quiz** might award a Badge, which carries a large Aura bonus.  
    * *Scenario:* A student finishes 1st in the weekly math quiz. **Aura Calculation: \+50 Aura Points and unlocks the "Math Master" Badge.**  
  * **Completion/Milestones:** Completing all assigned **Assignments** or viewing all **Subject Resources** for a month might award a Milestone Badge.  
    * *Scenario:* **Aura Calculation: \+25 Aura Points and unlocks the "Resource Explorer" Badge.**

The final Aura score displayed on the Student Dashboard is the total accumulation of all points earned from these three mechanisms.

**Doubts 06/03/2026**  
**\- What are the explicit community post types (vedio/image/link etc).**

**Community**

* Who can approve or reject student posts?  
  1. Class teacher, School Admin, App Admin (If its against our policy)  
* Can teachers moderate only assigned classes or all school posts?  
  1. Assigned Class  
* For student/parent interaction in community post, what actions are allowed?  
  1. For Parents: Include an acknowledgement option for communication, such as a unique Letuic icon (similar to the 'like' button on Instagram or the 'ack' feature in Slack).  
  2. For Students: Students will have the same reaction options as parents. A key addition for them is the Aura points system within reply threads. These points will be awarded by the post owner or the Letuic team for answers that are correctly reported and those that receive the most upvotes.

     

     

**School Admin**

**Notifications**

* Can notification be edited/deleted after delivery?  
  1. Can be edited and deleted if needed, if it is within 15 mins.  
* Is there any time window for editing notifications?  
  1. Yes, 15 Mins.  
* Should delivery/read tracking be visible school-wise and role-wise?  
  1. Yes

**Parents**

**Assignments and Attendance**

* Can a parent only view assignments and attendance for their child?  
  1. Parents action include assignment view and submission window(Same like student), View Attendance, pay pending fees, and community post.  
* For multiple children, should attendance and assignments be filterable child-wise?  
  1. We are currently planning to implement a user interface change that allows parents to easily switch between their children's profiles. Parents will be able to see both of their children in the UI, select one, and view their complete history. To switch to the other child, they will simply select the other profile. This functionality will be similar to how multiple accounts are handled in applications like Instagram or WhatsApp.

**Bus Tracking**

**Live Location**

* What should be the location update interval from the driver app?  
  1. Can we use condition basis interval here ?  
     Like if the bus is moving above 20 Kmph then every 10 sec and if its between 10 and 20 kmph then 20 sec. If the bus is idle then 30 or 40 sec interval.   
* After how much idle time should live tracking auto-stop?  
  1. Like more than 30 \- 40 Mins with no active movement, we can auto stop the tracking for that current session  
* Should school admin deleting tracking remove current live location only or all tracking data?  
  1. Nobody should be able to delete the tracking. 

**Fee Payment**

**Payment and Reminder**

* How many fee reminders can be sent before the due date?  
  1. 3 will be fine here, 	  
     1. Just after the payment pending was initiated,  
     2. 3 days before due  
     3. 1 day before due  
* Should the reminder be only an app notification or also an SMS?  
  1. Push notification and in app reminder tag is fine, but need to track if it's delivered or not. If more than 2 notification was not delivered, need to send SMS   
* After payment failure, should the fee status remain unpaid until successful confirmation?  
  1. Yes, fee status must remain UNPAID until payment confirmation from gateway.

**Payment gateway and SMS provider ?**   
Okay, let's move forward with Razorpay or Eazebuzz (Not sure how they handle the fallback) for handling payments. For the SMS part, could you please look into the options and suggest the one that's the most trustworthy and budget-friendly, making sure it follows all the best practices?

# Domain / Microservice

| Domain / Microservice | Core Entities (Schemas) | Key Functions / Capabilities | Rationale for Grouping (Bounded Context) |
| ----- | ----- | ----- | ----- |
| **1\. Identity & User Management** | Super Admin, App Admin, School Admin, Teacher, Student, Parent, Driver (Initial Schemas) | User creation, editing, and deletion for all roles. Login and authentication management. Allowing/revoking system access. | Handles the foundational concern of who can access the system and how they are identified (Authentication & Authorization). |
| **2\. School & Class Structure** | Class, School Admin (Schema for school details) | School account creation and management. Creating/managing class records. Calendar management (holidays, events) for teachers. | Manages the core organizational hierarchy and scheduling framework of the school system. |
| **3\. Academic Records & Grading** | Exams, Student Marks | Add/Edit/Delete/View major examination details. Uploading, editing, deleting, and viewing student marks. | Deals specifically with formal academic performance and the recording of grades. |
| **4\. Assessment & Activity** | Quiz, Quiz Response By Students, Competition | Create/Edit/Delete/View system-wide and inter-school quizzes/mock tests. Managing competition details and results. Subject Teacher functions like adding/managing tests, assignments, and quizzes. | Focuses on non-formal and modular academic activities, including student responses and contest results. |
| **5\. Curriculum Mapping** | Curriculum Mapping | Add/edit/delete/view student-subject and teacher-subject mappings. | Manages the relationship between core academic resources (students, subjects, teachers, classes). |
| **6\. Communication & Feed** | Notification | Posting school and system-wide announcements/notices. Managing role-based notifications. Community post creation/management for teachers and students. | Centralizes all forms of communication, announcements, and content feed interactions. |
| **7\. Financial Management** | *(No dedicated schema)* | Setting, editing, deleting, and viewing student fees. Viewing unpaid fees. Fee reminder notifications and payment gateway integration. | Manages the sensitive, specialized business logic of fee collection and financial records. |
| **8\. Logistics & Tracking** | Driver (Initial Schema) | Attendance tracking (Mark/Unmark for student/teacher). Bus route tracking (Start/Stop location tracking, Broadcast live location). | Handles time-sensitive operational data: presence of users and movement of assets (buses). |
| **9\. Reporting & Analytics** | *(No dedicated schema)* | Aggregating and reporting on System Usage, Active Users, Activity & Content Performance, and Parent/Student Engagement Metrics. Generating comprehensive reports on student progress (Academic & Attendance). | Provides dashboards and data summaries by consuming data streams/events from all other services without interfering with their primary functions. |

**Functional API Design**

Endpoints are grouped by domain and subdomain to align with microservice boundaries.

**Common API Conventions:**

* **Base path:** `/api/v1`  
* **Auth:** Bearer token from successful auth.  
* **Tenant isolation:** `schoolId` scoping is enforced on all school-bound resources.  
* **Timestamps:** ISO 8601 UTC.  
* **Pagination query:** `page`, `pageSize` where list size can grow.

**Microservice Architecture Requirements:**

* Service boundaries are domain-owned and independently deployable (no shared runtime coupling).  
* Database-per-service ownership is enforced; cross-domain data access happens only via APIs/events.  
* Contract-first API design is required with versioned endpoints and backward-compatible changes.  
* Idempotency is required for retry-prone write operations (especially tracking, notifications, payments).  
* Authorization is role-based and tenant-scoped (`schoolId`) for every request path.  
* Observability is mandatory: structured logs, request correlation IDs, metrics, and distributed tracing.  
* Resilience patterns are required: timeouts, retries with backoff, circuit breaking, and rate limiting.  
* Async integration uses event-driven communication for analytics and notification status propagation.  
* Data consistency across services follows eventual consistency patterns with audit trails.  
* CI/CD requires per-service automated tests, security checks, and independent release pipelines.

**1\. Identity & User Management Service**  
Subdomain: Authentication  
`POST /api/v1/auth/login`

* **Associated roles:** Super Admin, App Admin, School Admin, Teacher, Student, Driver  
* **Function:**  
  * Authenticates by email and password hash verification.  
  * Returns access token and role context used by downstream authorization.  
* **Request payload:**

{  
  "email": "admin@school.com",  
  "password": "plain-text-at-client-side-over-tls"  
}

* **Response (200):**

{  
  "userId": "usr\_123",  
  "role": "SCHOOL\_ADMIN",  
  "access": {  
    "status": "ALLOWED",  
    "reason": null  
  },  
  "token": "jwt-token",  
  "expiresAt": "2026-03-06T12:30:00Z"  
}

`POST /api/v1/auth/parent/request-otp`

* **Associated roles:** Parent  
* **Function:**  
  * Initiates OTP login flow using mobile number.  
  * Creates short-lived challenge and dispatches OTP.  
* **Request payload:**

{  
  "mobileNumber": "+919999999999"  
}

* **Response (200):**

{  
  "challengeId": "otp\_ch\_001",  
  "expiresAt": "2026-03-06T10:10:00Z"  
}

`POST /api/v1/auth/parent/verify-otp`

* **Associated roles:** Parent  
* **Function:**  
  * Verifies OTP and logs in parent.  
  * Returns role token and linked children IDs.  
* **Request payload:**

{  
  "challengeId": "otp\_ch\_001",  
  "otp": "123456"  
}

* **Response (200):**

{  
  "userId": "par\_01",  
  "role": "PARENT",  
  "children": \["stu\_01", "stu\_02"\],  
  "token": "jwt-token",  
  "expiresAt": "2026-03-06T12:30:00Z"  
}

Subdomain: Access Control  
`PATCH /api/v1/access-control/users/{userId}`

* **Associated roles:** Super Admin  
* **Function:**  
  * Allow/revoke access for App Admin and their managed users (schools, students, parents, teachers, drivers).  
  * Stores reason for auditability.

Subdomain: Role User Management (Non-SuperAdmin)  
`POST /api/v1/users/{role}`

* **Associated roles:**  
  * **App Admin:** `school-admin`, `teacher`, `student`, `parent`, `driver`  
  * **School Admin:** `teacher`, `student`, `parent`, `driver`  
* **Function:**  
  * Creates user accounts for managed roles.  
  * Stores password hash; enforces role hierarchy.  
* **Request payload:**

{  
  "name": "Jane Teacher",  
  "email": "jane@school.com",  
  "mobileNo": "+919111111111",  
  "password": "plain-text-over-tls",  
  "schoolId": "sch\_001",  
  "classes": \["class\_10A"\],  
  "children": \["stu\_01"\],  
  "busLicenceNo": "KL-01-12345"  
}

* **Response (201):**

{  
  "id": "usr\_900",  
  "role": "TEACHER",  
  "schoolId": "sch\_001",  
  "createdAt": "2026-03-06T10:40:00Z"  
}

`PATCH /api/v1/users/{role}/{id}`

* **Associated roles:** App Admin, School Admin, Super Admin (for managed roles)  
* **Function:**  
  * Updates editable fields for target role schema.  
  * Rejects field edits outside schema ownership.  
* **Request payload:**

{  
  "name": "Jane T.",  
  "email": "jane.t@school.com",  
  "classes": \["class\_10A", "class\_10B"\]  
}

* **Response (200):**

{  
  "id": "usr\_900",  
  "updatedFields": \["name", "email", "classes"\],  
  "updatedAt": "2026-03-06T10:45:00Z"  
}

`DELETE /api/v1/users/{role}/{id}`

* **Associated roles:** App Admin, School Admin, Super Admin (for managed roles)  
* **Function:**  
  * Deactivates or deletes user account based on policy mode.  
  * Prevents deletion if policy dependencies exist (example: active bus tracking session).

`GET /api/v1/users/{role}/{id}GET /api/v1/users/{role}`

* **Associated roles:** App Admin, School Admin, Super Admin (for managed roles)  
* **Function:**  
  * Returns role-specific user details or filtered user list.  
* **List query params:**  
  * `schoolId`, `classId`, `status`, `page`, `pageSize`

Subdomain: Bulk User Import  
**`POST /api/v1/users/{role}/imports`**

* **Associated roles:** School Admin  
* **Function:**  
  * Imports students/teachers/parents/drivers using CSV.  
  * Performs row-level validation and returns accepted/rejected counts.

**2\. School & Class Structure Service**  
Subdomain: School Accounts  
`POST /api/v1/schools`

* **Associated roles:** App Admin  
* **Function:** Creates school account.  
* **Request payload:**

{  
  "name": "Green Valley School",  
  "address": "Kochi",  
  "contact": "+914444444444",  
  "email": "info@gvs.edu",  
  "website": "https://gvs.edu"  
}

* **Response (201):**

{  
  "id": "sch\_001",  
  "name": "Green Valley School"  
}  
`PATCH /api/v1/schools/{schoolId}` /   
`DELETE /api/v1/schools/{schoolId}` /   
`GET /api/v1/schools/{schoolId}` /   
`GET /api/v1/schools`

* **Associated roles:** App Admin  
* **Function:** Manage and view school account details.

Subdomain: Class Management  
`POST /api/v1/classes`

* **Associated roles:** School Admin, App Admin  
* **Function:** Creates class under a school and optionally assigns class teacher.  
* **Request payload:**

{  
  "schoolId": "sch\_001",  
  "className": "10-A",  
  "classTeacherId": "tea\_01"  
}

* **Response (201):**

{  
  "id": "class\_10A",  
  "schoolId": "sch\_001",  
  "className": "10-A",  
  "classTeacherId": "tea\_01"  
}

`PATCH /api/v1/classes/{classId}` /   
`DELETE /api/v1/classes/{classId}` /   
`GET /api/v1/classes/{classId}` /   
`GET /api/v1/classes`

* **Associated roles**: School Admin, App Admin, Teacher (read for assigned classes), Student (read own class), Parent (read child class)  
* **Function**:  
  * Full class lifecycle and class metadata retrieval.

Subdomain: Calendar Management  
`POST /api/v1/calendars`

* **Associated roles**: School Admin  
* **Function**: Creates calendar for teacher/class context.

`POST /api/v1/calendars/{calendarId}/events`

* **Associated roles:** School Admin, Teacher (class teacher scope)  
* **Function:** Adds event (half-day, annual day, holiday, other school event).

`PATCH /api/v1/calendars/{calendarId}` /   
`DELETE /api/v1/calendars/{calendarId}` /   
`GET /api/v1/calendars/{calendarId}` /   
`GET /api/v1/calendars /`  
`PATCH /api/v1/calendars/{calendarId}/events/{eventId}` /   
`DELETE /api/v1/calendars/{calendarId}/events/{eventId}` /   
`GET /api/v1/calendars/{calendarId}/events`

* **Associated roles:**  
  * **School Admin:** full access  
  * **Teacher:** view and edit classroom calendar for assigned class  
  * **Parent:** read access  
  * **Student:** read access for own class

Subdomain: Student Timetable  
`GET /api/v1/students/{studentId}/timetable`

* **Associated roles:** Student, Parent (child's timetable), Teacher (assigned class scope), School Admin  
* **Function:** Returns the class timetable for the student derived from their curriculum mapping.

**3\. Academic Records & Grading Service**  
Subdomain: Examination Management  
`POST /api/v1/exams`

* **Associated roles:** School Admin  
* **Function:** Creates exam and schedule entries per subject.  
* **Request payload:**

{  
  "name": "Mid Term",  
  "dates": \[  
    {  
      "date": "2026-09-10",  
      "subject": "Mathematics",  
      "syllabus": "Algebra and Geometry",  
      "time": "10:00-12:00"  
    }  
  \]  
}

* Response (201):

{  
  "id": "exam\_001",  
  "name": "Mid Term"  
}

`PATCH /api/v1/exams/{examId}` / 

`DELETE /api/v1/exams/{examId}` / 

`GET /api/v1/exams/{examId}` / 

`GET /api/v1/exams`

* Associated roles:  
  * School Admin: full access  
  * Teacher/Student/Parent: read access where relevant

Subdomain: Student Marks  
`POST /api/v1/marks`

* **Associated roles:** School Admin, Teacher  
* **Function:**  
  * Creates marks entry for a student against an exam.  
  * Supports major exams and unit exams as described in teacher requirements.  
* **Request payload:**

{  
  "studentId": "stu\_01",  
  "examId": "exam\_001",  
  "marks": \[  
    {  
      "subject": "Mathematics",  
      "marks": 88  
    }  
  \]  
}

* **Response (201):**

{  
  "id": "mark\_001",  
  "studentId": "stu\_01",  
  "examId": "exam\_001"  
}

`POST /api/v1/marks/imports`

* **Associated roles:** School Admin  
* **Function:** Uploads CSV for marks ingestion.

`PATCH /api/v1/marks/{markId}` / 

`DELETE /api/v1/marks/{markId}` / 

`GET /api/v1/marks/{markId}` / 

`GET /api/v1/marks`

* **Associated roles:**  
  * School Admin: full access  
  * Teacher: create/view/update for assigned classes  
  * Student/Parent: read own/child marks

Subdomain: Student Progress View  
`GET /api/v1/students/{studentId}/progress`

* **Associated roles:** School Admin, Teacher, Student, Parent  
* **Function:**  
  * Returns unified academic summary using exams \+ quiz performance \+ class averages.  
  * Supports dimensions requested in document: class-wise, subject-wise, teacher-wise.  
* **Query params:**  
  * `view=class|subject|teacher`  
  * `classId`, `subject`, `teacherId`

**4\. Assessment & Activity Service**

Subdomain: Quiz Management

`POST /api/v1/quizzes`

* **Associated roles:** App Admin, School Admin, Teacher (assigned class scope)  
* **Function:**  
  * Creates quiz/mock test for target schools/classes with schedule and point-based questions.  
  * Stores per-question points and correct answer OID.  
* **Request payload:**

{  
  "name": "Science Weekly Quiz",  
  "questions": \[  
    {  
      "qid": "q1",  
      "question": "Water formula?",  
      "options": \[  
        { "oid": "o1", "option": "H2O" },  
        { "oid": "o2", "option": "CO2" }  
      \],  
      "answer": "o1",  
      "point": 2,  
      "allottedTimeSeconds": 45  
    }  
  \],  
  "startDateTime": "2026-03-10T09:00:00Z",  
  "endDateTime": "2026-03-10T09:30:00Z",  
  "schoolId": \["sch\_001"\],  
  "classId": \["class\_10A"\]  
}

* **Response (201):**

{  
  "id": "quiz\_001",  
  "name": "Science Weekly Quiz"  
}  
`PATCH /api/v1/quizzes/{quizId}` /   
`DELETE /api/v1/quizzes/{quizId}` /   
`GET /api/v1/quizzes/{quizId}` /   
`GET /api/v1/quizzes`

* **Associated roles:**  
  * App Admin: full scope (multi-school)  
  * School Admin: school scope  
  * Teacher: assigned classes only  
  * Student: read available quizzes

Subdomain: Quiz Attempt & Evaluation  
`POST /api/v1/quizzes/{quizId}/responses`

* **Associated roles: Student**  
* **Function:**  
  * Accepts selected options for each question.  
  * Computes score from question points and correct OID.  
  * Captures timing signals mentioned in report (`timeTakenPerAnswer`).  
* **Request payload:**

{  
  "studentId": "stu\_01",  
  "answers": \[  
    {  
      "qid": "q1",  
      "oid": "o1",  
      "timeTakenSeconds": 12  
    }  
  \]  
}

* **Response (201):**

{  
  "id": "qres\_001",  
  "quizId": "quiz\_001",  
  "studentId": "stu\_01",  
  "calculatedScore": 2,  
  "answers": \[  
    {  
      "qid": "q1",  
      "oid": "o1"  
    }  
  \]  
}

`GET /api/v1/quizzes/{quizId}/responses/{responseId}`

`GET /api/v1/students/{studentId}/quiz-results`

* **Associated roles:** Student (own), Parent (child), Teacher (assigned), School Admin, App Admin  
* **Function:** Returns quiz results and scoring breakdown for reporting.

Subdomain: Competition Management  
`POST /api/v1/competitions`

* **Associated roles:** App Admin, School Admin  
* **Function:** Creates competition with schedule, venue, description.  
* **Request payload:**

{  
  "name": "Inter School Arts Fest",  
  "dateTime": "2026-11-04T10:00:00Z",  
  "venue": "City Hall",  
  "description": "Annual inter school event"  
}

* Response (201):

{  
  "id": "comp\_001"  
}

`PATCH /api/v1/competitions/{competitionId}` / 

`DELETE /api/v1/competitions/{competitionId}` / 

`GET /api/v1/competitions/{competitionId}` / 

`GET /api/v1/competitions`

* **Associated roles:** App Admin, School Admin, Teacher/Student/Parent (view)

`POST /api/v1/competitions/{competitionId}/results`

* **Associated roles:** App Admin, School Admin  
* **Function:** Records placements and winner target (student or school) with competition type.  
* **Request payload:**

{  
  "results": \[  
    {  
      "position": "First",  
      "studentOrSchoolId": "stu\_01",  
      "typeOfCompetition": "Individual"  
    }  
  \]  
}

* **Response (200):**

{  
  "competitionId": "comp\_001",  
  "resultsUpdated": true  
}

Subdomain: Teacher Learning Content (Assigned Scope)

`POST /api/v1/tests` / 

`PATCH /api/v1/tests/{testId}` / 

`DELETE /api/v1/tests/{testId}` / 

`GET /api/v1/tests`

* **Associated roles:** Teacher, School Admin  
* **Function:** Manage tests for assigned classes/subjects only.

`POST /api/v1/assignments` /   
`PATCH /api/v1/assignments/{assignmentId}` /   
`DELETE /api/v1/assignments/{assignmentId}` /   
`GET /api/v1/assignments`

* **Associated roles:** Teacher, School Admin, Student (view), Parent (view child assignments)  
* **Function:** Manage and view assignments by class filter.

`POST /api/v1/subject-resources` /   
`PATCH /api/v1/subject-resources/{resourceId}` /   
`DELETE /api/v1/subject-resources/{resourceId}` /   
`GET /api/v1/subject-resources`

* **Associated roles:** Teacher, School Admin, Student (view), Parent (view child resources)  
* **Function:**  
  * Manages file-based subject resources.  
  * Enforces class/subject mapping before publish.

**5\. Curriculum Mapping Service**  
Subdomain: Student-Subject-Teacher Mapping  
`POST /api/v1/curriculum-mappings`

**Associated roles:** School Admin

**Function:**

* Creates mapping for school, class, subject, teacher, and students.  
* Serves as authorization backbone for teacher-restricted actions.

**Request payload:**  
{  
  "schoolId": "sch\_001",  
  "subject": "Mathematics",  
  "classId": "class\_10A",  
  "teacherId": "tea\_01",  
  "students": \["stu\_01", "stu\_02"\],  
  "academicYear": "2026-2027"  
}

**Response (201):**  
{  
  "id": "map\_001"  
}

`PATCH /api/v1/curriculum-mappings/{mappingId}` /   
`DELETE /api/v1/curriculum-mappings/{mappingId}` /   
`GET /api/v1/curriculum-mappings/{mappingId}` /   
`GET /api/v1/curriculum-mappings`

* **Associated roles:** School Admin, Teacher (read assigned mappings)  
* **Function:** Full mapping lifecycle and scope retrieval.

**6\. Communication & Feed Service**  
Subdomain: Notifications  
`POST /api/v1/notifications`

* **Associated roles:** App Admin, School Admin, Teacher (assigned scope)  
* **Function:**  
  * Creates role-targeted notifications for one or multiple schools.  
  * Supports title/content and optional assets as noted in report.  
* **Request payload:**

{  
  "schoolId": \["sch\_001"\],  
  "targetRoles": \["PARENT", "STUDENT"\],  
  "content": {  
    "title": "Fee Reminder",  
    "content": "Please pay before due date"  
  },  
  "assets": \[  
    {  
      "name": "Circular",  
      "url": "https://storage.example.com/circulars/c1.pdf"  
    }  
  \]  
}

* **Response (201):**

{  
  "id": "not\_001",  
  "queuedReceivers": 350  
}  
`PATCH /api/v1/notifications/{notificationId}` /   
`DELETE /api/v1/notifications/{notificationId}` /   
`GET /api/v1/notifications/{notificationId}` /   
`GET /api/v1/notifications`

* **Associated roles:** App Admin, School Admin, Teacher (scope-limited), Parent/Student/Driver (view targeted notifications)

`POST /api/v1/notifications/{notificationId}/responses`

* **Associated roles:** Parent, Student, Teacher, Driver  
* **Function:**  
  * Updates per-receiver notification status using Notification schema response fields.  
  * Captures delivery/read timestamps (`Delivered at`, `Read at`) for engagement reporting.

Subdomain: Announcements  
`POST /api/v1/announcements`  
`PATCH /api/v1/announcements/{announcementId}`  
`DELETE /api/v1/announcements/{announcementId}`  
`GET /api/v1/announcements`

**Associated roles:**

* **App Admin:** all schools or school-specific  
* **School Admin:** school role-based announcements  
* **Teacher:** assigned group posts/updates  
* **Student/Parent:** read and interact

**Function:**

* Publishes notices/announcements to communication feed.  
* Supports role-based targeting.

Subdomain: Community Posts  
`POST /api/v1/community-posts`  
`PATCH /api/v1/community-posts/{postId}`  
`DELETE /api/v1/community-posts/{postId}`  
`GET /api/v1/community-posts`

* **Associated roles:** Teacher, Student, Parent, School Admin  
* **Function:**  
  * Enables teacher-owned post CRUD in assigned groups.  
  * Allows student/parent feed interaction as described.

`POST /api/v1/community-posts/{postId}/moderation`

* **Associated Roles:** Teacher, School Admin  
* **Function:** Supports teacher moderation responsibilities in assigned groups. Approves or rejects student posts for community feed safety and relevance.

`POST /api/v1/community-posts/{postId}/replies`

* **Associated Roles:** Teacher, Student, Parent  
* **Function:** Supports discussion-style interactions and Q\&A replies on community posts. Enables teacher Q\&A support flow described in the requirements notes.

Subdomain: Circulars and Reports Distribution  
`GET /api/v1/children/{studentId}/documents`

* **Associated roles:** Parent  
* **Function:** Lists downloadable circulars/reports issued by school/app admin/teachers for child.

Subdomain: Absence SMS Notification  
`POST /api/v1/notifications/absence-sms`

* **Associated roles:** School Admin, Teacher  
* **Function:**  
  * Sends absence SMS to parent based on attendance state.

**7\. Financial Management Service**

Subdomain: Fee Setup & Tracking

`POST /api/v1/fees`

`PATCH /api/v1/fees/{feeId}`

`DELETE /api/v1/fees/{feeId}`

`GET /api/v1/fees`

* Associated roles: School Admin, App Admin (oversight view)  
* Function:  
  * Sets and manages student fee records.  
  * Exposes filtered fee view for admin operations.

`GET /api/v1/fees/unpaid`

* Associated roles: School Admin  
* Function: Returns unpaid fee report by class/student.

Subdomain: Fee Reminder & Payment  
`POST /api/v1/fees/{feeId}/reminders`

* Associated roles: School Admin, App Admin  
* Function: Triggers fee reminder notification for linked parents.

`POST /api/v1/payments/fee-orders`

* **Associated roles:** Parent  
* **Function:** Creates payment intent/order with an external payment gateway.

`POST /api/v1/payments/fee-orders/{paymentOrderId}/confirm`

* **Associated roles:** Parent  
* **Function:** Confirms payment result and updates fee status.

**8\. Logistics & Tracking Service**

Subdomain: Attendance Tracking

`POST /api/v1/attendance/records`

* **Associated roles:** Teacher, School Admin  
* **Function:**  
  * Marks attendance for student/teacher with status (`PRESENT`, `ABSENT`, `HALF_DAY`).  
  * Applies 30-minute edit window before final auto-submit for teacher-marked student attendance.

`PATCH /api/v1/attendance/records/{attendanceBatchId}`

* **Associated roles:** Teacher, School Admin  
* **Function:** Updates/unmarks attendance within permitted edit window.

`GET /api/v1/attendance/students/{studentId}`

* **Associated roles:** School Admin, Teacher, Student, Parent  
* **Function:** Returns attendance history for progress tracking.

Subdomain: Bus Assignment & Driver Session  
`POST /api/v1/bus-assignments`

* **Associated roles:** School Admin, App Admin  
* **Function:**  
  * Assigns bus to driver dynamically using secret 4-digit PIN process.  
* **Request payload:**

{  
  "schoolId": "sch\_001",  
  "busId": "bus\_01",  
  "driverId": "drv\_01",  
  "secretPin": "4821"  
}

Subdomain: Live Location Tracking

`POST /api/v1/driver-tracking/sessions/start`

* **Associated roles**: Driver  
* **Function**: Starts location publishing session.

`POST /api/v1/driver-tracking/sessions/{sessionId}/location`

* **Associated roles:** Driver  
* **Function:** Publishes live location point to authorized consumers.

`POST /api/v1/driver-tracking/sessions/{sessionId}/stop`

* **Associated roles:** Driver  
* **Function:** Stops live tracking session.

`GET /api/v1/bus-tracking/{busId}/live`

* **Associated roles:** School Admin, App Admin, Teacher, Student, Parent  
* **Function:** Returns latest live location for authorized viewers.

`DELETE /api/v1/bus-tracking/{busId}`

* **Associated roles:** School Admin  
* **Function:** Removes tracking visibility/history from user views as per school admin function.

**9\. Reporting & Analytics Service**

Subdomain: App Admin Analytics

`GET /api/v1/analytics/app-admin/usage`

* **Associated roles:** App Admin, Super Admin  
* **Function:** Returns active schools, active users by role, peak usage time, and most used APIs (daily/weekly/monthly).  
* **Query params:** `period=daily|weekly|monthly`

`GET /api/v1/analytics/app-admin/content-performance`

* **Associated roles:** App Admin, Super Admin  
* **Function:** Inter-school activity/content performance. Top performing quizzes/competitions by participation and average score.

`GET /api/v1/analytics/app-admin/engagement`

* **Associated roles**: App Admin, Super Admin  
* **Function**:  
  * Notification response rate (delivery vs read/view).  
  * Parent app activity (logins, child record views, bus views, fee payment actions).

Subdomain: School Admin Analytics  
`GET /api/v1/analytics/schools/{schoolId}/student-progress`

* **Associated roles**: School Admin, Teacher  
* **Function**:  
  * Track student progress using academic \+ attendance datasets.  
  * Filter by class, subject, teacher.  
* **Query params**:  
  * `classId`, `subject`, `teacherId`, `studentId`

`GET /api/v1/analytics/schools/{schoolId}/notification-engagement`

* **Associated roles:** School Admin  
* **Function:**  
  * Notification response report with `deliveredAt`/`readAt`.  
  * Fee reminder engagement and subsequent actions (payment gateway click/paid).

Subdomain: Teacher Analytics  
`GET /api/v1/analytics/teachers/{teacherId}/class-dashboard`

* **Associated roles:** Teacher, School Admin  
* **Function:**  
  * Provides class-level quick metrics: attendance percentage, class average, top performers, bottom performers.  
* **Query params:**  
  * `classId`  
  * `subject`

`GET /api/v1/analytics/teachers/{teacherId}/subject-report`

* **Associated roles:** Teacher, School Admin  
* **Function:**  
  * Subject-wise performance reporting for assigned classes.

Subdomain: Aura Points & Badges

`GET /api/v1/students/{studentId}/aura`

* **Associated roles**: Student, Parent, School Admin, Teacher  
* **Function**:  
  * Returns accumulated aura score and earning breakdown from quiz correctness, fastest attempt boosts, event participation, attendance consistency, verified community answers, and badges.

**Super Admin:**

* Login, access allow/revoke, analytics read.

**App Admin:**

* School lifecycle, user management (managed roles), multi-school announcements/notifications/quizzes/competitions, analytics, fee reminder oversight, driver location view.

**School Admin:**

* School-level user management, classes, calendar/events, attendance, exams/marks, curriculum mapping, announcements/notifications, fee management, bus tracking controls, school analytics.

**Teacher:**

* Assigned-class attendance, classroom calendar edits, tests/assignments/quizzes/resources, student marks upload, community posts, teacher analytics.

**Student:**

* Quiz attempt/results, subject resources access, reports/marks/progress view, attendance view, community interaction, bus live location view, aura view.

**Parent:**

* OTP login, linked children views (attendance/marks/reports), notifications, circular/report downloads, bus live location, fee payment, aura visibility of child.

**Driver:**

* Login, start/stop tracking, publish location.

# SRS

**Software Requirements Specification (SRS) for School Management System**

1\. Introduction

1.1. Purpose

The purpose of this Software Requirements Specification (SRS) is to detail the functional and non-functional requirements for the School Management System, as outlined in the "School Management System \- Letuic" design document. This document serves as the foundation for design, development, and testing, ensuring all stakeholders have a clear understanding of the system's scope and capabilities.

1.2. Scope

The School Management System is a comprehensive platform designed to manage and automate core school operations, including user management, academics (exams, quizzes, marks), class and curriculum mapping, financial management (fees), communication (notifications, announcements), and logistics (bus/route tracking). The system supports multiple user roles with distinct functions and permissions.

1.3. Definitions, Acronyms, and Abbreviations

| Term/Acronym | Definition | Source/Context |
| ----- | ----- | ----- |
| **SRS** | Software Requirements Specification | Standard document |
| **QID/OID** | Question ID / Option ID | Quiz Schema |
| **Super Admin** | Highest level user, manages App Admins and system access. | Roles & Functions |
| **App Admin** | Manages school, student, teacher, parent, and driver accounts across multiple schools. | Roles & Functions |
| **School Admin** | Manages a single school's operations (calendar, fees, exams, users). | Roles & Functions |
| **API** | Application Programming Interface | Analytics section |
| **CSV** | Comma-Separated Values | Used for user/marks upload |

2\. Overall Description

2.1. Product Perspective

The School Management System is a standalone product. It must integrate with an external **Payment Gateway** for fee payments and **SMS service providers** for absence notifications. It must also consume a **location service** (e.g., GPS provider) to track and publish the live location of school buses.

2.2. User Classes and Characteristics

The system supports seven primary user roles, each with specific access and functional requirements:

| User Class | Key Characteristics & Functions | Managed By |
| ----- | ----- | ----- |
| **Super Admin** | Full system access. Can manage all other accounts/schemas. Creates/edits/logs in. Includes all App Admin functions. | System Initialization |
| **App Admin** | Manages school accounts, posts announcements for all schools, creates system-wide quizzes/competitions. Views all student and driver details. | Super Admin |
| **School Admin** | Manages calendar, fees, attendance, examinations, and users within their school. Has access to all School Admin and Teacher functions. | App Admin |
| **Teacher** | Manages assigned classes/subjects. Marks attendance, manages classroom calendar, uploads marks, manages subject resources, assignments, and quizzes. | Super Admin, App Admin, School Admin |
| **Student** | Accesses subject resources, views reports/marks, attempts quizzes, and interacts with community posts. | Super Admin, App Admin, School Admin |
| **Parent** | Views child's records (marks, attendance, reports), receives notifications (SMS absence, fee reminder), views bus live location, and pays fees. | Super Admin, App Admin, School Admin |
| **Driver** | Logs in, starts/stops location tracking, and broadcasts live location. Bus is assigned using a Secret 4 digit PIN. | Super Admin, App Admin, School Admin |

2.3. General Constraints & Operating Environment

* **Development Framework:** Node.js and GraphQL.  
* **Database:** NoSQL (DynamoDB, MongoDB) or a Hybrid Approach (NOT FINALIZED).  
* **Scalability/Infrastructure:** Use of container orchestration (Kubernetes) or simpler deployment methods (connecting EBS) (NOT FINALIZED).  
* **APIs & Data:** The system must be designed using a **Microservice Architecture** with independent, domain-specific services (see Section 3.0).

3\. System Architecture: Microservice Domain Design

The system will be implemented using a Microservice Architecture, organized into the following independent business domains to ensure scalability and maintainability:

* **1\. Identity & User Management:** Manages all user role schemas and authentication/authorization.  
* **2\. School & Class Structure:** Manages school accounts, class structure, and calendar events.  
* **3\. Academic Records & Grading:** Manages formal exam details and student marks (single source of truth).  
* **4\. Assessment & Activity:** Manages all quiz, assignment, and competition logic.  
* **5\. Curriculum Mapping:** Manages student-subject and teacher-subject mappings.  
* **6\. Communication & Feed:** Manages all notifications, announcements, and community posts.  
* **7\. Financial Management:** Manages fee schedules, fee reminders, and payment gateway integration.  
* **8\. Logistics & Tracking:** Manages student/teacher attendance and bus/route live location tracking.  
* **9\. Reporting & Analytics:** Consumes data from other services to generate reports and analytics dashboards.

4\. Functional Requirements

Functional requirements are grouped by the microservice domain they belong to.

4.1. Identity & User Management Requirements

| ID | Requirement Description | Source/Context |
| ----- | ----- | ----- |
| **FR-UM-01** | The system shall allow Super/App/School Admins to Add, Edit, Delete, and View users for their managed roles (Teachers, Students, Parents, Drivers). | Managed By sections |
| **FR-UM-02** | The system shall support Login for all user roles, including OTP \+ Mobile number for Parents. | Parent Functions |
| **FR-UM-03** | The system shall allow Super Admin to Allow/Revoke access for App Admins and all their users (schools, students, parents, teachers, drivers). | Super Admin Functions |
| **FR-UM-04** | The system shall allow Admins to add user accounts based on CSV files. | School Admin Functions |

4.2. School and Class Structure Requirements

| ID | Requirement Description | Source/Context |
| ----- | ----- | ----- |
| **FR-SC-01** | The system shall allow School Admins to Create, View, Edit, and Delete calendars for teachers, and manage calendar events (Add/Edit/Delete/View events like half days, annual day, holidays). | School Admin Functions: Calendar Management |
| **FR-SC-02** | The system shall allow Class Teachers to View the entire class calendar and Edit the classroom calendar. | Teacher Functions: Class teacher dashboard |
| **FR-SC-03** | The system shall allow Parent to have read access to the school calendar. | Parent Functions |
| **FR-SC-04** | The system shall allow Students to view their class timetable. | Student Functions |

4.3. Financial Management Requirements

| ID | Requirement Description | Source/Context |
| ----- | ----- | ----- |
| **FR-FM-01** | The system shall allow School Admins to Set, Edit, Delete, and View fees for students, and view a report of unpaid fees. | School Admin Functions: Fee management |
| **FR-FM-02** | The system shall provide a payment gateway integration for Parents to pay fees. | Parent Functions |
| **FR-FM-03** | The system shall send fee reminder notifications to Parents. | Parent Functions |

4.4. Curriculum Mapping Requirements

| ID | Requirement Description | Source/Context |
| ----- | ----- | ----- |
| **FR-CM-01** | The system shall allow School Admins to Add, Edit, Delete, and View student-subject and teacher-subject mappings. | School Admin Functions: Curriculum Mapping |

4.5. Academic Records & Grading Requirements

| ID | Requirement Description | Source/Context |
| ----- | ----- | ----- |
| **FR-AR-01** | The system shall allow School Admins to Add, Edit, Delete, and View major examination details, including subject, syllabus, and timing. | Exams Schema, School Admin Functions |
| **FR-AR-02** | The system shall allow School Admins to Upload CSV files for filling out student marks, as well as Edit, Delete, and View student marks. | School Admin Functions |
| **FR-AR-03** | The system shall allow Teachers to Upload student marks for major and unit exams. | Teacher Functions, Teachers Doubts |
| **FR-AR-04** | The Student/Parent dashboard shall display reports, averages, and marks from past exams and quizzes. | Student & Parent Functions, School Admin Track Progress |

4.6. Assessment & Activity Requirements

| ID | Requirement Description | Source/Context |
| ----- | ----- | ----- |
| **FR-AA-01** | The system shall allow App Admins to Create, Edit, Delete, and View system-wide quizzes/mock tests and inter-school competitions. | App Admin Functions |
| **FR-AA-02** | The system shall allow Students to Attempt quizzes and view results. | Student Functions |
| **FR-AA-03** | The system shall allow Subject Teachers to Add, Edit, Delete, and View tests, assignments, and quizzes restricted to their assigned classes. | Teacher Functions, Teachers Manage Assigned Classes |
| **FR-AA-04** | The system shall allow Subject Teachers to Add, Edit, Delete, and View subject resources (file attachments). | Teacher Functions: Subject Teacher dashboard |

4.7. Communication & Feed Requirements

| ID | Requirement Description | Source/Context |
| ----- | ----- | ----- |
| **FR-CF-01** | The system shall allow App Admins to Post announcements/notices for all schools or specific schools. | App Admin Functions |
| **FR-CF-02** | The system shall allow School Admins to Add, Edit, Delete, and View announcements based on roles (parents, students, teachers, drivers). | School Admin Functions |
| **FR-CF-03** | The system shall track the delivery and read status of all role-based notifications. | Notification Schema, School Admin Notifications |
| **FR-CF-04** | Teachers shall be able to Add, Edit, Delete, and Update community posts for their assigned groups. | Teachers: Manage Assigned Classes |
| **FR-CF-05** | Parents and Students shall be able to view/interact with community posts. | Student & Parent Functions |
| **FR-CF-06** | The system shall allow Parents to Download circulars and reports which are issued from the school/app admin/teachers for a child. | Parent Functions |
| **FR-CF-07** | The system shall receive absence notifications on SMS and deliver them to Parents. | Parent Functions |

4.8. Logistics & Tracking Requirements

| ID | Requirement Description | Source/Context |
| ----- | ----- | ----- |
| **FR-LT-01** | The system shall allow the Driver to Start and Stop location tracking and Broadcast/Publish the live location to an authorized endpoint. | Driver Functions |
| **FR-LT-02** | The system shall allow School Admins and Parents to View the live location of the bus. | School Admin Functions & Parent Functions |
| **FR-LT-03** | The system shall allow School Admins to View and Delete tracking for the bus (live preview and removal of location from all users). | School Admin Functions |
| **FR-LT-04** | The system shall allow Teachers and School Admins to Mark and Unmark attendance for student/teacher. | School Admin Functions, Teacher Functions |

5\. Non-Functional Requirements

5.1. Performance

| ID | Requirement Description | Source/Context |
| ----- | ----- | ----- |
| **NFR-PERF-01** | All major read operations (e.g., viewing student marks, loading a dashboard) shall complete within 3 seconds, even during peak usage hours (Daily Usage Report: Peak usage time). | Implied from Daily Usage Report/Peak time |
| **NFR-PERF-02** | Student attendance marking by a teacher must auto-submit as final exactly 30 minutes after initial entry. | Teacher Functions: Class teacher dashboard |

5.2. Security

| ID | Requirement Description | Source/Context |
| ----- | ----- | ----- |
| **NFR-SEC-01** | Data must be partitioned by School ID to ensure that School Admins can only view/manage resources belonging to their school. | Implied from School Admin scope |
| **NFR-SEC-02** | Teacher posts, attendance, and content management must be restricted to the classes and subjects they are specifically assigned to. | Teacher Functions: Manage assigned classes |
| **NFR-SEC-03** | Access to the live bus location endpoint must be restricted to logged-in and authorized School Admins, Students, Parents, and Teachers. | Driver Functions |
| **NFR-SEC-04** | All user login passwords must be stored as a **Password hash**. | All Schema: Password field |

5.3. Scalability and Availability

| ID | Requirement Description | Source/Context |
| ----- | ----- | ----- |
| **NFR-SCAL-01** | The system must utilize the Microservice Architecture (Section 3\) to enable independent scaling of high-load domains (e.g., Logistics & Tracking, Academic Records). | NFR-SCAL-01 |
| **NFR-SCAL-02** | The chosen database must support massive scale (clustering, sharding) to handle the data volume of all Active Schools and Active Users. | NFR-SCAL-02 |
| **NFR-SCAL-03** | The system shall aim for 99.9% uptime to support real-time functions like live bus location tracking and attendance marking. | NFR-SCAL-03 |

5.4. Maintainability

| ID | Requirement Description | Source/Context |
| ----- | ----- | ----- |
| **NFR-MAINT-01** | The codebase for each microservice must be modular and documented to facilitate easy editing and feature additions, particularly for analytics (e.g., adding "Inter-School Activity & Content Performance" metrics). | NFR-MAINT-01 |
| **NFR-MAINT-02** | Each microservice must be independently deployable, aligning with the CI/CD requirements of a microservice architecture. | NFR-MAINT-02 |
| **NFR-MAINT-03** | The core schemas must be easily extensible to add new fields (e.g., `academicYear` for Curriculum Mapping, `Type` for Exams) to facilitate future reporting and analysis needs. | Report Doubts: Curriculum Mapping & Exam |

5.5. Analytics and Reporting

| ID | Requirement Description | Source/Context |
| ----- | ----- | ----- |
| **NFR-ANA-01** | The Reporting & Analytics service must track and report on all specified metrics, including System Usage & Health, Activity & Content Performance (Quizzes/Competitions), and Parent/Student Engagement Metrics (Notification Response Rate, Parent App Activity, Fee Reminder Engagement). | App Admin Analytics & School Admin Engagement Analytics |
| **NFR-ANA-02** | Student Progress tracking reports must be filterable by **Class-wise**, **Subject-wise**, and **Teacher-wise** dimensions. | School Admin: Track Progress (How it is Tracked) |

# Feedback

Date: 10 March 2026

Feedback

1. Attendance can only be marked by the class teacher or a school administrator.  
2. Do we miss Bus registration with a PIN?  
   1. Use Case: Due to the possibility of different drivers operating the same bus on various occasions, we propose a system where the driver must authenticate with the specific bus before commencing the route. This approach was previously discussed during a meeting regarding the UI design.

# Top Priority

**Initial Phase \- Core Modules**

**1\. Attendance Management**

* Teachers will be able to record student attendance directly within the system.  
* The teacher marks attendance for the class and submits it.  
* Once submitted, a push notification is automatically sent to the parent application.  
* Parents can open the app and view their child’s attendance status.

**2\. Community (Announcements & Posts)**

* The community module enables communication and information sharing within the school ecosystem.  
* School administrators and Letuic administrators can create and publish posts.  
* Posts can be shared within a specific school or publicly across the platform.  
* Parents and relevant users can view these updates through the application.  
* This module helps schools communicate announcements, updates, and important information efficiently.

**3\. Marks & “Know Your Student”**

* Teachers can record and review student academic performance.  
* Teachers can enter marks for tests and examinations conducted in the class.  
* The system combines attendance data and test marks to generate basic student insights.  
* By searching a student’s name, teachers can view simple analytics related to that student’s performance.  
* Parents can also access this information through the parent application.

# Design File

[https://www.figma.com/design/n7gHfMs8G5xJDsTkX1d8t4/Letuic?node-id=0-1\&t=E1BUx2nriArRMtqA-1](https://www.figma.com/design/n7gHfMs8G5xJDsTkX1d8t4/Letuic?node-id=0-1&t=E1BUx2nriArRMtqA-1)

Should you find that access has not been enabled for you, please submit a request using the link provided above. Access will be granted within 30 minutes.

