# 🚀 Dockerized Node.js Service Deployment via GitHub Actions

## 📖 Project Overview

This project demonstrates how to:
- Build a simple Node.js service with authentication
- Dockerize the application
- Set up a remote Linux server for deployment
- Automate the build and deployment process using GitHub Actions and Secrets Management

By completing this project, you will practice essential DevOps skills: Docker, CI/CD, server setup, and GitHub Actions automation.

---

## 🛠️ Technologies Used
- Node.js
- Express.js
- Docker
- GitHub Actions
- Linux (Ubuntu 22.04)
- SSH
- GitHub Secrets

---

## 📦 Project Structure

```
node-app/
├── Dockerfile
├── .dockerignore
├── .env           # (Not committed to GitHub)
├── server.js
├── package.json
├── README.md
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## 📜 Features

- `/` route returns: `Hello, world!`
- `/secret` route:
  - Protected by **Basic Authentication** (username/password)
  - Returns a **Secret Message** if authenticated
- Dockerized using `alpine`-based image
- GitHub Actions pipeline:
  - Builds Docker image
  - Transfers the image to the remote server
  - Deploys and runs the container
- Secrets stored securely in GitHub repository settings

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/node-docker-deployment.git
cd node-docker-deployment
```

---

### 2. Environment Variables

Create a `.env` file **locally** (do not push this file):

```bash
PORT=3000
USERNAME=admin
PASSWORD=adminpassword
SECRET_MESSAGE=Congratulations! You've found the secret!
```

---

### 3. Run Locally

#### Install Dependencies

```bash
npm install
```

#### Start the App

```bash
npm start
```

Visit:
- `http://localhost:3000/` → Hello World
- `http://localhost:3000/secret` → Basic Auth Required

---

## 🐳 Docker Instructions

### Build the Docker Image

```bash
docker build -t dockerized-node-app .
```

### Run the Container

```bash
docker run -d -p 3000:3000 --env-file .env dockerized-node-app
```

---

## 🖥️ Server Setup (Remote Linux Server)

1. Create an Ubuntu 22.04 server (DigitalOcean, AWS, etc.).
2. SSH into the server:

```bash
ssh root@your_server_ip
```

3. Install Docker:

```bash
apt update
apt install docker.io -y
systemctl start docker
systemctl enable docker
```

4. Optional: Install Docker Compose

```bash
apt install docker-compose -y
```

---

## ⚙️ GitHub Actions - CI/CD Pipeline

### Secrets to Add in GitHub Repository Settings
- `SSH_PRIVATE_KEY` → Your private key content
- `SERVER_IP` → Remote server public IP
- (Optional) `DOCKER_USERNAME` and `DOCKER_PASSWORD` if pushing to Docker Hub

### GitHub Workflow - `.github/workflows/deploy.yml`

This workflow will:
- Build Docker image
- Save it as a `.tar.gz`
- SSH into server
- Load and run the container on port 80

---

## 🛠️ Useful Commands on Server

| Command | Purpose |
|:--------|:--------|
| `docker ps` | List running containers |
| `docker stop container_id` | Stop a running container |
| `docker rm container_id` | Remove a stopped container |
| `docker logs container_id` | View logs of a container |
| `docker images` | List Docker images |

---

## 📋 Deployment Process Summary

1. Developer pushes code to GitHub `main` branch.
2. GitHub Actions triggers the workflow.
3. Docker image is built inside GitHub Actions runner.
4. Docker image is transferred to the server over SSH.
5. Server loads the image and starts a container mapped to port 80.

---

## 📈 Future Improvements
- Add **HTTPS** with Let's Encrypt + Nginx reverse proxy.
- Set up **monitoring and alerting**.
- Use **Docker Compose** for more complex deployments.
- Implement **rolling updates** with zero downtime.

---

## 🙌 Acknowledgments

Thanks to the open-source community for providing amazing tools like Docker, GitHub Actions, and Express.js which made this project possible.

---

# 🎯 Final Result

- Access your app:
  - `http://your_server_ip/` → Hello World
  - `http://your_server_ip/secret` → Basic Auth Protected Secret!

---

# 🏴‍☠️ Bonus Diagram

> **Architecture Overview:**

```
[ GitHub Push ] ➔ [ GitHub Actions ]
                      ↓
          [ Build Docker Image ]
                      ↓
        [ SSH Transfer to Server ]
                      ↓
          [ Deploy and Run App ]
```

---

# 🚀 That's it!

You have successfully built a **Dockerized Node.js app** with **automated GitHub Actions CI/CD pipeline** to a **remote server**!

---

https://roadmap.sh/projects/dockerized-service-deployment