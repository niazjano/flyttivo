# Flyttivo Design System

A cohesive, premium design system for the Flyttivo website ensuring visual consistency across all pages.

## Colors

### Primary Colors
- **Primary**: `#1E5F99` - Main Flyttivo blue (used for primary CTAs, links, and brand elements)
- **Primary Dark**: `#174A77` - Hover state for primary buttons
- **Primary Light**: `#E6F0FB` - Light backgrounds and subtle accents

### Neutral Colors
- **Neutral 900**: `#0F172A` - Headings and important text
- **Neutral 700**: `#334155` - Body text and secondary headings
- **Neutral 500**: `#64748B` - Muted text and placeholders
- **Neutral 100**: `#F3F6F9` - Light backgrounds and borders

### Accent Colors
- **Accent Yellow**: `#F9A826` - Highlights and badges (use sparingly)
- **Success**: `#22C55E` - Success states and confirmations
- **Error**: `#EF4444` - Error states and warnings

### Usage
Colors are defined in `src/app/globals.css` as CSS custom properties and can be accessed via Tailwind classes or inline styles.

## Typography

### Type Scale
- **Display / Hero Title**: `text-3xl sm:text-4xl md:text-5xl` - Main hero headlines
- **Section Heading**: `text-2xl sm:text-3xl` - Section titles (h2)
- **Card Title**: `text-base sm:text-lg font-semibold` - Card and card-like component titles
- **Body Text**: `text-sm sm:text-base` - Standard body copy
- **Small Text**: `text-xs sm:text-sm` - Captions, labels, and fine print

### Font Family
- **Primary**: Inter (loaded via Next.js font optimization)
- **Fallback**: `system-ui, -apple-system, sans-serif`

### Font Weights
- **Regular**: `400` - Body text
- **Medium**: `500` - Emphasized text
- **Semibold**: `600` - Headings and important text
- **Bold**: `700` - Strong emphasis (use sparingly)

## Button Component

### Location
`src/components/ui/Button.tsx`

### Variants

#### Primary
```tsx
<Button variant="primary" href="/kontakt">
  Få gratis offert
</Button>
```
- Background: `#1E5F99`
- Hover: `#174A77`
- Shadow: Soft blue shadow for depth
- Use for: Main CTAs, primary actions

#### Secondary
```tsx
<Button variant="secondary" href="tel:0447853002">
  Ring oss
</Button>
```
- Transparent background with white border
- Hover: Subtle white overlay
- Use for: Secondary actions, especially on dark backgrounds

#### Ghost
```tsx
<Button variant="ghost" href="/about">
  Läs mer
</Button>
```
- White background with border
- Hover: Primary color border and text
- Use for: Tertiary actions, links on light backgrounds

### Props
- `variant`: `"primary" | "secondary" | "ghost"` (default: `"primary"`)
- `href`: Optional - if provided, renders as Link component
- `children`: Button text/content
- `className`: Additional CSS classes
- All standard button HTML attributes

## Card Component

### Location
`src/components/ui/Card.tsx`

### Usage
```tsx
<Card href="/flyttfirma">
  {/* Card content */}
</Card>

// Or without link
<Card>
  {/* Card content */}
</Card>
```

### Default Styles
- Background: White
- Border: `border-slate-200`
- Border radius: `rounded-2xl`
- Shadow: `shadow-sm`
- Hover: `-translate-y-1` with `shadow-md`
- Transition: Smooth 200ms transitions

### Props
- `href`: Optional - if provided, renders as Link component
- `children`: Card content
- `className`: Additional CSS classes
- `onClick`: Optional click handler

## Spacing

### Section Spacing
- **Large sections**: `py-20` (80px vertical padding)
- **Medium sections**: `py-16 sm:py-20` (64px/80px)
- **Small sections**: `py-12` (48px)

### Grid Gaps
- **Card grids**: `gap-5 sm:gap-6` (20px/24px)
- **Form fields**: `gap-6` (24px)
- **Button groups**: `gap-4` (16px)

## Best Practices

1. **Consistency**: Always use the Button and Card components instead of custom styles
2. **Colors**: Use the defined color tokens - avoid hardcoding hex values
3. **Typography**: Follow the type scale for consistent hierarchy
4. **Spacing**: Use the spacing scale for consistent rhythm
5. **Responsive**: Always consider mobile-first design with responsive breakpoints

## Implementation Notes

- Colors are defined in `src/app/globals.css` as CSS custom properties
- Components are located in `src/components/ui/`
- All components are TypeScript with proper type definitions
- Components support both Link and button rendering based on props

