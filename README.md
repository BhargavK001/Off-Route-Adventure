# Off Route Adventure

A modern Next.js-powered travel and adventure website for Off Route Adventure. Features a responsive design, integrated booking system via Resend API, and full SEO optimization.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Icons:** Lucide React
- **Forms:** React Hook Form
- **Email:** Resend API

## 📁 Project Structure

```
src/
├── app/
│   ├── about/          # About Us page
│   ├── api/
│   │   ├── booking/    # Booking form API
│   │   └── contact/    # Contact form API
│   ├── book/           # Booking page
│   ├── contact/        # Contact & Reviews page
│   ├── explore/        # Image gallery page
│   ├── plans/          # Tour packages page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── robots.ts       # robots.txt generator
│   └── sitemap.ts      # sitemap.xml generator
├── components/
│   ├── Footer.tsx      # Site footer
│   ├── Header.tsx      # Navigation header
│   └── WhatsAppButton.tsx  # Floating WhatsApp button
├── data/
│   └── destinations.ts # Destinations data
└── lib/
    └── constants.ts    # Site constants
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/BhargavK001/Off-Route-Adventure.git
   cd Off-Route-Adventure
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Add your Resend API key to `.env.local`:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables:
   - `RESEND_API_KEY`
4. Deploy!

### Environment Variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key for email notifications |
| `NEXT_PUBLIC_SITE_URL` | (Optional) Site URL for absolute links |

## 📧 Email Integration

The site uses [Resend](https://resend.com) for email notifications. To enable:

1. Create an account at [resend.com](https://resend.com)
2. Generate an API key
3. Add it to your environment variables
4. (Production) Verify your domain for custom sender addresses

## 🎨 Features

- ✅ Responsive mobile-first design
- ✅ SEO optimized with meta tags, sitemap, and robots.txt
- ✅ Booking form with validation
- ✅ Contact and review forms
- ✅ WhatsApp floating button
- ✅ 16 tour destinations
- ✅ Image gallery
- ✅ OpenGraph tags for social sharing

## 📞 Contact

- **Email:** off.route.adventure.11@gmail.com
- **Phone:** +91 92704 28541
- **WhatsApp:** [Click to Chat](https://wa.me/919270428541)

## 📄 License

This project is proprietary. All rights reserved.
