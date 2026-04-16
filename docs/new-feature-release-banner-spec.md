# New Feature Release Banner UX Spec

## Goal
Inform users that:
1. A new version is available.
2. They are currently on an older version.
3. Reloading is required to access new functionality.

The tone should feel positive and celebratory while remaining professional for clinical/EHR workflows.

## Banner Placement and Behavior
- **Placement:** Sticky at the top of the app shell, above page content.
- **Trigger:** Show when the client detects a newer deployed build than the one loaded in the current tab.
- **Persistence:** Remains visible until user reloads or explicitly dismisses.
- **Reappearance:** If dismissed, show again after a short cooldown (recommended: 5-10 minutes) unless the user reloads.
- **Z-index priority:** Above content and standard alerts, below blocking modals.

## Recommended Copy
- **Eyebrow:** `New release`
- **Headline:** `A fresh update is ready`
- **Body:** `You are viewing an older version. Reload to access the latest features and improvements.`
- **Primary CTA:** `Reload now`
- **Secondary CTA (optional):** `Later`

### Tone Notes
- Use confident, concise language.
- Keep excitement subtle and trustworthy.
- Avoid overly playful phrasing that could reduce clinical credibility.

## Visual Direction
- **Style:** Rounded banner with soft celebratory gradient and restrained accent details.
- **Suggested palette:**
  - Background gradient: `#EEF6FF -> #F5F0FF`
  - Border: `#C9DBFF`
  - Headline text: `#1F2A44`
  - Body text: `#4A5878`
  - Primary button: `#2C6BED` with hover `#245AD0`
  - Secondary button/link: `#506080`
- **Celebratory accents:** Small decorative dots/spark lines in the corner at low opacity.
- **Density:** Compact enough to avoid obstructing key workflow context.

## Interaction Design
- **Primary action:** `Reload now`
  - Immediate hard refresh (`window.location.reload()` or version-aware reload logic).
  - Show a temporary loading state on button press (`Reloading...`) to prevent double taps.
- **Secondary action:** `Later`
  - Dismisses banner temporarily.
- **Keyboard support:**
  - Tab order: primary action first, then secondary.
  - Visible focus rings for both actions.

## Accessibility
- Use `role="status"` and `aria-live="polite"` so updates are announced without interrupting workflow.
- Ensure text contrast meets WCAG AA (minimum 4.5:1 for body text).
- Maintain minimum touch target of 40x40 px.
- Do not rely on color alone; include explicit text indicating an update is available.

## Responsive Behavior
- **Desktop:** Single-row layout with text left and actions right.
- **Tablet/Mobile:** Stack actions under text with full-width primary CTA.
- Preserve sticky behavior and avoid overlapping global navigation.

## Success Metrics (Optional)
- Banner impression count.
- Reload CTA click-through rate.
- Median time from banner impression to reload.
- Percentage of active sessions moved to latest version within 15 minutes.
