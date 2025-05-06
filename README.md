# Frontend Challenge – Assignments App

## 📋 Description

This project is a boilerplate built with:

- Vite
- React
- TypeScript

> **Note**: You don't need to use TypeScript if you don't want to — feel free to use plain JavaScript.

The goal is to build a simple Assignments Platform where students can view and submit their assignments.

## 🚀 Challenge Instructions

You can install and use any libraries you consider helpful.

Use the provided fetchAssignmentsData function, which simulates an API call and returns the list of assignments according to the defined contract.

Your application must allow users to view assignments in two different states:

- **Todo** (pending assignments)
- **Completed** (already submitted assignments)

## ✅ Requirements

### General:

- The app must have **two separate screens**:
  - One for **Todo assignments**
  - One for **Completed assignments**

### For Todo assignments:

Display the following information:

- Due date
- Title
- Description
- If the assignment is optional, show a badge/tag labeled "Optional".
- If the assignment is a group assignment, show a badge/tag labeled "Group".
- Include a "Submit" button for each assignment. The button doesn't need to actually submit anything.
- If the assignment is overdue (the due date has passed):
  - Disable the submission button for that assignment.

### For Completed assignments:

Display the following information:

- Title
- Description
- Score
- A submission link (make it clickable).

## 📦 Setup

1. **Use the correct Node version**:

   ```bash
   nvm use
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
