# 🧾 JavaScript Form Validation

This project implements basic **client-side form validation** using JavaScript string methods and conditionals. It ensures user inputs for **username**, **email**, and **password** meet simple criteria before submission. The validation is purely frontend-based and provides immediate feedback to the user without needing to reload or send data to a server.

---

## 🚀 Live Demo

🔗 [View the live project here](https://jackofallnames.github.io/Form-Creation-Validation/)

---

## 🎯 Project Objective

The goal is to demonstrate how to:

- Use the `DOMContentLoaded` event to ensure safe DOM access.
- Retrieve and trim form inputs.
- Perform simple validations on user input.
- Display feedback messages to users.
- Prevent form submission if validation fails.

---

## 📂 File Structure

```
.
├── index.html
├── README.md
├── script.js
└── style.css
```

---

## 🧠 How It Works

### DOM Setup

- Waits for the DOM to fully load using `DOMContentLoaded`.
- Targets the form with ID `registration-form`.
- Also targets the `form-feedback` div for displaying messages.

### Form Submission

- Uses `form.addEventListener('submit', function(event) { ... })`.
- Prevents the default submission using `event.preventDefault()`.

### Input Fields

- Retrieves values from `username`, `email`, and `password`.
- Applies `.trim()` to clean whitespace.

### Validation Rules

| Field    | Rule                               |
| -------- | ---------------------------------- |
| Username | Minimum 3 characters               |
| Email    | Must include both `'@'` and `'.'`  |
| Password | Must be at least 8 characters long |

### Feedback Display

- If valid, shows a success message in **green**.
- If invalid, lists error messages in **red** (joined using `<br>`).
- Messages appear in the `#form-feedback` element.

---

## 📌 Example Messages

- `"Username must be at least 3 characters."`
- `"Enter a valid email address."`
- `"Password must be at least 8 characters."`

---

## 👩‍💻 How to Use

1. Clone the repo:
   ```bash
   git clone git@github.com:jackOfAllNames/Form-Creation-Validation.git
   ```
2. `cd Form-Creation-Validation`

3. Open `index.html` in your browser.

4. Try entering various inputs and observe the feedback.

#### This is a beginner-friendly project that helps you understand:

- DOM manipulation

- Basic validation logic

- User interaction without backend dependency
