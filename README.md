# Universal Patient Records

Functional Requirements:

Entities:-
User
Doctor
Admin

User:-
1. User has to register - authentication required like Adhaar since its a universal record so multiple registrations of the same user are not possible
2. User login
3. Fill in the basic details and initial medical details
4. View his/her medical records with timelines
5. Search doctors and view profile, timing details etc
6. Book appointments if any
7. During their checkup user needs to provide its unique id to doctor with which they can access medical history. Some authentication required like otp so that the id cannot be used later. After authentication doctor can add details of current treatment - prescription.
8. Users can add previous prescriptions as well.
9. Users can filter out doctors based on their field of expertise or name or location.
10. User can add any prescription which he/she got from a doctor not registered to  our application


Doctor:-
1. Doctors need to register and get verified - provide clinic details.
2. Provide available time slots for appointments.
3. Cancel an appointment.
4. During an appointment, access patient records and add a new record.


Admin:-
1. Dashboard
2. Authenticates doctors
