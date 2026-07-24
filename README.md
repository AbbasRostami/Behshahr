<div align="center">

  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="180" alt="Vite Logo" />
<h1>🎓 H-One Academy</h1>

<p>
  <strong>A modern, responsive, and feature-rich online learning platform</strong>
  <br/>
  <em>Built with React, TypeScript, Vite & TailwindCSS</em>
</p>

  <p><strong>A full-featured e-learning platform with complete user panel, course management, articles, reservations, likes, ratings, and profile management.</strong></p>

  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
    <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
    <img src="https://img.shields.io/badge/Formik-2563EB?style=for-the-badge&logo=formik&logoColor=white" alt="Formik" />
    <img src="https://img.shields.io/badge/Yup-F7B93E?style=for-the-badge" alt="Yup" />
    <img src="https://img.shields.io/badge/Jotai-000000?style=for-the-badge&logo=jotai&logoColor=white" alt="Jotai" />
    <img src="https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=react&logoColor=white" alt="Zustand" />
    <img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="Material UI" />
    <img src="https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white" alt="DaisyUI" />
    <img src="https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white" alt="Swiper" />
    <img src="https://img.shields.io/badge/ApexCharts-008FFB?style=for-the-badge&logo=apache&logoColor=white" alt="ApexCharts" />
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  </p>

  <p>
    <a href="https://behshahr.vercel.app/">
      <img src="https://img.shields.io/badge/🌐_Live_Demo-158B68?style=for-the-badge&logoColor=white" alt="Live Demo" />
    </a>
  </p>

</div>

---

## 🌟 About The Project

**H-One Academy** is a complete online learning platform designed and developed to deliver a smooth, modern, and practical learning experience. This project includes:

- 🎯 Professional landing page with course & article sliders
- 📚 Course listing with filtering, search, pagination, and sorting
- 📰 News & articles with rating and comment system
- 👤 Complete user panel with profile management
- 🔐 Multi-step authentication system (Register / Login / Forget Password)
- 🌗 Dark / Light / System theme support
- 📱 Fully responsive and optimized for mobile & desktop
- 🇮🇷 Full **RTL** support and Persian language

---

## 🚀 Live Demo

🔗 **[https://behshahr.vercel.app](https://behshahr.vercel.app)**

---

## ✨ Key Features

### 🏠 Landing Page
- Hero slider
- Academy services
- Statistics section
- Educational categories
- Courses & articles sliders
- Instructors section
- Suggestions & feedback form
- Contact us form

### 📚 Courses
- Responsive grid layout
- Filter by **technology, level, type, price**
- Fast search
- Advanced pagination
- Course details page
- **Like / Dislike / Rating**
- **Course reservation**
- Comments section with submission

### 📰 Articles
- Responsive grid
- Filtering and search
- Rating and likes
- Article details page
- Comment system

### 👤 User Panel
- 📊 Statistical dashboard with charts
- 👥 Full profile editing
- 🖼️ Upload / select / delete profile images (Slider gallery)
- 📖 My Courses
- 🎫 Reserved Courses
- ❤️ Favorite Courses
- 💬 My Comments

### 🔐 Authentication
- Login with email or phone number
- 3-step registration:
  1. Submit email + phone number
  2. Verify sent code
  3. Set password
- Password recovery via email link
- **Protected Routes** for user panel

### 🎨 UI/UX
- Light / Dark / System theme
- Smooth animations
- Loading skeletons
- Toast notifications
- Beautiful modals
- Fully RTL

---

## 🛠️ Tech Stack

| Category | Technology |
|------|----------|
| **Framework** | React 18 + TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS + DaisyUI |
| **UI Components** | Material UI (MUI) |
| **State Management** | Jotai + Zustand |
| **Routing** | React Router v6 |
| **HTTP Client** | Axios |
| **Forms** | Formik + Yup |
| **Charts** | ApexCharts |
| **Sliders** | Swiper.js |
| **Icons** | React Icons |
| **Notifications** | React Toastify |
| **Date** | Jalali Moment + React Multi Date Picker |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
BEHSHAHR/
├── public/
├── src/
│   ├── app/
│   ├── assets/
│   ├── components/
│   │   ├── Auth/
│   │   ├── ArticlesDetails/
│   │   ├── CoursesDetails/
│   │   ├── CoursesList/
│   │   ├── ForgetPasswordForm/
│   │   ├── Landing/
│   │   ├── NewsArticles/
│   │   ├── common/
│   │   └── NotFound/
│   ├── context/
│   │   ├── context/
│   │   ├── jotai/
│   │   └── zustand/
│   ├── core/
│   │   ├── api/
│   │   └── provider/
│   ├── routes/
│   ├── screens/
│   │   └── layout/
│   ├── types/
│   ├── userpanel/
│   │   ├── components/
│   │   │   ├── BasicTables/
│   │   │   ├── Dashboard/
│   │   │   ├── dropdown/
│   │   │   ├── header/
│   │   │   └── UserProfile/
│   │   ├── pages/
│   │   ├── AppHeader.tsx
│   │   ├── AppLayout.tsx
│   │   └── AppSidebar.tsx
│   ├── main.tsx
│   └── index.css
├── .env.local
├── vercel.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js `>= 18`
- npm or yarn

### Steps

**1. Clone the repository**
```bash
git clone https://github.com/AbbasRostami/H-One.git
cd H-One
```

**2. Install dependencies**
```bash
npm install
```

**3. Create env file**
Create a `.env.local` file in the project root:
```env
VITE_BASE_URL=Base-URL
```

**4. Run in development mode**
```bash
npm run dev
```

**5. Build for production**
```bash
npm run build
```

**6. Preview the build**
```bash
npm run preview
```

---

## 🌍 Deployment on Vercel

The project uses **Vercel Rewrites** to handle Mixed Content issues:

```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "baseURL/:path*"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

In production, API requests go to `/api/*` and Vercel proxies them to the backend server, resolving HTTPS → HTTP mixed content restrictions.

---

## 🎯 Roadmap

- [x] Landing page design & implementation
- [x] Complete authentication system
- [x] Course listing with filters & pagination
- [x] Article listing with filters & pagination
- [x] User panel
- [x] Dark mode support
- [x] Deployment on Vercel
- [ ] Add unit tests with Vitest
- [ ] SEO optimization
- [ ] PWA support
- [ ] i18n for English language

---

## 🤝 Contributing

Contributions are welcome! If you find a bug or have a suggestion:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Developer

<div align="center">

**Abbas Rostami**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AbbasRostami)

</div>

---

## 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">

**⭐ If this project helped you, please give it a star!**

Made with ❤️ by [Abbas Rostami](https://github.com/AbbasRostami)

</div>
