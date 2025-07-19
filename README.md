📝 Resume Builder
A clean, responsive, and fully customizable Resume Builder built with React.js.
This app allows users to create professional resumes with live preview and theme customization options. 
Ideal for students, professionals, and developers building their personal brand.

🚀 Features
📄 Live resume preview while editing
🎨 Theme customization (light/dark modes, colors)
🧩 Modular and reusable components
⚡ Fast performance with clean React architecture
💾 Export to PDF functionality
🖥️ Tech Stack

Frontend: React.js, HTML5, CSS3
State Management: React Context API
Styling: Custom CSS

📁 Project Structure
Resume-builder-main/
├── public/ 
│ ├── index.html # Main HTML template 
│ └── favicon.ico # Site favicon

├── src/ 
│ ├── App.js # Main React app 
│ ├── App.css # Global styles 
│ ├── index.js # React DOM rendering
│ ├── index.css # Additional base styles 
│ ├── Components/ # Reusable components
│ ├── Pages/ # Page-level components
│ ├── Context/ # Global state (Context API) 
│ ├── Theme/ # Theme logic and switcher
│ └── db/ # Mock/static data

├── package.json # Project metadata & scripts
├── package-lock.json # Package versions lock

⚙️ Prerequisites
Make sure you have the following installed:

✅ Node.js (v14+): https://nodejs.org/
✅ npm (comes with Node)
Check with:

node -v
npm -v

# 1️⃣ Install all dependencies
npm install

# 2️⃣ Start the development server
npm start

After running npm start, your default browser should open automatically at:
http://localhost:3000
