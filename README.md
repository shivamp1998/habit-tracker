# Habit Tracker

## Description

A simple habit tracker app built with Node.js and EJS to help you keep track of your daily habits. You can add multiple habits, view details of each habit, and update the status for each day.

## Features

- Add multiple habits to track.
- View all current habits.
- View the detailed status of each habit for the past 7 days.
- Update the status of a habit for today and any of the previous 6 days.
- Total days completed for each habit is displayed.

## Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/habit-tracker.git
   cd habit-tracker

2. **Install dependencies**
    ```1`sh
    npm install

3. **Configuring Environment variables**
    Replace .env.example with .env and add your MongoDB URL.


4. **Run the application**
    ```sh
    npm start


## Usage

1. **Add a new habit**
   - Enter the name of the new habit in the input field.
   - Click the "Add Habit" button to save the new habit.

2. **View habits**
   - The home page displays a list of all habits with the total days completed.
   - Click on a habit to view its detailed status for the past 7 days.

3. **Update habit status**
   - On the habit detail page, use the dropdown to update the status for today and any of the previous 6 days.
   - The status can be "Done", "Not Done", or "None".
