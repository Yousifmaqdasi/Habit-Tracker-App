# Habit-Tracker-App

📝 Habit Tracker – README
Overview

This is a simple, beginner-friendly Habit Tracker built with HTML, CSS, and JavaScript. It lets users add habits, mark them as completed for the day, and automatically saves progress using the browser’s localStorage. Everything runs inside a single web page, making it easy to understand and modify.

Features
• Add Habits

Users can enter a habit name and add it to their list instantly.

• Mark Habits as Complete

Each habit includes a button for toggling its daily completion. Completed habits appear crossed out and slightly faded.

• Automatic Saving

All habits and their completion state are stored with localStorage.
Refreshing the page or closing the browser keeps everything exactly as it was.

• Responsive Layout

The design adjusts smoothly on mobile screens, keeping text and buttons readable and easy to use.

How It Works
1. HTML Structure

The page includes:

A title

A form for adding new habits

A container where all habits are displayed
The list is empty on load and filled dynamically by JavaScript.

2. CSS Styling

The styles focus on:

Clean spacing and readable text

Rounded card-style elements

Visual contrast between completed and active habits

A mobile-friendly layout that adjusts the form layout on small screens

3. JavaScript Logic

The JavaScript handles all app behavior:

Initializing data
Loads saved habits from localStorage or creates an empty list if none exist.

Adding habits
When the form is submitted, the new habit is added to the list, saved, and re-rendered.

Marking complete
Clicking the toggle button updates the habit’s completed status and refreshes the display.

Rendering
Rebuilds the habit list each time data changes, ensuring the UI always reflects the current state.

Saving data
Every change is written back to localStorage so nothing is lost on refresh.

File Structure

The project is designed as a single HTML file containing all three layers:

HTML (structure)

CSS (styling)

JavaScript (logic)

This keeps the project simple and easy to read. It can later be split into separate files if needed.

How to Use

Open the HTML file in any browser.

Add your habits.

Mark them complete as you go.

Everything stays saved automatically.

Ways to Extend the App

Here are practical improvements you can add once you understand the basics:

Daily auto-reset at midnight

Habit streaks (consecutive days completed)

Delete and edit options

Light/Dark theme toggle

Calendar view to show completion history

Progress statistics or simple charts

Drag-and-drop ordering of habits

Option to categorize habits

If you want, I can also help rewrite this README in a more formal style, a GitHub-polished style, or a shorter version for project summaries.
