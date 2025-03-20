# BaniWorks - Freelancing Platform for Sri Lanka

BaniWorks is a freelancing platform built specifically for Sri Lanka, empowering freelancers and clients to connect seamlessly. This project is developed using modern web technologies and hosted on GitHub.

## 🚀 Features

- User authentication with **KindeAuth**
- **Supabase** for database management
- **Prisma** as an ORM
- **Stripe** for secure payments
- **TalkJS** for real-time messaging
- **Next.js** for a fast and scalable frontend

## 🛠 Tech Stack

- **Frontend**: Next.js, Tailwind CSS, Radix UI, React Icons
- **Backend**: Next.js API Routes, Prisma, Supabase
- **Authentication**: KindeAuth
- **Database**: PostgreSQL (via Supabase)
- **Payments**: Stripe

## 🚀 Live Demo

[Visit Live Site](https://baniworkswebsite-55b3.vercel.app/) 

## 🔧 Getting Started

Follow these steps to set up and run the project locally.

### 📌 Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (Latest LTS version recommended)
- **npm** or **yarn**
- **Next.js 14**

### 📥 Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/LahiruZaM/baniworkswebsite.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd baniworks
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

### 🚀 Running the Project

Start the development server:
   ```sh
   npm run dev
   ```
   or
   ```sh
   yarn dev
   ```

The application will be available at `http://localhost:3000` by default.

### 🛠 Modifying the Project

#### Updating Content
Modify relevant data and content in the necessary files to customize the platform.

#### Customizing UI
All UI components and styles are located in `components/` and `styles/`. Update these files to change the look and feel.

#### API & Backend Integration
Modify API calls in `services/api.js` to connect the frontend with your backend services.

### 🏗 Build for Production
To build the project for production, run:
   ```sh
   npm run build
   ```
   or
   ```sh
   yarn build
   ```
The optimized output will be available in the `.next` directory.

## 📁 Environment Variables

Create a `.env` file in the root directory and add the following variables:

```sh
KINDE_CLIENT_ID=****
KINDE_CLIENT_SECRET=****
KINDE_ISSUER_URL=****
KINDE_SITE_URL=****
KINDE_POST_LOGOUT_REDIRECT_URL=****
KINDE_POST_LOGIN_REDIRECT_URL=****

DATABASE_URL=****
DIRECT_URL=****

SUPABASE_URL=****
SUPABASE_ANON_KEY=****

NEXT_PUBLIC_STRIPE_PUBLIC_KEY=****
STRIPE_SECRET_KEY=****
```

**Note:** Keep your `.env` file private and never expose real keys in public repositories.

## 📜 License

This project is licensed under the MIT License.

## 📩 Contact

For any questions or contributions, feel free to reach out!

---

Let me know if you need any changes! 🚀
