# 📊 WhatsApp Chat Analyzer

The **WhatsApp Chat Analyzer** is a full-stack application that parses and analyzes exported WhatsApp group chat `.txt` files. It visualizes daily user activity for the last 7 days before the latest message in the chat file.

---

## 🔍 Problem Statement

Analyzing user behavior in WhatsApp groups is a manual and time-consuming task. Especially in educational or organizational groups, it is useful to know:
- Who joined recently
- Who is actively participating
- Engagement trends over time

The aim is to **automatically extract insights** from the exported chat file and present them in a visual and downloadable format.

---

## ✅ Features

- 📂 Upload exported `.txt` WhatsApp group chat files
- 📅 Visualize **Active Users** (who sent at least 1 message)
- 🟧 Visualize **Joined Users** based on:
  - Lines containing “added” (excluding “added you”)
  - Lines with “joined using this group's invite link”
- 📊 Beautiful bar graph of Active and Joined users for the **last 7 days** before the latest message
- 💾 Download the graph image and report as CSV
- 🔄 Stylish modern UI with loading animations and toasts

---

## 🧠 Solution Overview

### 📁 File Parsing Logic
- Parse each line from `.txt` chat file.
- Extract message date and username.
- Count **active users** per day by checking senders.
- Count **joined users** by detecting keywords:
  - `"added"` (ignoring `"added you"`)
  - `"joined using this group's invite link"`

### 📉 Graph Output
- X-axis → Last 7 days before the latest message date.
- Y-axis → User count.
- Blue Bar → Number of **Active Users**
- Orange Bar → Number of **Joined Users** (even if 0)

---

## 🧰 Technologies Used

### 🔹 Frontend (React.js)
- HTML, CSS, JavaScript, React
- Chart.js for data visualization
- Axios for API calls

### 🔹 Backend (Flask - Python)
- Flask server for file handling and data processing
- Matplotlib for generating graph image
- Pandas for CSV report generation

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/whatsapp-chat-analyzer.git
cd whatsapp-chat-analyzer

/// BACKEND EXCECUTION

cd backend
python -m venv venv
source venv/bin/activate  # On Windows use venv\Scripts\activate
pip install -r requirements.txt
python app.py

/// FRONTEND EXCECUTION
cd frontend
npm install
npm start
