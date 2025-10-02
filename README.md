# 🏥 Healthcare Microservice Platform

A microservice-based healthcare system built with **NestJS, React, Express API Gateway, and NATS**.  
The platform enables patients to register, book appointments, and communicate with doctors via chat, audio, and video calls.

---

## 🔹 Architecture Overview

![System Design Diagram](./architecture-diagram.png)

### Components

1. **React Client (Frontend)**
   - Patient and doctor interface.
   - Handles appointment booking, schedules, and communication.

2. **Express API Gateway**
   - Single entry point for client requests.
   - Validates JWT via Auth Service.
   - Routes traffic to microservices (Admin, Patient, Doctor, Communication).

3. **Auth Service**
   - Handles **JWT authentication & authorization**.
   - Provides **sign in, sign up, and registration**.
   - Validates tokens for the API Gateway.
   - Publishes user-related events via NATS.

4. **Admin Service**
   - Manages doctor and patient accounts.
   - Routes appointment requests to doctors or doctor groups.
   - Oversees appointment workflow.

5. **Patient Service**
   - Manages patient accounts.
   - Handles appointment requests and viewing schedules.
   - Syncs updates (appointments, notifications) via NATS.

6. **Doctor Service**
   - Doctors receive and respond to appointment requests.
   - Accepting requests generates a confirmed appointment time.
   - Updates are synced via NATS.

7. **Communication Service**
   - Provides **chat, notifications, audio/video calls (via WebRTC signaling)**.
   - Uses NATS for broadcasting communication events.

8. **NATS (Event Bus)**
   - Provides asynchronous messaging between services.
   - Ensures **decoupled service communication** (Admin → Doctor, Doctor → Patient, Communication → Notifications).

---

## 🔹 Workflow Example: Appointment Booking

1. **Patient → API Gateway**: sends appointment request.  
2. **API Gateway → Auth Service**: validates JWT.  
3. **API Gateway → Patient Service**: forwards request.  
4. **Patient Service → Admin Service**: request is categorized.  
5. **Admin Service → Doctor Service**: forwards to doctor or group.  
6. **Doctor Service**: doctor accepts, generates appointment time.  
7. **Doctor Service → NATS**: publishes appointment confirmation.  
8. **Patient Service**: receives update, patient notified.  
9. **Communication Service**: enables chat, audio, or video call.

---

## 🔹 Tech Stack

- **Frontend:** React  
- **Gateway:** Express  
- **Backend Services:** NestJS (Admin, Auth, Patient, Doctor, Communication)  
- **Event Bus:** NATS  
- **Real-time Communication:** WebRTC (via Communication Service)  

---

## 🚀 Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/healthcare-platform.git
   cd healthcare-platform
