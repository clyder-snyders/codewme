# Micro-Animations Brainstorm: Anime-Style Flows

## Overview
Anime-style micro-animations emphasize smooth, exaggerated motion with anticipation, follow-through, and secondary action. They create personality and delight without being distracting.

---

## Perfect Placement Opportunities

### 1. **Navigation Links - Underline Reveal (Anime Style)**
**Where:** Header navigation items (Home, Projects, Achievements, etc.)
**Animation:** 
- Smooth underline grows from left to right with a slight elastic bounce
- Text color shifts slightly during hover
- Easing: cubic-bezier(0.34, 1.56, 0.64, 1) for bouncy feel

**Why:** Subtle but delightful - users interact with nav constantly, so micro-animations here have high impact.

---

### 2. **Achievement Timeline - Dot Pulse & Line Draw**
**Where:** Achievements page timeline
**Animation:**
- Timeline dots pulse with a soft glow (anime-style radial expansion)
- Connecting lines draw from top to bottom with a trailing glow effect
- Cards slide in with a slight rotation (2-3 degrees) and settle
- Year badges have a subtle "pop" entrance with scale + opacity

**Why:** Timeline is a key visual element - anime-style animations make it feel alive and engaging.

---

### 3. **Button Interactions - Click Ripple + Arrow Dance**
**Where:** "View Projects", "Contact me", "See all achievements" buttons
**Animation:**
- On hover: Arrow icon does a small bounce (up-down motion)
- On click: Ripple effect emanates from center (Material Design + anime smoothness)
- Button has slight scale-up on hover with shadow deepening

**Why:** Buttons are CTAs - micro-animations encourage interaction.

---

### 4. **Skill Tags - Stagger & Bounce**
**Where:** About page skills section
**Animation:**
- Tags enter with a staggered bounce effect (each tag bounces slightly)
- On hover: Tag scales up with a subtle rotation (5-10 degrees)
- Background color shifts smoothly on hover

**Why:** Skill tags are numerous - staggered animations create a cascading, organic feel.

---

### 5. **Gallery Images - Hover Glow & Zoom**
**Where:** Gallery section
**Animation:**
- On hover: Image gets a subtle glow effect (anime-style soft shadow)
- Slight zoom (1.05x) with smooth easing
- Border color animates to brand color
- Overlay appears with a fade + slight scale effect

**Why:** Gallery is visual - anime-style hover effects make it interactive and engaging.

---

### 6. **Achievement Cards - Shine Effect**
**Where:** Recent milestones section
**Animation:**
- Subtle "shine" effect that sweeps across cards on load
- Cards have a gentle floating animation (up-down continuous loop)
- On hover: Card lifts with shadow deepening

**Why:** Highlights key achievements with premium feel.

---

### 7. **Status Badge - Pulse & Glow**
**Where:** Hero section "Grade 10 · High Scholar · Open to opportunities"
**Animation:**
- Soft pulse animation (scale 1 → 1.05 → 1)
- Subtle glow effect that intensifies on hover
- Background color shifts smoothly

**Why:** Draws attention to key info without being obnoxious.

---

### 8. **Form Inputs - Focus Underline**
**Where:** Contact page form
**Animation:**
- On focus: Underline grows from center outward (anime-style reveal)
- Label moves up with a smooth easing
- Input background color shifts subtly

**Why:** Improves UX and provides visual feedback.

---

### 9. **Social Icons - Rotate & Bounce**
**Where:** Footer and hero section social links
**Animation:**
- On hover: Icon rotates 360° smoothly while bouncing slightly
- Background circle expands and contracts
- Color transitions smoothly

**Why:** Social icons are secondary but should feel interactive.

---

### 10. **Loading States - Anime-Style Spinner**
**Where:** Any async operations (if added later)
**Animation:**
- Custom spinner with rotating segments
- Segments pulse in sequence (wave effect)
- Smooth, continuous rotation with easing

**Why:** Makes loading feel intentional and branded.

---

## Anime-Style Easing Functions

```typescript
// Bouncy/Elastic Feel
cubic-bezier(0.34, 1.56, 0.64, 1)  // Overshoot

// Smooth Anticipation
cubic-bezier(0.25, 0.46, 0.45, 0.94)  // Ease in-out

// Quick & Snappy
cubic-bezier(0.43, 0.13, 0.15, 0.96)  // Snap

// Organic & Fluid
cubic-bezier(0.25, 0.1, 0.25, 1)  // Smooth
```

---

## Implementation Strategy

1. **Create reusable animation hooks** (useHoverAnimation, usePulseAnimation, etc.)
2. **Define animation variants** in animations.ts (stagger, bounce, shine, glow)
3. **Apply to components** without overwhelming the design
4. **Test on mobile** to ensure smooth performance
5. **Use GPU-accelerated properties** (transform, opacity) only

---

## Key Principles

- **Anticipation:** Animations should feel intentional, not random
- **Follow-through:** Movements should have natural decay
- **Squash & Stretch:** Subtle scale changes add personality
- **Easing:** Use custom easing for anime feel (overshoot, bounce)
- **Restraint:** Micro-animations should enhance, not distract
- **Consistency:** All animations should follow the same design language

---

## Performance Considerations

- Use `will-change` sparingly on hover states
- Prefer `transform` and `opacity` over other properties
- Test on lower-end devices to ensure 60fps
- Disable animations on `prefers-reduced-motion`
