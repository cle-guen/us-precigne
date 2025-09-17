# Sports Association Website

## Overview

This is a fully implemented Next.js 14 website for a French sports association that showcases 5 sports activities: Football, Gymnastics, Judo, Tennis, and Yoga. The site features a beautiful homepage with sport cards, individual sport pages with detailed information, schedules, contact details, and embedded PDF document viewers. It includes a news section for announcements and events. The application is successfully configured for static export and has been tested to generate all required static files.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 14 with App Router for modern React development and file-based routing
- **Styling**: Tailwind CSS for utility-first styling with custom components
- **TypeScript**: Full TypeScript implementation for type safety and better developer experience
- **Static Export**: Configured for static site generation (`output: 'export'`) with unoptimized images for static hosting compatibility

### Component Structure
- **Reusable Components**: Modular component architecture with dedicated components for sports cards, schedules, PDF viewers, and news lists
- **Layout System**: Centralized layout with navigation header and footer
- **Type Safety**: Comprehensive TypeScript interfaces for sports data, news items, contact information, and schedules

### Data Management
- **Static Data**: Sports and news data stored in TypeScript files (`src/data/sports.ts` and `src/data/news.ts`)
- **Content Structure**: Each sport includes hero images, descriptions, schedules, contact information, and downloadable PDFs
- **Dynamic Routing**: Sport detail pages use Next.js dynamic routes with static generation

### Content Architecture
- **Multi-Sport Support**: Flexible data structure supporting different types of sports with varying contact methods and schedules
- **Document Management**: PDF document integration with preview capabilities and download functionality
- **Image Management**: Hero and content images for each sport with Next.js Image optimization

### Routing Strategy
- **Static Generation**: Pre-generated pages for all sports using `generateStaticParams`
- **SEO Optimization**: Dynamic metadata generation for each sport page with relevant titles, descriptions, and keywords
- **404 Handling**: Built-in not found pages for invalid sport slugs

## External Dependencies

### Core Framework Dependencies
- **Next.js 14**: React framework for production with App Router
- **React 18**: Modern React with concurrent features
- **TypeScript**: Static type checking and enhanced development experience

### Styling Dependencies
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **PostCSS**: CSS processing with Autoprefixer for cross-browser compatibility
- **Inter Font**: Google Fonts integration for consistent typography

### Development Tools
- **ESLint**: Code linting with Next.js recommended configuration
- **TypeScript Compiler**: Type checking and compilation
- **Next.js Dev Server**: Development server running on port 5000

### Asset Requirements
- **Images**: Sport hero and content images stored in `/public/images/`
- **PDFs**: Downloadable documents stored in `/public/pdfs/`
- **Static Assets**: All assets served from the public directory for static export compatibility

### Potential Integrations
- Social media links (Facebook pages for sports sections)
- Email contact systems
- Phone contact integration
- External sports organization websites