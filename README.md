# BEAM Theology & World Religions Institute

A modern, responsive landing page for the BEAM Theology & World Religions Institute, built with Next.js, Tailwind CSS, and designed for interfaith education and community building.

## Features

- **Modern Design**: Clean, professional interface with interfaith imagery and symbolism
- **Responsive Layout**: Mobile-first design that works on all devices
- **Course Catalog**: Comprehensive display of theological and religious studies courses
- **City Chapter Selector**: Find local chapters and community groups
- **Donation System**: Integrated Stripe donation widget with recurring options
- **Community Section**: Testimonials and certification program information
- **Supabase Integration**: Ready for backend database integration

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database**: Supabase (configured for future use)
- **Payments**: Stripe integration (frontend ready)
- **TypeScript**: Full type safety
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd theology.beamthinktank.space
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── CitySelector.tsx   # City chapter selector
│   ├── DonationWidget.tsx # Stripe donation widget
│   ├── CourseGrid.tsx     # Course catalog
│   ├── CommunitySection.tsx # Community features
│   └── Footer.tsx         # Site footer
└── lib/                   # Utility libraries
    └── supabase.ts        # Supabase configuration
```

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase (for future backend integration)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe (for payment processing)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Set up the following tables:
   - `city_chapters` - Local chapter information
   - `courses` - Course catalog data
   - `donations` - Donation records
3. Add your Supabase credentials to `.env.local`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy
4. Add environment variables in Vercel dashboard

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## Customization

### Colors and Branding

Update the color scheme in `tailwind.config.js` and component files to match your brand colors.

### Content

- Update course information in `CourseGrid.tsx`
- Modify city chapters in `CitySelector.tsx`
- Customize testimonials in `CommunitySection.tsx`
- Update contact information in `Footer.tsx`

### Images and Icons

Replace emoji placeholders with actual images:
- Course images
- Religious symbols
- Community photos
- Logo and branding

## Future Enhancements

- **Backend Integration**: Connect to Supabase for dynamic data
- **User Authentication**: Student and instructor accounts
- **Course Management**: Admin panel for course creation
- **Payment Processing**: Full Stripe integration
- **Email Marketing**: Newsletter and course updates
- **Analytics**: Track engagement and conversions
- **Multi-language**: Internationalization support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or support, please contact:
- Email: info@beamtheology.org
- Website: www.beamtheology.org

## Acknowledgments

- Next.js team for the excellent framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icons
- Supabase for the backend-as-a-service platform
