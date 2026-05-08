# New Roof Now — Design System

## Vibe
Subtle fire. Warm, confident, intense without being loud. Think ember glow, not fireworks. Every accent should feel like heat radiating off desert asphalt.

## Palette

| Token          | Hex       | Role                                      |
|----------------|-----------|-------------------------------------------|
| `charcoal`     | `#1A1210` | Base background — warm black, not sterile  |
| `surface`      | `#231C17` | Cards, elevated surfaces                   |
| `steel`        | `#2E2520` | Borders, secondary panels                  |
| `ember`        | `#E8540C` | Primary accent — hot orange                |
| `crimson`      | `#C41E1E` | Secondary accent — deep red for CTAs       |
| `amber`        | `#F59E0B` | Micro highlights — stars, badges, sparks   |
| `ash`          | `#A39890` | Muted body text (warm gray, not cool)      |

### Gradient: Ember Line
`linear-gradient(90deg, #E8540C, #C41E1E)` — used on borders, underlines, and the CTA band.

### Glow
`box-shadow: 0 0 30px rgba(232, 84, 12, 0.12)` — warm ambient glow on cards and CTAs on hover.

## Typography

| Use       | Family              | Weight   | Notes                                     |
|-----------|---------------------|----------|--------------------------------------------|
| Headlines | **Teko**            | 600-700  | Angular, sharp, blade-like. Feels hot.     |
| Body      | **Barlow**          | 400-700  | Clean condensed, modern, great readability |
| Mono/Data | **JetBrains Mono**  | 400      | Kept for data labels and tech details      |

Teko tracking: `tracking-normal` to `tracking-wide` — it's naturally condensed so don't tighten further.

## Fire Touches (subtle, not tacky)
- Ember gradient underlines on section labels
- Warm glow on hover for cards and CTAs (`ember` at 12% opacity)
- Gradient text on hero keyword (`ember` to `crimson`)
- Dot grid pattern uses warm ember tint instead of white
- CTA band uses ember-to-crimson gradient background
- Star ratings in `amber` (warm gold)
- Status dot pulses in `ember` with glow shadow
