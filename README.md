# Our Wedding RSVP App 💍

A personal wedding RSVP application built with Next.js to help our guests confirm their attendance and get information about our special day.

## Features 🌟

- **Interactive Maps**: Integration with Leaflet for venue location and directions
- **Modern UI**: Built with React and styled with Tailwind CSS
- **Type Safety**: Written in TypeScript for better development experience
- **Responsive Design**: Works seamlessly across all devices

## About 💝

This web application serves as the digital RSVP platform for our wedding celebration. Guests can:
- Confirm their attendance
- Find venue directions
- View event schedule
- Access important wedding day information

## Tech Stack 💻

- [Next.js](https://nextjs.org/) (v15.3.3) - React framework for production
- [React](https://react.dev/) (v19) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Leaflet](https://leafletjs.com/) - Maps integration

## Development 🚀

### Prerequisites

- Node.js (LTS version recommended)
- pnpm (recommended) or npm

### Local Setup

1. Install dependencies:
```bash
pnpm install
# or
npm install
```

2. Set up environment variables:
Create a `.env.local` file in the root directory with necessary environment variables.

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Scripts 📝

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality

## Project Structure 📁

```
wedding-app/
├── src/              # Source files
├── public/           # Static files
├── .next/           # Next.js build output
├── node_modules/    # Dependencies
└── ...config files  # Various configuration files
```

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- Next.js team for the amazing framework
