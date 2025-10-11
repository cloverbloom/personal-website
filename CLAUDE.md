# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build production site
- `npm run lint` - Run ESLint
- `npm run check` - Run build and TypeScript check
- `npm run start` - Start production server

### Cloudflare Deployment
- `npm run preview` - Preview build locally before deploying
- `npm run deploy` - Deploy to Cloudflare Workers (runs `opennextjs-cloudflare build && opennextjs-cloudflare deploy`)
- `npm run cf-typegen` - Generate Cloudflare types for env.d.ts
- `npm wrangler tail` - View real-time logs for all Workers

## Architecture Overview

This is a personal website built with **Next.js 15 + React 19** deployed to **Cloudflare Workers** via OpenNext.

### Key Technologies
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom design system utilities
- **UI Components**: shadcn/ui built on Radix UI primitives
- **Typography**: Geist Sans & Geist Mono fonts
- **Deployment**: Cloudflare Workers via OpenNext adapter
- **TypeScript**: Fully typed codebase

### Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with breadcrumb navigation
│   ├── page.tsx           # Homepage with personal intro
│   ├── content/page.tsx   # Content page
│   ├── journaling/page.tsx # Journaling page
│   └── globals.css        # Global styles and design system
├── components/ui/         # shadcn/ui components
│   └── breadcrumb.tsx     # Custom breadcrumb navigation
└── lib/
    └── utils.ts           # Utility functions (cn helper, etc.)
```

### Styling System
- **Tailwind CSS v4** with inline theme configuration in globals.css
- **Custom typography utilities**: `.heading-1`, `.heading-2`, `.heading-3`, `.text-body`, `.tab`, `.title`, `.paragraph`
- **Dark mode support** via CSS custom properties and `.dark` class
- **Design tokens** defined as CSS variables using oklch color space
- **Responsive design** with container-based layout

### Component Architecture
- **shadcn/ui pattern**: Reusable components with `cn()` utility for conditional styling
- **Radix UI primitives**: Accessible base components (Slot, Icons)
- **Forward refs**: All components properly forward refs for composition
- **TypeScript interfaces**: Strict typing with proper prop inheritance

### Navigation & Layout
- **Global breadcrumb navigation** in root layout
- **Container-based layout** with consistent padding and max-width
- **Accessibility features**: ARIA labels, screen reader support

### Deployment Architecture
- **OpenNext Cloudflare adapter** transforms Next.js build for Workers
- **Static generation** where possible for optimal performance
- **Edge runtime** deployment on Cloudflare's global network
- **Potential R2 caching** available but not currently enabled

### Development Notes
- Uses **App Router** (not Pages Router)
- **Server Components** by default
- **Custom font loading** with variable fonts
- **Modern CSS** with custom properties and oklch colors
- **ESLint** configuration with Next.js rules