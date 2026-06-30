# Roy Nyasha Nechombo Portfolio

Premium multi-page portfolio built with React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, React Router, Lenis, and EmailJS.

## Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- React Icons
- Lucide React
- Lenis
- GSAP
- EmailJS

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## EmailJS configuration

Create a `.env` file in the project root with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If these values are not set, the contact form still works in fallback mode for demo purposes and shows a success state without sending.

## Routes

- `/`
- `/projects`
- `/beyond-code`
- `/contact`

## Notes

- SEO metadata is handled in `index.html` for the first paint and enhanced per route in `src/components/ui/SeoHead.tsx`.
- `public/robots.txt`, `public/sitemap.xml`, and `public/og-image.svg` are included for deployment readiness.
- GitHub data uses a live API fetch with static fallback data so the section remains resilient offline or during rate limits.
