# Land Your Web Design System

> **"Editorial Confidence"** — A design system for professional practices.
> Synthesized from Stripe (premium depth), Vercel (shadow precision), Apple (binary rhythm), Notion (warm neutrals).

## 1. Visual Theme & Atmosphere

Land Your Web builds websites for professional practices — dentists, lawyers, accountants, clinics. These are people who wear suits to work. They need to project trust, competence, and premium quality. Not trendy. Not flashy. Not "tech startup."

The system uses a warm cream canvas (`#fafaf8`) with pure white cards (`#ffffff`) and a confident blue accent (`#2d4ce4`) — professional but warm, like a high-end architecture firm's website. The navy (`#0d1b3e`) provides depth for brand moments without the harshness of pure black.

The typography follows Stripe's weight-300 philosophy: headlines are light enough to feel confident, never shouting. Source Sans 3 provides clean, humanist letterforms at every scale, with JetBrains Mono for technical labels.

**Key Characteristics:**
- Light-first: warm cream canvas, white cards — professional trust over tech aesthetic
- Single confident blue accent (`#2d4ce4`) — professional, medical-adjacent, trustworthy
- Weight-300 display headlines — whisper-weight authority (Stripe influence)
- Shadow-as-border for cards — subtle definition without visible box-model weight (Vercel influence)
- Binary section rhythm: cream ↔ white alternating (Apple influence)
- Editorial left-alignment, generous negative space, 6-act narrative arc (L6 methodology)
- Navy depth sections for brand immersion moments

## 2. Color Palette & Roles

### Primary
- **LYW Blue** (`#2d4ce4`): Primary brand color. CTAs, link text, interactive highlights. A confident, professional blue — not corporate, not playful.
- **Navy** (`#0d1b3e`): Depth color. Dark section backgrounds, footer, brand immersion moments. Warmer than black.
- **Canvas Cream** (`#fafaf8`): Page background. Slightly warm — not sterile white, not beige. The foundation.
- **Surface White** (`#ffffff`): Card surfaces, elevated containers. Pure white pops off the cream canvas.

### Accent Colors
- **Teal** (`#0d9488`): Success states, completion badges, medical/professional trust signals.
- **Blue Hover** (`#1e3ab5`): Darker blue for hover states on primary elements.
- **Blue Light** (`#e8edfd`): Tinted surface for blue-themed cards and highlights.

### Text Scale
- **Text Primary** (`#1a1a18`): Headings, nav text, strong labels. Warm near-black.
- **Text Secondary** (`#575753`): Body text, descriptions, captions. Readable warm gray.
- **Text Muted** (`#8a8985`): Placeholder text, disabled states, tertiary labels.

### Surface & Borders
- **Border Default** (`#e8e7e4`): Standard border for cards, dividers. Warmer than pure gray.
- **Border Subtle** (`#ebeae7`): Lighter border for secondary elements.
- **Border Accent** (`rgba(45, 76, 228, 0.25)`): Active/selected state borders.

### Shadows (Vercel-inspired)
- **Card Border** (`rgba(0, 0, 0, 0.06) 0px 0px 0px 1px`): Shadow-as-border — replaces traditional CSS borders.
- **Card Lift** (`rgba(0, 0, 0, 0.04) 0px 2px 4px`): Minimal elevation for standard cards.
- **Card Full** (`rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 4px, rgba(0,0,0,0.02) 0px 8px 16px -4px`): Full card shadow — border + lift + depth.
- **Card Featured** (`rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.06) 0px 4px 8px, rgba(0,0,0,0.04) 0px 12px 24px -8px`): Elevated cards, featured panels.

## 3. Typography Rules

### Font Family
- **Primary**: `Source Sans 3`, with fallback: `system-ui, -apple-system, sans-serif`
- **Monospace**: `JetBrains Mono`, with fallback: `ui-monospace, SFMono-Regular, monospace`
- **Features**: `"tnum"` (tabular numerals) for counters, metrics, data displays.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Source Sans 3 | clamp(3rem, 7vw, 6rem) | 300 | 0.95 | -0.03em | Maximum size, whisper-weight authority |
| Display Large | Source Sans 3 | clamp(2.5rem, 5vw, 4.5rem) | 300 | 1.05 | -0.02em | Secondary hero headlines |
| Section Heading | Source Sans 3 | clamp(2rem, 4vw, 3.5rem) | 300 | 1.10 | -0.02em | Major section titles |
| Sub-heading | Source Sans 3 | 1.5rem (24px) | 400 | 1.20 | normal | Card headings, sub-sections |
| Body Large | Source Sans 3 | 1.125rem (18px) | 400 | 1.60 | normal | Introductions, feature descriptions |
| Body | Source Sans 3 | 1rem (16px) | 400 | 1.60 | normal | Standard reading text |
| Body Small | Source Sans 3 | 0.875rem (14px) | 400 | 1.50 | normal | Secondary text, captions |
| Button | Source Sans 3 | 0.875rem (14px) | 600 | 1.00 | normal | Primary CTA text |
| Nav Link | Source Sans 3 | 0.875rem (14px) | 400 | 1.00 | normal | Navigation links |
| Caption | Source Sans 3 | 0.75rem (12px) | 400 | 1.40 | normal | Metadata, tags, dates |
| Mono Label | JetBrains Mono | 0.7rem (11px) | 500 | 1.00 | 0.3em | Uppercase section labels |
| Mono Code | JetBrains Mono | 0.8125rem (13px) | 400 | 1.70 | normal | Code blocks, technical text |

### Principles
- **Weight 300 for headlines**: The light weight creates authority through restraint. Headlines don't shout — they're confident enough to whisper. (Stripe influence)
- **Two-weight simplicity**: Primarily 300 (headlines) and 400 (body/UI). Weight 600 reserved for buttons only.
- **Tight tracking at display sizes**: -0.03em at hero, -0.02em at section headings, normal at body. Density communicates precision.
- **Generous line height at reading sizes**: 1.60 for body text — comfortable reading for professional audiences who read carefully.
- **Mono for structure**: JetBrains Mono at small sizes with 0.3em tracking for section labels — architectural, not decorative.

## 4. Component Stylings

### Buttons

**Primary Blue**
- Background: `#2d4ce4`
- Text: `#ffffff`
- Padding: 12px 28px
- Radius: 8px
- Font: 14px Source Sans 3 weight 600
- Hover: `#1e3ab5` background, subtle lift (translateY -1px)
- Shadow: `rgba(45, 76, 228, 0.25) 0px 4px 12px`
- Use: Primary CTA ("Start your project", "Get started")

**Secondary Outline**
- Background: transparent
- Text: `#1a1a18`
- Padding: 12px 28px
- Radius: 8px
- Border: `rgba(0, 0, 0, 0.08) 0px 0px 0px 1px` (shadow-as-border)
- Font: 14px Source Sans 3 weight 400
- Hover: border darkens to `rgba(0, 0, 0, 0.15)`, text stays same
- Use: Secondary actions ("See what's included", "Learn more")

**Ghost**
- Background: transparent
- Text: `#2d4ce4`
- Padding: 8px 16px
- Radius: 8px
- Hover: background shifts to `rgba(45, 76, 228, 0.05)`
- Use: Tertiary/inline actions

### Cards & Containers
- Background: `#ffffff`
- Shadow: `rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 4px, rgba(0,0,0,0.02) 0px 8px 16px -4px` (full card stack)
- Radius: 12px (standard), 16px (featured)
- Padding: 24px (standard), 32px (featured)
- Hover: shadow intensifies, card lifts 2px
- Accent card: border changes to `rgba(45, 76, 228, 0.25)`, subtle blue-tinted shadow

### Navigation
- Clean horizontal nav, sticky with backdrop blur
- Background: `rgba(250, 250, 248, 0.85)` (semi-transparent cream) with `backdrop-blur-xl`
- After scroll: border-bottom `rgba(0,0,0,0.06) 0px 0px 0px 1px` (shadow-as-border)
- LYW logotype left-aligned, Source Sans 3 weight 600
- Nav links: 14px weight 400, `#575753` → `#1a1a18` on hover
- Primary CTA right-aligned: blue button

### Badges & Tags
- Background: `#e8edfd` (tinted blue)
- Text: `#2d4ce4`
- Padding: 2px 10px
- Radius: 9999px (full pill)
- Font: 11px weight 600
- Use: "Most Popular", status indicators

### Inputs & Forms
- Border: shadow-as-border `rgba(0,0,0,0.08) 0px 0px 0px 1px`
- Radius: 8px
- Padding: 10px 14px
- Focus: `2px solid #2d4ce4` outline + `rgba(45, 76, 228, 0.15) 0px 0px 0px 3px`
- Label: 14px weight 400, `#575753`
- Placeholder: `#8a8985`

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128
- Section vertical padding: 96px-128px desktop, 64px mobile

### Grid & Container
- Max content width: 1280px
- Editorial column (reading): 65ch (~680px)
- Hero: left-aligned with generous negative space
- Feature grids: 2-4 columns depending on content density
- Section rhythm: cream ↔ white alternating (Apple binary influence)

### Whitespace Philosophy
- **Confidence through emptiness**: Generous padding communicates luxury. Crowded layouts feel cheap.
- **Section breathing**: Every section gets 96px+ vertical padding — content never feels cramped.
- **Asymmetric balance**: Left-aligned headlines, varied column widths. No centered symmetry — editorial, not templated.
- **The 8% rule**: A vertical line at 8% from the left edge runs through the page as a golden thread (L6 technique).

### Border Radius Scale
- Standard cards: 12px
- Featured cards: 16px
- Buttons: 8px
- Inputs: 8px
- Badges: 9999px (full pill)
- Images: 12px

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, text content |
| Border (Level 1) | `rgba(0,0,0,0.06) 0px 0px 0px 1px` | Shadow-as-border for cards, inputs |
| Subtle (Level 2) | Border + `rgba(0,0,0,0.04) 0px 2px 4px` | Standard cards with minimal lift |
| Standard (Level 3) | Full card stack | Featured cards, panels, sections |
| Elevated (Level 4) | Featured stack + stronger shadow | Highlighted tiers, modals |
| Focus (Accessibility) | `2px solid #2d4ce4` + glow | Keyboard focus ring |

**Shadow Philosophy**: Every border is a shadow. Every shadow has a purpose. No decoration — only structure. (Vercel influence)

## 7. Narrative Arc (L6 Integration)

Every Land Your Web page follows a 6-act structure:

| Act | Purpose | Technique |
|-----|---------|-----------|
| I — The Hook | Create tension | Editorial headline, single CTA, massive negative space |
| II — The Proof | Name the gap | Comparison cards, concrete metrics, "Them vs Us" |
| III — The Method | Build trust | Before/After framing, timeline with golden thread |
| IV — The Arsenal | Show depth | Grid gallery, all services visible, nothing hidden |
| V — The Investment | Make it easy | Three tiers, "Most Popular" badge, clear pricing |
| VI — The Leap | Close the deal | Direct challenge hook, confident CTA, no decoration |

### Golden Thread
A single vertical line at 8% from left edge runs through hero and CTA, visually anchoring the page. It's subtle — `rgba(0,0,0,0.04)` gradient from transparent to visible to transparent — but it subconsciously ties the narrative together.

### Section Transitions
Each section uses a gradient line bridge (not a hard border):
```css
background: linear-gradient(to right, transparent, rgba(45, 76, 228, 0.06), transparent);
```

## 8. Do's and Don'ts

### Do
- Use Source Sans 3 weight 300 for all headlines — lightness is the voice
- Use shadow-as-border (`0px 0px 0px 1px`) instead of traditional CSS borders
- Keep the cream canvas — never pure white page backgrounds
- Alternate section backgrounds (cream ↔ white) for cinematic rhythm
- Use the golden thread (8% left vertical line) as a unifying element
- Left-align headlines — editorial, not centered
- Use generous white space — confidence through emptiness
- Keep border-radius between 8px-16px — soft but not playful
- Single blue accent (`#2d4ce4`) — professional, not decorative

### Don't
- Don't use weight 600+ for headlines — weight 300 is the brand voice
- Don't use traditional `border: 1px solid` on cards — use shadow-as-border
- Don't use purple, magenta, or orange accents — blue is the professional anchor
- Don't center headlines or CTA text — editorial left-alignment is intentional
- Don't use glass morphism, gradients, or glow effects — structure over decoration
- Don't use dark mode as the primary presentation — light mode projects professional trust
- Don't use bold text (>600) except on buttons
- Don't use >3 columns in feature grids — keep it scannable
- Don't hide content in carousels or horizontal scrolls — grid galleries show everything

## 9. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, reduced heading sizes, stacked cards |
| Tablet | 640-1024px | 2-column grids, moderate padding |
| Desktop | 1024-1280px | Full layout, 3-column feature grids |
| Large | >1280px | Centered content with generous margins |

### Collapsing Strategy
- Hero: display size compresses → section heading on mobile
- Navigation: horizontal → hamburger
- Feature grids: 3-col → 2-col → 1-col stacked
- Section spacing: 96px → 64px on mobile
- Golden thread: visible on desktop, hidden on mobile

## 10. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: `#2d4ce4` (LYW Blue)
- CTA Hover: `#1e3ab5`
- Page Background: `#fafaf8` (Canvas Cream)
- Card Background: `#ffffff` (Surface White)
- Heading Text: `#1a1a18` (Text Primary)
- Body Text: `#575753` (Text Secondary)
- Muted Text: `#8a8985`
- Border (shadow): `rgba(0,0,0,0.06) 0px 0px 0px 1px`
- Card Shadow: `rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 4px, rgba(0,0,0,0.02) 0px 8px 16px -4px`
- Accent Card Border: `rgba(45, 76, 228, 0.25)`
- Success: `#0d9488` (Teal)
- Navy Depth: `#0d1b3e`

### Example Component Prompts
- "Create a hero section on cream background (#fafaf8). Headline at clamp(3rem, 7vw, 6rem) Source Sans 3 weight 300, line-height 0.95, letter-spacing -0.03em, color #1a1a18. Subtitle at 18px weight 400, line-height 1.60, color #575753. Primary CTA button (#2d4ce4, 8px radius, 12px 28px padding, white text weight 600). Golden thread line at left:8%."
- "Design a card: white background, no CSS border. Use shadow stack: rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 4px, rgba(0,0,0,0.02) 0px 8px 16px -4px. Radius 12px. Title at 24px Source Sans 3 weight 400, color #1a1a18. Body at 16px weight 400, #575753."
- "Build a pill badge: #e8edfd background, #2d4ce4 text, 9999px radius, 2px 10px padding, 11px Source Sans 3 weight 600."
- "Create navigation: sticky header with rgba(250,250,248,0.85) background + backdrop-blur-xl. After scroll: shadow-border on bottom. Nav links 14px weight 400, #575753 → #1a1a18 on hover. Blue CTA right-aligned."

### Iteration Guide
1. Every border is a shadow — `0px 0px 0px 1px` with 0.06 alpha
2. Headlines are weight 300, always — confidence through restraint
3. Section backgrounds alternate: cream (#fafaf8) → white (#ffffff) → cream
4. The golden thread (8% left vertical line) ties the narrative together
5. Maximum 3 columns in any grid — professional audiences scan, they don't browse
6. Spacing is generous: 96px+ between sections, 1.60 line-height on body text
7. Single blue accent — no secondary colors except teal for success states
8. Left-aligned editorial layout — never center headlines
