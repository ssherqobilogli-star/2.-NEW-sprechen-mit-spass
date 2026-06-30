# Tech Spec — Sprechen mit Spaß

## Dependencies

### Already Present (package.json)

| Package | Version | Purpose |
|---|---|---|
| react | ^18.3.1 | UI framework |
| react-dom | ^18.3.1 | React DOM renderer |
| react-router-dom | ^6.23.0 | Client-side routing |
| typescript | ^5.4.5 | Type safety |
| vite | ^5.3.1 | Build tool & dev server |
| @vitejs/plugin-react | ^4.3.1 | Vite React integration |
| tailwindcss | ^3.4.4 | Utility-first CSS |
| postcss | ^8.4.38 | CSS processing |
| autoprefixer | ^10.4.19 | CSS vendor prefixes |
| @types/react | ^18.3.3 | React type definitions |
| @types/react-dom | ^18.3.0 | React DOM type definitions |
| @types/node | ^20.14.2 | Node.js type definitions |
| axios | ^1.7.2 | HTTP requests (future backend) |
| clsx | ^2.1.1 | Conditional class names |
| tailwind-merge | ^2.3.0 | Tailwind class deduplication |
| zustand | ^4.5.2 | Global state management |

### To Add

| Package | Version | Purpose |
|---|---|---|
| framer-motion | ^11.2.10 | Page transitions, card flip 3D, staggered entrance, AnimatePresence |
| lucide-react | ^0.395.0 | All iconography (Home, BookOpen, Swords, Volume2, Brain, Trophy, etc.) |

**Note on framer-motion**: The design requires Framer Motion specifically for card flip (spring physics with stiffness 260 / damping 20), staggered children entrance, AnimatePresence with `mode="wait"` for level transitions, and route page transitions. No other animation library provides this declarative spring-based API.

**Note on lucide-react**: The existing codebase already references lucide-react icons. We need to add the actual package.

---

## Component Inventory

### Layout Components (shared across all pages)

| Component | Source | Reuse | Notes |
|---|---|---|---|
| Layout | Custom (rewrite) | All pages | Desktop: flex row with rail + content. Mobile: single column with header + bottom nav. Houses BlobShape decorations. |
| NavigationRail | Custom (new) | Desktop only | Fixed 240px left sidebar. Logo, 7 nav links, settings link, ThemeToggle. Active state with left border indicator. |
| BottomNav | Custom (rewrite) | Mobile only | Fixed bottom tab bar, 5 tabs. Uses NavLink from react-router-dom. |
| Header | Custom (rewrite) | All pages | Sticky bar with backdrop-blur. XP badge + StreakCounter + avatar. |

### Reusable Components

| Component | Source | Used By | Notes |
|---|---|---|---|
| GlassCard | Custom (new) | HomePage, all pages | Container with surface bg, shadow, border, hover lift. Wraps content cards. |
| FlipCard | Custom (rewrite) | HomePage (daily word), DictionaryPage | 3D perspective card with spring flip animation (framer-motion). Front: German word + AudioButton. Back: Uzbek translation + examples. |
| AudioButton | Custom (rewrite) | FlipCard, DictionaryPage | 36px circle button. Triggers Web Speech API. Sound wave animation while speaking. |
| ProgressBar | Custom (new) | HomePage, ProfilePage | Animated gradient fill bar. Height variants (8px/12px). |
| LevelSelector | Custom (new) | HomePage | 4 pill buttons (A1–A2–B1–B2). Active gets accent-gradient. |
| ThemeToggle | Custom (new) | NavigationRail, SettingsPage | Segmented control: "Okean" \| "O'rmon" \| "Tun". |
| StreakCounter | Custom (new) | Header | Flame icon + number + "kun". Pulse animation at ≥7, glow at ≥30. |
| XPPopup | Custom (new) | HomePage, all pages | Fixed-position toast. AnimatePresence enter/exit. Auto-dismiss 2s. |
| Confetti | Custom (rewrite) | HomePage, all pages | Canvas-based particle system. 100 colored particles with gravity. 3s duration. |
| BlobShape | Custom (rewrite) | Layout (×2) | Decorative organic blob with CSS border-radius morph + blur. Fixed position. |
| SkeletonLoader | Custom (new) | All pages | Pulsing shimmer placeholder for loading states. |
| SearchInput | Custom (new) | DictionaryPage | Input with Search icon, focus glow state. |
| StatCard | Custom (new) | HomePage | Vertical stack: icon + value + label. |

### Page Components (one per route)

| Page | Route | Priority | Notes |
|---|---|---|---|
| HomePage | `/` | **Primary** | Full implementation per home.md design. Hero, stats grid, daily word flip, quick actions, topic preview. |
| VideoPage | `/learn` | Placeholder | Video lessons list — stub with GlassCard placeholder. |
| VideoPlayerPage | `/video/:id` | Placeholder | Player + transcription — stub. |
| DictionaryPage | `/dictionary` | Placeholder | Search + word grid — stub with SearchInput placeholder. |
| BattlePage | `/battle` | Placeholder | Battle lobby — stub. |
| BattleGamePage | `/battle/game` | Placeholder | Real-time battle — stub. |
| MockExamPage | `/mock` | Placeholder | Exam list — stub. |
| MockExamActivePage | `/mock/:id` | Placeholder | Active exam — stub. |
| LeaderboardPage | `/leaderboard` | Placeholder | Rankings table — stub. |
| ProfilePage | `/profile` | Placeholder | User profile + stats — stub. |
| SettingsPage | `/settings` | Placeholder | Theme toggle + preferences — stub with ThemeToggle. |
| SubscriptionPage | `/subscription` | Placeholder | Pricing plans — stub. |
| WritingPage | `/writing` | Placeholder | Writing exercises — stub. |
| CustomTestPage | `/test` | Placeholder | Custom test — stub. |
| AiMentorPage | `/mentor` | Placeholder | AI chat interface — stub. |

### Hooks

| Hook | Purpose |
|---|---|
| useStore (Zustand) | Global state: user (xp, level, streak, wordsLearned), selectedLevel, theme, xpPopup visibility. |

---

## Animation Implementation Plan

| Animation | Library / Approach | Implementation | Complexity |
|---|---|---|---|
| Page transition (fade out → fade in) | Framer Motion AnimatePresence on Route outlet | Wrap `<Outlet>` in `<AnimatePresence mode="wait">`. Exit: `opacity:0` 200ms. Enter: `opacity:0→1, y:12→0` 300ms. | Medium |
| Staggered page content entrance | Framer Motion staggerChildren | Parent `motion.div` with `staggerChildren:0.08`. Each section `motion.div` with `initial={{opacity:0,y:16}} animate={{opacity:1,y:0}}`. Applied via a reusable wrapper component. | Medium |
| Hero text reveal | Framer Motion motion.div | `initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.6,ease:ease-entrance}}`. | Low |
| Flag emoji bounce | Framer Motion motion.span | `animate={{scale:[0.8,1.1,1]}} transition={{delay:0.2,duration:0.4,ease:ease-bounce}}` chained after hero text. | Low |
| **Card 3D flip** | **Framer Motion** | `motion.div` with `animate={{rotateY:isFlipped?180:0}}` + `transition={{type:"spring",stiffness:260,damping:20,duration:0.6}}`. Back face CSS `transform:rotateY(180deg)` + `backface-hidden`. Container `perspective:1000px`. | **High** 🔒 |
| Stat cards spring entrance | Framer Motion staggerChildren | `staggerChildren:0.1`. Each: `initial={{opacity:0,scale:0.85}} animate={{opacity:1,scale:1}} transition={{duration:0.4,ease:ease-bounce}}`. | Low |
| Daily word reveal | Framer Motion motion.div | `initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{duration:0.5,delay:0.4,ease:ease-entrance}}`. | Low |
| Daily word dismiss | Framer Motion AnimatePresence | `exit={{opacity:0,scale:0.9,height:0}} transition={{duration:0.4,ease:ease-smooth}}`. | Low |
| Progress bar fill | CSS transition + React state | `transition: width 800ms cubic-bezier(0,0,0.2,1)` on the fill div. Width bound to state. | Low |
| Progress number count-up | requestAnimationFrame | Custom hook that interpolates from 0 to target over 800ms using `requestAnimationFrame` timestamp delta. | Low |
| Level selector cross-fade | Framer Motion | Buttons wrapped in `motion.div` with `layout` prop for smooth position changes. Active gradient fades via `animate` on background. | Medium |
| Level content swap | Framer Motion AnimatePresence | `mode="wait"` on content wrapper. Exit: `opacity:0,y:-8` 200ms. Enter: `opacity:0→1,y:8→0` 300ms 100ms delay. | Medium |
| GlassCard hover lift | CSS transition | `transition: transform 300ms cubic-bezier(0.25,0.1,0.25,1), box-shadow 300ms`. Hover: `translateY(-2px)` + deeper shadow. Pure CSS, no library needed. | Low |
| Quick action hover (icon + text shift) | CSS transition | Child elements use `transition: transform 300ms`. Parent `:hover` triggers `transform` on children via group-hover. | Low |
| Topic row hover | CSS transition | `transition: transform 150ms, background-color 150ms`. Hover: `translateX(4px)` + bg to `primary-50`. | Low |
| Topic row stagger entrance | Framer Motion staggerChildren | `staggerChildren:0.05`. Each row: `initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.3}}`. | Low |
| Quick action stagger entrance | Framer Motion staggerChildren | `staggerChildren:0.1`. Each: `initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.4}}`. | Low |
| XP Popup enter/exit | Framer Motion AnimatePresence | Enter: `opacity:0→1, y:-20→0, scale:0.9→1` 300ms ease-bounce. Exit: `opacity:0, x:20` 200ms. | Low |
| Audio button sound wave | CSS keyframes | 3 absolutely positioned arcs inside button. `@keyframes pulse` with staggered `animation-delay`. Triggered via class toggle for 800ms. | Low |
| Blob shape morph | CSS @keyframes | `@keyframes blob-morph` animating `border-radius` through 4–6 different radius values. `8s ease-in-out infinite alternate`. Two blobs with offset timing. Pure CSS. | Low |
| Streak flame pulse | CSS @keyframes | `@keyframes pulse` with `transform:scale` oscillation. Applied conditionally when `streak >= 7`. | Low |
| Streak glow ring | CSS box-shadow | `box-shadow: 0 0 20px rgba(245,158,11,0.3)` applied conditionally when `streak >= 30`. | Low |
| Confetti celebration | Canvas 2D + requestAnimationFrame | 100 particle objects with position, velocity, color, tilt. Render loop via `requestAnimationFrame`. Gravity + fade-out. ~3s total. Triggered via Zustand store action. | High |
| Skeleton shimmer | CSS @keyframes | `@keyframes shimmer` sweeping a `linear-gradient` across the element. `1.5s infinite`. Pure CSS. | Low |
| Button press feedback | CSS :active | `transform: scale(0.98)` + `box-shadow: inset 0 1px 3px rgba(0,0,0,0.06)` on `:active`. | Low |
| Dark mode transition | CSS transition on body | `transition: background-color 300ms, color 300ms` on the root container. Theme change triggers CSS custom property updates. | Low |
| Page load sequence (skeleton → content) | React state + setTimeout | Initial state shows SkeletonLoader. After 300ms timeout, switch to actual content with staggered framer-motion entrance. | Low |

---

## State & Logic Plan

### Global State (Zustand Store)

The store manages cross-cutting concerns shared by layout components and the home page:

**`user` object**:
- `xp: number` — total experience points
- `level: 'A1' \| 'A2' \| 'B1' \| 'B2'` — current CEFR level
- `streak: number` — consecutive daily login days
- `wordsLearned: number` — count of learned vocabulary
- `avatarUrl?: string` — optional profile picture URL

**`selectedLevel: 'A1' \| 'A2' \| 'B1' \| 'B2'`**: Controls the level filter on HomePage (progress card, topic preview) and DictionaryPage. Independent from `user.level`.

**`theme: 'ocean' \| 'forest' \| 'dark'`**: Controls CSS custom property values (primary color family, background tints). Ocean is default. Persisted to `localStorage`.

**`xpPopup: { visible: boolean; amount: number }`**: Controls the XP popup toast display. Set via `showXpPopup(amount)` action, auto-dismissed after 2 seconds via `setTimeout` inside the action.

**Actions**:
- `setSelectedLevel(level)` — update filtered level
- `setTheme(theme)` — persist theme choice, update CSS variables
- `addXp(amount)` — increment user.xp, trigger `showXpPopup(amount)`, check for level-up milestones
- `showXpPopup(amount) / hideXpPopup()` — control toast visibility with auto-dismiss timer

### React State (local to components)

**HomePage**:
- `dailyWord: Word \| null` — random word from WORDS data (computed once on mount via `getRandomWords(1)[0]`)
- `showDaily: boolean` — controls visibility of daily word section (set to false after "+5 XP" click)
- Progress percentage derived from `getLevelProgress(user.xp)` — pure computation, no state needed

**No external API calls**: All data (words, topics) is local static data. No async data fetching. No loading states beyond the initial skeleton simulation.

### Data Flow

```
Zustand Store (global)
  ├── user (xp, level, streak, wordsLearned)
  ├── selectedLevel → HomePage progress + topics + DictionaryPage
  ├── theme → Layout (CSS custom properties) + ThemeToggle
  └── xpPopup → XPPopup component

Local Data Modules
  ├── WORDS (words.ts) → FlipCard, DictionaryPage
  └── TOPICS (topics.ts) → HomePage topic preview

Component-local State
  ├── HomePage: dailyWord, showDaily
  └── FlipCard: isFlipped
```

### Routing

React Router v6 with `BrowserRouter`. All routes nested under the `Layout` component which provides the rail/header/bottom-nav shell. The `Outlet` is wrapped in `AnimatePresence mode="wait"` for page transitions. Placeholder pages render a simple GlassCard with a centered title and description.

### Web Speech API

The AudioButton component uses the browser's native `speechSynthesis` API — no npm package needed. Implementation: create a `SpeechSynthesisUtterance`, set `lang: 'de-DE'` and `rate: 0.9`, call `window.speechSynthesis.speak(utterance)`. This is wrapped in a `useCallback` with cleanup on unmount (`speechSynthesis.cancel()`).

### CSS Custom Properties for Theming

The theme system uses CSS custom properties on `:root` that are dynamically updated. JavaScript sets data attributes (`data-theme="ocean"`, `data-theme="dark"`) on the HTML element, and CSS maps the `var(--primary-*)` tokens to the appropriate ocean/forest values. Dark mode is a separate layer that overrides background/text/border tokens while preserving the primary hue family.

---

## Other Key Decisions

### No shadcn/ui

The design specifies a fully custom visual language (glass cards, gradient buttons, blob decorations, phonetic typography). shadcn/ui's default styling would conflict with and complicate the custom design system. All components are custom-built with Tailwind CSS.

### Google Fonts via `<link>`

The three font families (Outfit, Inter, Cormorant Garamond) are loaded via a single Google Fonts `<link>` tag in `index.html`. This avoids npm font packages and leverages browser caching. Font display strategy: `display=swap` to prevent FOIT.

### No Backend for this Phase

The design specifies a frontend-only implementation for the home page. All data (words, topics) is static TypeScript modules. The backend (Node.js/Express, PostgreSQL, etc.) described in README.md is out of scope for this implementation phase.

### Confetti Implementation Strategy

The confetti effect uses a raw Canvas 2D API approach rather than a library. This keeps bundle size minimal (no confetti npm package) and gives full control over the particle physics (gravity, tilt, colors) as specified in the design. The component accepts a `trigger` prop and renders an absolutely-positioned canvas element that self-cleans after the animation completes.
