# UI/UX Design and Requirements — New Year Get-Together Application

This document summarizes detailed UI/UX requirements, user flows, layouts, brand elements, and actionable implementation details as extracted from the attached UX Design PDF. Use this as the foundation for all UI planning, styling, and development.

---

## 1. Brand Identity & Color Palette

- **Primary Accent**: Festive Red (#D7263D)
- **Backgrounds**: Half White (#F6F6F6), Light Grey (#E6E6E6)
- **Typography**: Bold headings, simple sans-serif body (recommend Inter, Roboto)
- **Iconography**: Simple line icons, subtle festive elements (confetti, stars)
- **General Mood**: Festive, yet modern and professional. Red is an accent, not overwhelming. The look is clean and trustworthy for both attendee and organizer users.

---

## 2. Overall UX & Layout Philosophy

- **Simplicity**: All flows are linear, with a focus on minimizing distractions.
- **Feedback**: Every user action yields immediate feedback (visual cues, highlights, confirmation).
- **Festive Touch**: Subtle confetti or soft glow motifs enhance but do not overpower functionality.
- **Accessibility**: Strong contrast, readable fonts, prominent action buttons, ARIA labeling.
- **Responsiveness**: Mobile-first layouts, fluid resizing, and touch-friendly controls.

---

## 3. Main Screens & UI Components

### A. Landing & Registration

- Festive hero: Logo left, language in top right, bold event name or call-to-action centered.
- "Get Started" red CTA button.
- Stepper-based registration (1/personal, 2/group, 3/preferences), visual progress bar in red.
- Inputs: Outlined grey fields, red focus/confirmation highlights.
- Login page uses a boxed layout. Light grey/white split backgrounds.
- Quick login (email/phone). "Forgot password" link styled in red.

### B. Group Selection

- **Group List**: Cards, each showing avatars for members (max 4 visible, "+x" overflow).
- **Create New Group**: Floating red action button (FAB-style).
- **Join/Create Modal**: Grey overlay, red-highlighted confirmation.

### C. Stay (Room) Selection

- **Room List**: Responsive grid of room cards — indicate capacity/type.
- **Status Icons**: Green tick for available, grey lock for booked.
- **Selection Logic**: Only one room selectable per group, disabled after choosing.
- **Selection Feedback**: Card animation with red glow highlights on selection.

### D. Event Participation

- **Schedule**: Calendar view, events color-tagged (shades of red for emphasis).
- **Add to Schedule**: Toggle per event, confirms in red.
- **RSVP Modal**: Choice for group or individual RSVP.

### E. Food Preferences

- **Dietary Tags**: Button chips outlined in red (Vegetarian, Vegan, etc.)
- **Meal Plan**: Editable per user, allergy warnings in red alert boxes.

### F. Event Scheduling (Organizer Only)

- **Dashboard**: Multi-step event creation form (event info, time, location, etc.)
- **Calendar**: Drag-and-drop events, red dot for today.
- **Confirmation**: Festive red modals for all actions.
- **Table Views**: Event overview tables with alternating grey/white rows. Event names in red.

### G. Notifications & Settings

- **Notifications Center**: List items with icons for various changes.
- **Settings**: Notification toggles with descriptions in light grey.
- **Success Toasts**: Slide in from top-right, red-accented.
- **Profile/Settings**: Grey/white cards, red toggles for important actions.

### H. Additional/Optional Features

- **Chat**: Festive-styled chat bubbles (optional).
- **Theme toggle**: Light (default) with optional festive-dark/night mode (deeper reds).
- **Push**: Red badge notification (if push supported).

---

## 4. Key User Flows

**Attendee:**
1. Register ➔ Join/Create Group ➔ Room Selection ➔ RSVP for Events ➔ Pick Food Preferences

**Organizer:**
1. View Dashboard ➔ Add/Edit Events ➔ Notify Attendees (auto-notify on changes)

---

## 5. Notifications & Engagement

- **Trigger events**: Event added/changed, room changes, food confirmations, registration.
- **Email styling**: Clean, consistent with app theme (red headers, CTA buttons).

---

## 6. Prominent UI Patterns (for implementation)

- **Headers**: Logo left, event name center, account/right nav — all in red top bar.
- **Cards**: White, subtle grey shadow, primary actions (join, RSVP, select) in red.
- **Modals**: Grey overlay, white content card, confirm/cancel (confirm=red).
- **Progress Bars/Steppers**: Red accent.
- **Inputs**: Outlined, clean. Focus = red, errors = red alert box.
- **Buttons**: Bold, red for primary/confirm; subtle for cancel.
- **Table Rows**: Alternating grey/white backgrounds.
- **Icons**: Line icons, subtle party/festive motif, plain style.

---

## 7. Accessibility & Responsiveness

- All fonts readable, strong color contrast.
- All tappable elements are touch-sized for mobile.
- ARIA and labeling for all major controls and flows.

---

## 8. Visual Summary

- **Color theme throughout:** White/grey base, red as call-to-action highlight everywhere.
- **Feedback animation:** Highlight, glow, confirm, or toast for every primary action.
- **Clean, modern, festive-appropriate, but business-grade for organizers.**

---

## 9. Implementation Tips

- Prefer CSS variables for color theme switches.
- Use context for theme and language toggles.
- All forms and modals should have validation and visible feedback.
- Ensure consistent use of spacing, corner radii, and elevation effects.
- Refer to the original design PDF for any nuanced interaction details or request wireframes as needed.

---

**End of document. Use this as the feature/UI/UX reference for all subsequent React component and page planning.**
