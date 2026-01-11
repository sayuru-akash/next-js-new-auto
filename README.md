# Next.js Authentication Application

A modern, full-stack Next.js 16 application with authentication, built with the latest technologies and best practices.

## 🚀 Features

- **Next.js 16** - Latest version with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS v4** - Modern styling with utility-first CSS
- **shadcn/ui** - Beautiful, accessible UI components
- **NextAuth.js v5 (Auth.js)** - Secure authentication
- **Prisma ORM** - Type-safe database access
- **SQLite** - Lightweight database (easily swappable)
- **bcryptjs** - Secure password hashing
- **Zod** - Schema validation
- **Lucide Icons** - Beautiful icon set

## 📋 Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd next-js-new-auto
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
The `.env` file should already contain:
```env
DATABASE_URL="file:./dev.db"
AUTH_SECRET="your-generated-secret"
AUTH_URL="http://localhost:3000"
```

4. Initialize the database:
```bash
npx prisma migrate dev
```

## 🚀 Running the Application

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── actions/         # Server actions
│   ├── api/             # API routes
│   ├── dashboard/       # Protected dashboard page
│   ├── login/           # Login page
│   ├── register/        # Registration page
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── login-form.tsx   # Login form component
│   └── register-form.tsx # Register form component
├── lib/
│   ├── db.ts            # Prisma client
│   └── utils.ts         # Utility functions
├── prisma/
│   ├── migrations/      # Database migrations
│   └── schema.prisma    # Database schema
├── auth.ts              # NextAuth configuration
└── prisma.config.ts     # Prisma configuration
```

## 🔐 Authentication Flow

1. **Registration**: Users can create an account with name, email, and password
2. **Login**: Users authenticate with email and password
3. **Protected Routes**: Dashboard is only accessible to authenticated users
4. **Logout**: Users can sign out securely

## 🗄️ Database Schema

The application uses a simple User model:

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🎨 Styling

The application uses:
- Tailwind CSS v4 with custom CSS variables
- Dark mode support
- shadcn/ui components for consistent design
- Responsive design for all screen sizes

## 🔧 Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Prisma commands
npx prisma studio        # Open Prisma Studio
npx prisma migrate dev   # Create a migration
npx prisma generate      # Generate Prisma Client
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

For deployment on other platforms, ensure you:
1. Set environment variables properly
2. Run `npm run build` to create a production build
3. Use SQLite or migrate to PostgreSQL/MySQL for production

## 🔒 Security Features

- Passwords hashed with bcryptjs
- CSRF protection via NextAuth
- Secure session management
- Input validation with Zod
- Environment variables for sensitive data

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Support

For support, please open an issue in the GitHub repository.
