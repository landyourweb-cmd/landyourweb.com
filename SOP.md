# Land Your Web — Website Design SOP

> **Version:** 1.0  
> **Last Updated:** May 17, 2026  
> **Author:** OVERLORD (Hermes Agent) + Red Black  
> **Status:** Production-Ready  

---

## Overview

This SOP transforms website design from "creative process" to **repeatable methodology**. Every Land Your Web client site follows the same sequence of six levels (L1–L6), each building on the last, each with concrete, checkable deliverables. The methodology draws from:

- **Stripe Design** — weight-300 typography, blue-tinted depth, premium restraint
- **Vercel Design** — shadow-as-border technique, multi-layer card stacks, Geist precision
- **Apple Design** — binary section rhythm, single accent color, editorial whitespace
- **Notion Design** — warm neutral palette, approachable minimalism

These were absorbed through [Open Design](https://github.com/nexu-io/open-design), the open-source Claude Design alternative with 143 design systems and 31 composable skills.

**The single source of truth for all visual decisions is [`DESIGN.md`](../DESIGN.md).** Every agent, developer, and designer references this document. No ad-hoc decisions. No "I think this looks better." Only the system.

---

## Prerequisites

1. **Open Design** running at `http://localhost:7456` (Docker container)
2. **DESIGN.md** committed to the project root
3. **Next.js 16+** with Tailwind CSS, Source Sans 3, JetBrains Mono
4. **Vercel CLI** authenticated for deployment
5. **GitHub repo** under `landyourweb-cmd` org

---

## Phase 0 — Design System Selection

**Before writing a single line of code**, select a design system from Open Design.

### Process

1. Open `http://localhost:7456` → browse design systems
2. Identify the client's ICP (who are their customers?)
3. Map ICP to design tone:
   - **Professional services** (lawyers, accountants, clinics) → Stripe + Notion hybrid
   - **Creative agencies** → Airbnb + Brutalism
   - **SaaS/tech** → Vercel + Linear
   - **E-commerce** → Apple + Stripe
   - **Education** → Notion + Clean

4. Extract tokens from the selected DESIGN.md systems:
   ```
   Colors → Primary, accent, neutral scale, text roles
   Typography → Font family, weight distribution, letter-spacing rules
   Shadows → Elevation levels, shadow-as-border technique
   Radius → Button, card, badge scales
   ```

5. Synthesize into the project's `DESIGN.md` using our template

**Deliverable:** ✅ `DESIGN.md` committed with full token specification

---

## Phase 1 — L1: Typography (Foundation)

### Goal
Establish the font system that will carry every word on the site.

### Process

1. **Select font pair** from DESIGN.md
   - Primary: Source Sans 3 (clean, humanist, professional)
   - Mono: JetBrains Mono (technical labels, code-like precision)

2. **Define text roles** — exactly what the DESIGN.md's Typography Hierarchy table specifies:
   | Role | Weight | Size | Line Height | Letter Spacing |
   |------|--------|------|-------------|----------------|
   | Display Hero | 300 | clamp(3rem, 7vw, 6rem) | 0.95 | -0.03em |
   | Section Heading | 300 | clamp(2rem, 4vw, 3.5rem) | 1.10 | -0.02em |
   | Body Large | 400 | 1.125rem | 1.60 | normal |
   | Body | 400 | 1rem | 1.60 | normal |
   | Button | 600 | 0.875rem | 1.00 | normal |
   | Mono Label | 500 | 0.7rem | 1.00 | 0.3em |

3. **Apply to globals.css** as CSS custom properties and utility classes

4. **Verify in browser**: Every text element maps to a defined role. No rogue sizes. No unplanned weights.

**Deliverable:** ✅ Font system implemented, all text roles defined and applied

**Key principle (Stripe):** Headlines are weight 300 — light enough to feel confident without shouting. "Whisper-weight authority."

---

## Phase 2 — L2: Color Restraint

### Goal
Kill every decorative color. One accent. Everything else is neutral.

### Process

1. **Audit existing colors** — find every gradient, glow, colorful shadow, decorative hue
2. **Remove ALL of them.** Yes, all. The page should look "boring" — that's the point.
3. **Apply DESIGN.md color palette**:
   - Page: `#fafaf8` (Canvas Cream)
   - Cards: `#ffffff` (Surface White)
   - Text: `#1a1a18` (Primary) / `#575753` (Secondary) / `#8a8985` (Muted)
   - Accent: `#2d4ce4` (LYW Blue) — ONLY on interactive elements
   - Navy: `#0d1b3e` — ONLY in brand immersion sections (footer, CTA background)

4. **Establish section rhythm** (Apple technique):
   ```
   Hero → cream
   Proof → white
   Method → cream
   Arsenal → white
   Investment → cream
   CTA → navy
   ```

**Deliverable:** ✅ Single blue accent, binary section rhythm, zero decorative colors

**What to kill:**
- Gradients (text gradients, hero glows, background gradients)
- Glass morphism (backdrop-blur cards)
- Glow borders / pulse animations
- Purple/magenta/orange accents
- Dark mode as default (light projects professional trust)

---

## Phase 3 — L3: Depth Without Decoration

### Goal
Cards and containers have physical depth — not through decoration, but through shadow layering.

### Process

1. **Replace all CSS borders with shadow-as-border** (Vercel technique):
   ```css
   /* OLD — traditional border */
   border: 1px solid #e5e5e5;

   /* NEW — shadow-as-border */
   box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
   ```

2. **Implement multi-layer card shadow**:
   ```css
   box-shadow:
     rgba(0, 0, 0, 0.06) 0px 0px 0px 1px,   /* border */
     rgba(0, 0, 0, 0.04) 0px 2px 4px,        /* lift */
     rgba(0, 0, 0, 0.02) 0px 8px 16px -4px;  /* depth */
   ```

3. **Define hover states** — cards lift 2px, shadow intensifies:
   ```css
   .card:hover {
     transform: translateY(-2px);
     box-shadow: [stronger stack];
   }
   ```

4. **Accent cards** get blue-tinted shadows:
   ```css
   box-shadow:
     rgba(45, 76, 228, 0.25) 0px 0px 0px 1px,
     rgba(45, 76, 228, 0.08) 0px 4px 12px;
   ```

5. **Add prefers-reduced-motion**:
   ```css
   @media (prefers-reduced-motion: reduce) {
     .card:hover { transform: none; }
   }
   ```

**Deliverable:** ✅ Shadow-as-border system, multi-layer cards, accessible motion

---

## Phase 4 — L4: Copy That Bites

### Goal
Every headline speaks directly to the ICP's problem. No generic marketing fluff.

### Process

1. **Identify the ICP's pain point**:
   - Dentist: "My website isn't bringing in new patients."
   - Lawyer: "Potential clients can't tell me apart from the firm down the street."
   - Accountant: "I look like every other CPA with a Wix template."

2. **Rewrite every headline** from their perspective:
   - Hero: "Your practice is exceptional. Your website should be too." (not "We build websites that win awards")
   - Proof: "Most agencies talk. We deliver." (not "98% satisfaction rate")
   - CTA: "Your website hasn't brought you a new client this month, has it?" (not "Ready for something different?")

3. **Frame services as outcomes**, not features:
   - "Web Design" → "Custom Next.js sites. Not templates — every pixel is purpose-built for your practice and your clients."
   - "Support" → "Direct line to our team. Questions answered in hours, not days."

4. **Use concrete specifics**, not abstractions:
   - "10 days" not "Fast delivery"
   - "30-minute call" not "Quick consultation"
   - "$2,500" not "Affordable pricing"

**Deliverable:** ✅ ICP-first copy on every section, concrete specifics, no fluff

---

## Phase 5 — L5: Motion as Meaning

### Goal
Animation communicates structure. Not decoration — information.

### Process

1. **Hero load animation** — the first thing visitors see:
   ```css
   @keyframes heroReveal {
     0% { opacity: 0; transform: translateY(32px); }
     100% { opacity: 1; transform: translateY(0); }
   }
   .hero-animate { animation: heroReveal 1s cubic-bezier(0.16, 1, 0.3, 1); }
   .hero-animate-delay-1 { animation-delay: 0.15s; }
   .hero-animate-delay-2 { animation-delay: 0.3s; }
   .hero-animate-delay-3 { animation-delay: 0.5s; }
   ```

2. **Scroll reveals** — content appears as it enters the viewport:
   ```css
   .reveal {
     opacity: 0; transform: translateY(24px);
     transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                 transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
   }
   .reveal.visible { opacity: 1; transform: translateY(0); }
   ```
   Use IntersectionObserver in React components.

3. **Scroll-aware navigation**:
   ```tsx
   const [scrolled, setScrolled] = useState(false);
   useEffect(() => {
     const onScroll = () => setScrolled(window.scrollY > 40);
     window.addEventListener("scroll", onScroll, { passive: true });
     return () => window.removeEventListener("scroll", onScroll);
   }, []);
   ```

4. **Staggered reveals** — delay cards on a timeline:
   ```tsx
   items.map((item, i) => (
     <Reveal key={item.id} delay={i as 0|1|2|3}>
       <Card {...item} />
     </Reveal>
   ))
   ```

5. **Respect reduced motion** — always.

**Deliverable:** ✅ Hero load, scroll reveals, scroll-aware nav, staggered cards, prefers-reduced-motion

---

## Phase 6 — L6: Composition & Storytelling

### Goal
The page is a narrative journey, not a brochure. Each section leads to the next.

### The 6-Act Structure

| Act | Section | Narrative Role | Technique |
|-----|---------|----------------|-----------|
| I | Hero | **The Hook** — create tension | Editorial left-aligned headline, single CTA, massive negative space. No decoration. |
| II | Results | **The Proof** — name the gap | "Them vs Us" comparison cards. Concrete, not abstract. |
| III | Process | **The Method** — build trust | Before/After framing. Each step shows what others do wrong + what we do instead. |
| IV | Services | **The Arsenal** — show depth | Grid gallery. All services visible at once. Nothing hidden. |
| V | Packages | **The Investment** — make it easy | Three tiers. "Most Popular" badge on Growth. Clear pricing. |
| VI | CTA | **The Leap** — close the deal | Direct challenge. Navy depth section. Confident, not desperate. |

### Golden Thread
A vertical line at 8% from the left edge runs through hero and CTA:
```css
.thread-line {
  position: absolute; left: 8%; top: 0; bottom: 0; width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.06), transparent);
}
```

### Section Bridges
Between each section, a gradient line replaces hard borders:
```css
.section-bridge::before {
  background: linear-gradient(to right, transparent, rgba(45,76,228,0.08), transparent);
}
```

### Composition Rules
- Headlines: left-aligned, not centered
- Body text: capped at 65ch
- Negative space: 96px+ padding between sections
- No horizontal scrolls — grid galleries show everything
- No carousels — they hide content
- Single CTA in hero — confidence through restraint

**Deliverable:** ✅ 6-act narrative, golden thread, section bridges, editorial composition

---

## Phase 7 — Quality Gates

After L1–L6, run these checks before deployment:

### Anti-Slop Checklist
- [ ] No gradients in text (`text-gradient`, `bg-clip-text`)
- [ ] No glass morphism (`backdrop-filter: blur()`)
- [ ] No glow borders (`box-shadow: 0 0 ...` on decorative elements)
- [ ] No pulse animations except for loading states
- [ ] No centered headlines (editorial left-aligned)
- [ ] No horizontal scrolls hiding content
- [ ] No decorative colors (single blue accent only)
- [ ] No dark mode as primary presentation
- [ ] All borders are shadows: `0px 0px 0px 1px rgba(...)`
- [ ] All headlines are weight 300
- [ ] Section backgrounds alternate (cream ↔ white)

### Design System Compliance
- [ ] All colors match DESIGN.md
- [ ] All font sizes match DESIGN.md typography table
- [ ] All shadows match DESIGN.md elevation scale
- [ ] Card radius is 12px (standard) or 16px (featured)
- [ ] Button radius is 8px

### Narrative Check
- [ ] Hero headline names the ICP's pain
- [ ] Each section has a clear narrative role (see 6-act table)
- [ ] CTA is a direct challenge, not vague marketing
- [ ] Golden thread present on desktop
- [ ] Section bridges present between all sections

### Build Check
- [ ] `npx next build` passes with zero errors
- [ ] TypeScript compilation passes
- [ ] All 10 static pages generated
- [ ] Vercel deployment succeeds

---

## Agent Prompt Templates

These are the exact prompts to give an agent (Claude Code, Codex, Hermes, etc.) for each level:

### L1 Prompt
> "Apply the typography system from DESIGN.md. Source Sans 3 with weight 300 for all headlines, weight 400 for body. Hero headline: clamp(3rem, 7vw, 6rem), line-height 0.95, letter-spacing -0.03em. Create CSS custom properties for each text role."

### L2 Prompt
> "Audit and remove ALL decorative colors. Single accent: #2d4ce4 on interactive elements only. Establish binary section rhythm: cream (#fafaf8) ↔ white (#ffffff) alternating. Navy (#0d1b3e) only in footer and CTA. Kill: gradients, glass morphism, glow effects, pulse animations, purple/magenta/orange accents."

### L3 Prompt
> "Replace all CSS borders with shadow-as-border technique. Cards use multi-layer shadow: rgba(0,0,0,0.06) 0px 0px 0px 1px (border) + rgba(0,0,0,0.04) 0px 2px 4px (lift) + rgba(0,0,0,0.02) 0px 8px 16px -4px (depth). Hover lifts 2px with stronger shadow. Accent cards get blue-tinted shadows. Add prefers-reduced-motion."

### L4 Prompt
> "Rewrite every headline from the ICP's perspective. Identify their pain point first. Hero must create tension. Each section must answer an unspoken objection. Use concrete specifics (10 days, 30-minute call, $2,500) — never abstract claims. Frame services as outcomes."

### L5 Prompt
> "Add hero load animation (staggered fade-up, 1s ease-out). IntersectionObserver reveals for content below fold (translateY 24px → 0). Scroll-aware nav background (transparent → cream with backdrop-blur). Staggered card reveals. Always respect prefers-reduced-motion."

### L6 Prompt
> "Structure the page as a 6-act narrative: Hook → Proof → Method → Arsenal → Investment → Leap. Add golden thread (vertical line at 8% left). Add section bridges (gradient lines between sections). Left-align all headlines. Cap body at 65ch. Remove horizontal scrolls — use grid galleries."

---

## Deployment Checklist

- [ ] `git add -A && git commit -m "L1-L6 complete: [client name]"`
- [ ] `git push`
- [ ] `vercel --prod --yes`
- [ ] Verify live URL
- [ ] Run anti-slop checklist against deployed site
- [ ] Test on mobile (Chrome DevTools)
- [ ] Test keyboard navigation (Tab through)
- [ ] Run Lighthouse audit

---

## Post-Deployment: Client Customization

After the base site is deployed, customize per client:

1. **Replace ICP-specific copy** — if the template says "patients," change to "clients" for lawyers
2. **Add client logo** — replace LYW monogram
3. **Customize color accent** — if client has existing brand colors, adjust `#2d4ce4` to match (but keep the SINGLE accent rule)
4. **Add client imagery** — professional photos of their practice, team, location
5. **Wire contact form** — connect to their CRM (Twenty) or email

---

## Continuous Improvement

- **Every client build** → update DESIGN.md with new patterns discovered
- **Every design system update in Open Design** → re-extract tokens, update if better
- **Every month** → audit deployed sites against current DESIGN.md, patch drift
- **Triad Skill Forge** (cron: 8 AM & 8 PM Bucharest) → auto-creates/polishes skills from session learnings

---

## Reference

- **Source:** [Open Design](https://github.com/nexu-io/open-design) — 143 design systems, 31 skills
- **Deployed:** `https://site-ashy-five-99.vercel.app`
- **GitHub:** `landyourweb-cmd/landyourweb.com`
- **DESIGN.md:** Committed in project root
- **Local OD:** `http://localhost:7456` (Docker)
