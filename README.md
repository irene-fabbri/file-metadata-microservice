# 📦 File Metadata Microservice

This is a simple Express.js application that allows users to upload a file and receive a JSON response with the file's metadata — including the file name, type, and size in bytes.

Built as part of the **File Metadata Microservice** project challenge by TomorrowDevs, it demonstrates how to handle file uploads using `multer`, basic routing in Express, and serving a static HTML form.

---

## 🚀 Features

- Upload any file via a simple HTML form
- Returns:
  - Original file name
  - MIME type
  - File size (in bytes)
- CORS enabled (for API testing via external clients)
- Custom error handling for cleaner responses

---

## 📁 Project Structure

```
.
├── app.js                   # Express app setup
├── server.js                # App entry point
├── package.json             # Dependencies and scripts
├── public/
│   └── index.html           # Upload form
├── routes/
│   └── uploads.js           # Upload and root routes
├── uploads/                # Uploaded files stored here
├── middleware/
│   └── errorHandler.js      # Centralized error handler
├── utils/
│   └── createError.js       # Helper for custom error objects
└── README.md                # This file
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node)

---

### 📦 Install dependencies

```bash
npm install
```

---

### ▶️ Start the server

```bash
npm start
```

The server will start on **http://localhost:5000**

---

## 🌐 Usage

1. Open [http://localhost:3000](http://localhost:3000) in your browser.
2. Select a file using the upload form.
3. Click "Upload".
4. You will receive a JSON response like:

```json
{
  "name": "example.txt",
  "type": "text/plain",
  "size": 1024
}
```

---

## 📤 API Endpoint

### `POST /api/upload`

| Field     | Type     | Required | Description                    |
|-----------|----------|----------|--------------------------------|
| `upfile`  | `file`   | ✅       | The file to upload (any type) |

Returns:

```json
{
  "name": "filename.ext",
  "type": "mime/type",
  "size": 12345
}
```

---

## 📎 Notes

- Uploaded files are stored in the `uploads/` directory (not served publicly).
- Form must have `enctype="multipart/form-data"` to send files correctly.
- Error handling middleware ensures friendly error messages for unknown routes or server issues.

---

## 🪪 License

This project is licensed under the [MIT License](./LICENSE).

---