# Segment Builder - React Assignment

A simple React application to create and manage user segments.

---

## 🚀 Live Demo
🔗 https://segment-builder-79d69.web.app/

---

## 🛠 Tech Stack
- React JS
- Bootstrap / Custom CSS
- LocalStorage (for saving segment data)
- JavaScript (ES6+)

---

## ✅ Features Implemented
✔ Popup modal to create a new segment  
✔ Segment name input with validation  
✔ Schema dropdown with the required options  
✔ “+ Add new schema” functionality  
✔ Auto-filtering to prevent duplicate schemas  
✔ Modify previously selected schemas  
✔ Stores segment data in LocalStorage  
✔ Payload structured as per requirement  

---

### 📦 Payload Format
```json
{
  "segment_name": "example_name",
  "schema": [
    { "first_name": "First Name" },
    { "gender": "Gender" }
  ]
}
