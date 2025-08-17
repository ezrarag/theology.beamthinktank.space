# Deployment Guide - BEAM Theology & World Religions Institute

## 🚀 Quick Start

Your Next.js landing page is ready for deployment! Here's how to get it live:

### 1. Push to GitHub

```bash
# Add all files
git add .

# Commit changes
git commit -m "Initial commit: BEAM Theology landing page"

# Push to GitHub
git push origin main
```

### 2. Deploy to Vercel (Recommended)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository

2. **Automatic Detection**
   - Vercel will auto-detect Next.js
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Output directory: `.next`

3. **Environment Variables** (Optional for now)
   - Add these in Vercel dashboard if you want to use Supabase/Stripe later:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
   ```

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

### 3. Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 🌐 What's Included

### ✅ Complete Landing Page
- **Header**: BEAM branding with navigation
- **Hero Section**: Interfaith imagery and messaging
- **City Selector**: Local chapter finder
- **Donation Widget**: Stripe-ready payment form
- **Course Grid**: Islamic, Christian, and Esoteric studies
- **Community Section**: Testimonials and certifications
- **Footer**: Contact info and social links

### ✅ Technical Features
- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **Responsive Design** for all devices
- **SEO Optimized** with proper metadata
- **Performance Optimized** with Next.js best practices

### ✅ Ready for Backend
- **Supabase Integration** configured
- **Stripe Payment** frontend ready
- **Database Types** defined
- **API Structure** prepared

## 🔧 Customization

### Colors & Branding
- Update colors in `tailwind.config.js`
- Modify component color schemes
- Replace emoji placeholders with images

### Content
- Edit course information in `CourseGrid.tsx`
- Update city chapters in `CitySelector.tsx`
- Modify testimonials in `CommunitySection.tsx`
- Change contact details in `Footer.tsx`

### Images
- Replace emoji placeholders with actual images
- Add your logo and branding
- Include religious symbols and community photos

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly navigation
- Optimized for all screen sizes
- Fast loading on mobile networks

## 🔒 Security & Performance

- **No sensitive data** in client-side code
- **Environment variables** for configuration
- **Optimized builds** with Next.js
- **Static generation** for fast loading
- **SEO friendly** with proper meta tags

## 🚀 Next Steps

1. **Deploy to Vercel** (easiest)
2. **Connect Supabase** for dynamic data
3. **Set up Stripe** for payments
4. **Add analytics** (Google Analytics, etc.)
5. **Customize content** and branding
6. **Add more pages** as needed

## 📞 Support

- **Documentation**: Check the README.md
- **Issues**: Use GitHub issues
- **Questions**: Contact the development team

---

**Your BEAM Theology & World Religions Institute landing page is ready to go live! 🎉**
