# WebSocket Integration: Node.js Server & Python Client

Demonstration project showcasing real-time communication between a **WebSocket server built with Node.js** and a **client implemented in Python**.

## Main Features

- **WebSocket Server in Node.js**  
  Implements an efficient and simple server using `ws`, enabling real-time connections.

- **WebSocket Client in Python**  
  Lightweight client that interacts with the server using `websockets` or `websocket-client`.

- **Bidirectional Communication**  
  Send and receive real-time messages between both environments.

- **Simple and Well-Documented Code**  
  Designed for easy understanding, modification, and extension.

## Requirements

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [Python](https://www.python.org/) (3.7+ recommended)

## Installation & Running

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

## Core Technologies

- **Node.js** + [ws](https://www.npmjs.com/package/ws)
- **Python** + [websocket-client](https://pypi.org/project/websocket-client/)
