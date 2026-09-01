# Goal Description
Implement a site-wide page-transition curtain effect in Next.js 16 (App Router). The effect will intercept internal link clicks, animate 5 staggered vertical bars rising from the bottom to cover the screen, perform the actual route navigation (`router.push`), and then recede the bars upward to reveal the new page.

## User Review Required
No breaking changes. This relies purely on a document-level click interceptor and a fixed overlay component rendered in `app/layout.tsx`. Browser back/forward buttons will not trigger the animation (they will remain instant), satisfying the requirement.

## Proposed Changes

### 1. `components/ui/PageTransition.tsx`
Create a new Client Component to handle the state machine (`idle` -> `in` -> `covered` -> `out`) and the click interception.
- **Interception**: Uses a `document.addEventListener("click", ..., { capture: true })` to natively intercept all clicks before they reach Next.js `<Link>` handlers.
- **Filtering**: Ignores external links, modifier clicks (Ctrl/Cmd), hash-only links (`href="#"`), identical paths, and environments where `prefers-reduced-motion: reduce` is active.
- **Animation**: 5 flex-grow `div` bars with staggered `transform: scaleY()` CSS transitions. `transform-origin` swaps from `bottom` to `top` during the `covered` phase so the bars seamlessly rise up to enter and shrink up to exit, creating a continuous upward "reveal from bottom" wipe effect.
- **Routing**: Programmatically calls `router.push(url, { scroll: true })` once the `in` animation strictly finishes. Hooks into `usePathname` and `useSearchParams` to detect when the destination page has rendered to reliably trigger the `out` animation.

### 2. `app/layout.tsx`
Import and drop `<PageTransition />` into the `<body>` of the root layout, making it globally available across all pages without requiring any refactoring of existing `<Link>` tags.

## Verification Plan
### Automated Tests
Run `npm run build` to verify there are no hydration mismatches or client/server component conflicts.

### Manual Verification
1. Click internal links (nav, footer, CTAs) and verify the 1.5s total duration curtain effect triggers correctly.
2. Verify the new page flashes *after* the curtain covers the screen, scrolled to the top.
3. Verify browser Back/Forward buttons skip the animation.
4. Verify `href="#"` placeholders skip the animation.
