# Quick Start Guide

## Prerequisites
- Node.js 18 or higher
- npm, yarn, or pnpm

## Setup Instructions

1. **Clone and install dependencies**
```bash
npm install
```

2. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env and add your AUTH_SECRET
```

3. **Initialize the database**
```bash
npx prisma migrate dev
# or
npx prisma db push
```

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## First Steps

1. Click "Create Account" on the homepage
2. Fill in your name, email, and password (min 6 characters)
3. You'll be automatically logged in and redirected to the dashboard
4. Explore the protected dashboard area

## Building for Production

```bash
npm run build
npm start
```

## Common Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma migrate dev` - Create a new migration

## Troubleshooting

**Database errors?**
- Make sure you've run `npx prisma db push` or `npx prisma migrate dev`
- Check that `DATABASE_URL` in `.env` is correct

**Authentication not working?**
- Ensure `AUTH_SECRET` is set in `.env`
- Try clearing your browser cookies

**Build errors?**
- Delete `.next` folder and `node_modules`
- Run `npm install` and `npm run build` again

## Need Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://authjs.dev)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
