# 📌 IT Student Union Backend

This is the backend for the IT Student Union project, built using **Django Rest Framework (DRF)** to handle API requests efficiently. The project follows a structured and scalable architecture to ensure maintainability and performance.

---

## 📂 Project Structure

```
backend/
│── src/
│   ├── config/                 # Django settings, URLs, WSGI/ASGI, etc.
│   │   ├── settings.py
│   │   ├── urls.py
│   ├── users/                   # Authentication, roles
│   ├── members/                 # "Join Us" functionality
│   ├── complaints/              # Complaints system
│   ├── about/                   # About Us content
│   ├── common/                  # Utilities (e.g., pagination, permissions)
│   ├── core/                    # Base models, mixins
│── manage.py
```

---

## ⚙️ Installation

### 📌 Prerequisites

- Python 3.10+
- PostgreSQL (or SQLite for local development)
- Redis (for Celery, optional)

### 🚀 Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo/it-student-union-backend.git
   cd it-student-union-backend
   ```
2. **Create and activate a virtual environment:**
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. **Install dependencies:**
   ```sh
   pip install -r requirements.txt
   ```
4. **Configure environment variables:**
   ```sh
   cp .env.example .env  # Update with database credentials
   ```
5. **Apply database migrations:**
   ```sh
   python manage.py migrate
   ```
6. **Create a superuser:**
   ```sh
   python manage.py createsuperuser
   ```
7. **Run the development server:**
   ```sh
   python manage.py runserver
   ```

---

## 🌐 API Endpoints

| Method | Endpoint           | Description                 |
| ------ | ------------------ | --------------------------- |
| POST   | `/api/join/`       | Submit a membership request |
| POST   | `/api/complaints/` | Submit a complaint          |
| GET    | `/api/about/`      | Get About Us info           |

---

## 🚀 Deployment

For production, use **Gunicorn and Docker**:

```sh
docker-compose up --build -d
```

---

## 🤝 Contributing

1. **Fork the repo.**
2. **Create a new branch:** `git checkout -b feature-branch`
3. **Make your changes and commit:** `git commit -m "Add feature"`
4. **Push to the branch:** `git push origin feature-branch`
5. **Open a pull request.**

---

## 📜 License

This project is licensed under the MIT License.

---

💡 **Need help?** Feel free to reach out or open an issue in the repository!
