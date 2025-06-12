# WebSocket Integration: Node.js Server & Python Client

Mini demonstration project showcasing real-time communication between a **WebSocket server built with Node.js** and a **client implemented in Python**.  
Ideal for educational purposes, prototyping, or as a reference for cross-language WebSocket integration.

---

## 🚀 Main Features

- **WebSocket Server in Node.js**  
  Implements an efficient and simple server using `ws`, enabling real-time connections.

- **WebSocket Client in Python**  
  Lightweight client that interacts with the server using `websockets` or `websocket-client`.

- **Bidirectional Communication**  
  Send and receive real-time messages between both environments.

- **Simple and Well-Documented Code**  
  Designed for easy understanding, modification, and extension.

---

## 📂 Project Structure

```
.
├── server/                # Node.js server code
│   └── server.js
├── client/                # Python client code
│   └── client.py
├── README.md
├── package.json           # Node.js dependencies
└── requirements.txt       # Python dependencies
```

---

## 🛠️ Requirements

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [Python](https://www.python.org/) (3.7+ recommended)

---

## ⚡ Installation & Running

### 1. Clone the repository

```bash
git clone https://github.com/itsronalds/websocket-integration-node-python.git
cd websocket-integration-node-python
```

### 2. Set up and run the Node.js server

```bash
cd server
npm install
node server.js
```

### 3. Set up and run the Python client

```bash
cd ../client
pip install -r ../requirements.txt
python client.py
```

---

## 📝 Usage Example

- Start the server.
- Launch the Python client.
- Observe both terminals for real-time message sending and receiving.

---

## 🧩 Core Technologies

- **Node.js** + [ws](https://www.npmjs.com/package/ws)
- **Python** + [websockets](https://websockets.readthedocs.io/) or [websocket-client](https://pypi.org/project/websocket-client/)

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
