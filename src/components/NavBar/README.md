# NavBar

A responsive navigation bar component with mobile menu support and CMS-friendly props.

## Features

- 📱 Responsive design with mobile hamburger menu
- 🎨 Multiple variants (sticky, transparent)
- 🔗 Active link detection
- 🎯 Named slots for logo and actions
- ♿ Accessible with ARIA labels
- 🎨 CMS-friendly props

## Usage

### Basic Usage

```astro
---
import NavBar from '../components/NavBar/NavBar.astro';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];
---

<NavBar siteName="My Website" links={navLinks} />
```

### With Custom Logo

```astro
<NavBar links={navLinks}>
  <img slot="logo" src="/logo.svg" alt="My Logo" />
</NavBar>
```

### With Action Buttons

```astro
import Button from '../components/Button/Button.astro';

<NavBar siteName="My Site" links={navLinks}>
  <Button slot="actions" variant="primary" href="/signup">
    Sign Up
  </Button>
</NavBar>
```

### Sticky Navigation

```astro
<NavBar siteName="My Site" links={navLinks} sticky={true} />
```

### Transparent (for hero overlays)

```astro
<NavBar siteName="My Site" links={navLinks} transparent={true} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `siteName` | `string` | `'My Site'` | Site name shown in logo area |
| `logoHref` | `string` | `'/'` | URL for logo link |
| `links` | `NavLink[]` | `[]` | Array of navigation links |
| `sticky` | `boolean` | `false` | Makes navbar stick to top on scroll |
| `transparent` | `boolean` | `false` | Transparent background |
| `class` | `string` | `''` | Additional CSS classes |

### NavLink Interface

```typescript
interface NavLink {
  label: string;    // Link text
  href: string;     // Link URL
  active?: boolean; // Force active state
}
```

## Slots

- **default**: Not used
- **logo**: Custom logo content (defaults to siteName text)
- **actions**: Additional buttons/links on the right side

## CMS Integration

### DecapCMS Config

```yaml
- label: "Navigation"
  name: "navigation"
  widget: "object"
  fields:
    - { label: "Site Name", name: "siteName", widget: "string" }
    - label: "Links"
      name: "links"
      widget: "list"
      fields:
        - { label: "Label", name: "label", widget: "string" }
        - { label: "URL", name: "href", widget: "string" }
```

## Styling

The component uses BEM naming for easy customization:
- `.nav-bar` - Main container
- `.nav-bar__logo` - Logo/site name
- `.nav-bar__link` - Individual links
- `.nav-bar__link--active` - Active link state

Override styles by targeting these classes in your global CSS.
