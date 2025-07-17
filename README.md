# Portfolio Website

A modern, responsive portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This project showcases your skills, projects, certificates, and contact information.

## Features

- **Hero Section:** Eye-catching introduction with animated elements.
- **About Section:** Professional overview and experience.
- **Certificates:** Carousel of earned certificates.
- **Skills:** Categorized technical skills with icons.
- **Projects:** Featured projects with descriptions and tags.
- **Contact:** Social and email links for easy connection.
- **Navigation:** Responsive navigation bar for smooth scrolling.

## Project Structure

```
project/
├── app/
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── CertificateSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── SkillsSection.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/         # Reusable UI components (button, card, etc.)
├── hooks/          # Custom React hooks
├── lib/
│   └── mockdata.ts # Data for projects, certificates, skills
├── public/         # Static assets (images, etc.)
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Data Documentation

### Projects

Defined in [`lib/mockdata.ts`](lib/mockdata.ts) as `projects`. Each project has:
- `title`: Project name
- `description`: Short summary
- `image`: Path to image
- `tags`: Array of technologies used

### Certificates

Defined in [`lib/mockdata.ts`](lib/mockdata.ts) as `cert`. Each certificate has:
- `id`: Unique identifier
- `title`: Certificate name
- `description`: Details
- `image`: Path to certificate image

### Skills

Defined in [`lib/mockdata.ts`](lib/mockdata.ts) as `technologies`. Each skill category has:
- `category`: Name (Frontend, Backend, Tools)
- `skills`: Array of `{ name, icon }` objects

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

4. **Export static site:**
   ```sh
   npm run export
   ```

## Customization

- Update your data in [`lib/mockdata.ts`](lib/mockdata.ts).
- Add images to the [`public`](public) folder.
- Modify styles in [`app/globals.css`](app/globals.css) and [`tailwind.config.ts`](tailwind.config.ts).
- Extend UI components in [`components/ui`](components/ui).

## License

This project is open source and available under the MIT License.
