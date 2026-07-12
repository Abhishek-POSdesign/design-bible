# AI Chat Overlay Component Prompt

Create a right-docked, full-height persistent sidebar component for an AI chat layer.

## Key Design Specifications

- **Behavior**: Must be non-blocking (no backdrop dimming or blur). Let the user click and scroll the page behind it.
- **Left-Shift Content**: On viewports >= 1536px, it must apply a class or layout shift that translates the main container left by 240px to prevent overlapping readability limits.
- **Bubbles**:
  - User: aligned right, background accent, white text, tail pointing right.
  - Assistant: aligned left, background light neutral gray tint, text primary, tail pointing left.
- **Sticky Header**: Shows context title ("✨ AI Study Buddy") and a close `✕` button.
- **Quick Actions Row**: Exposes contextual button chips at the top of the chat thread.
- **Action Bar**: Textarea input with "Ask" button and a secondary action `💾 Save last answer`.
