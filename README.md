# QuickChat

QuickChat is a real-time chat application built using the MERN stack with Socket.IO. The application focuses on fast, reliable one-to-one communication with a clean user interface and practical messaging features similar to modern chat platforms.

---

## Overview

QuickChat allows users to create an account and instantly connect with other registered users. Once logged in, all existing users are visible, and a user can start a real-time conversation with anyone. Messaging is handled using Socket.IO to ensure instant delivery and live updates without refreshing the page.

---

## Key Features

* User signup and login system
* Display of all registered users after account creation
* Real-time one-to-one messaging
* Seen and unseen message tracking
* Unread message count badge when a chat window is not open
* Live online and offline user status
* Selected user chat displayed in the center chat container
* Right sidebar showing selected user details
* Green "online" indicator under the username when a user is active
* Smooth and responsive UI design

---

## Frontend Technologies

The frontend is built with React and styled using Tailwind CSS. It uses modern React libraries for routing, form handling, notifications, animations, API communication, and real-time socket connections to provide a smooth user experience.

---

## Backend Technologies

The backend is developed with Node.js and Express, using MongoDB as the database. Authentication is handled with JWT, passwords are secured using hashing, and Socket.IO manages real-time communication. Cloud services are used for media handling, and environment variables are used for configuration and security.

---

## Real-Time Messaging Logic

Messages are delivered instantly using Socket.IO. If a user receives a message while the chat window is closed, the message is marked as unseen and a notification count is displayed. Once the user opens the chat, the messages are marked as seen and the unread count is cleared. Online users are tracked through active socket connections and shown in real time.

---

## Application Flow

* User registers or logs in
* All existing users are loaded and shown in the sidebar
* User selects another user to start chatting
* Chat messages appear in the center container
* Selected user information appears in the right sidebar
* Online users are shown with a green online indicator
* Unread messages show a count badge until the chat is opened

---

## Project Purpose

QuickChat is built as a learning-focused MERN stack project to demonstrate real-time communication, authentication, state management, and socket-based messaging. It is suitable for portfolio presentation and practical understanding of full-stack development.

---

## Project Name

QuickChat – MERN Stack Real-Time Chat Application

---

## Author

Sohaib

---

## License

This project is intended for educational and learning purposes.
