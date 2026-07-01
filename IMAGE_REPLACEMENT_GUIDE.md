# Veltora Properties — Image Replacement Guide

## Overview
This guide explains how to replace all placeholder images with real Unsplash images. The images are mapped to each location in the project with direct Unsplash URLs.

---

## Image Mapping Table

| File Location | Current Path | Unsplash Photo ID | Description | Unsplash URL |
|---|---|---|---|---|
| Hero Banner | `public/images/banner.png` | `1486325212027-8081e485255e` | Aerial city skyline at dusk | https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80 |
| Hero Section 1 | `public/images/hero/h1.png` | `1560518883-ce09059eeffa` | Modern luxury apartment interior | https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80 |
| Hero Section 2 | `public/images/hero/h2.png` | `1512917774080-9991f1c4c750` | Contemporary villa exterior | https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80 |
| Hero Section 3 | `public/images/hero/h3.png` | `1545324418-cc1a3fa12c00` | Glass office tower | https://images.unsplash.com/photo-1545324418-cc1a3fa12c00?auto=format&fit=crop&w=1200&q=80 |
| Hero Section 4 | `public/images/hero/h4.png` | `1558618666-fcd25c85cd64` | Upscale estate aerial | https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80 |
| Hero Section 6 | `public/images/hero/h6.png` | `1600596542815-ffad4c1539a9` | Luxury penthouse | https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80 |
| Property 1 | `public/images/list/p-1.png` | `1600585154340-be6161a56a0c` | Residential estate home | https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80 |
| Property 2 | `public/images/list/p-2.png` | `1613490493576-4d0d8a2d6b26` | Modern villa pool | https://images.unsplash.com/photo-1613490493576-4d0d8a2d6b26?auto=format&fit=crop&w=800&q=80 |
| Property 4 | `public/images/list/p-4.png` | `1600047509358-9dc75507daeb` | Urban apartment building | https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=800&q=80 |
| Property 5 | `public/images/list/p-5.png` | `1583608205776-bfd35f0d9f83` | Contemporary townhouse | https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80 |
| Property 6 | `public/images/list/p-6.png` | `1628744448840-55bdb2497bd4` | Serviced apartment interior | https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=800&q=80 |
| Property 7 | `public/images/list/p-7.png` | `1600566752355-35792bedcfea` | Commercial mixed-use property | https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80 |
| Location 1 | `public/images/location/city-1.png` | `1572120360610-d4360b11f1a5` | Lagos waterfront | https://images.unsplash.com/photo-1572120360610-d4360b11f1a5?auto=format&fit=crop&w=800&q=80 |
| Location 2 | `public/images/location/city-2.png` | `1569949381669-ecf83d788564` | Abuja city centre | https://images.unsplash.com/photo-1569949381669-ecf83d788564?auto=format&fit=crop&w=800&q=80 |
| Location 3 | `public/images/location/city-3.png` | `1547981609-4b6bfe67ca0b` | Nairobi skyline | https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=800&q=80 |
| Location 4 | `public/images/location/city-4.png` | `1596005554384-d293674c91d7` | Accra business district | https://images.unsplash.com/photo-1596005554384-d293674c91d7?auto=format&fit=crop&w=800&q=80 |
| Location 5 | `public/images/location/city-5.png` | `1541943869728-4bd4f450c8f5` | Kigali aerial view | https://images.unsplash.com/photo-1541943869728-4bd4f450c8f5?auto=format&fit=crop&w=800&q=80 |
| Location 6 | `public/images/location/city-6.png` | `1580060839134-75a5edca2e99` | Cape Town harbour | https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80 |
| Team 1 | `public/images/customer/team-1.jpg` | `1560250097-0b93528c311a` | Professional businessman | https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80 |
| Team 2 | `public/images/customer/team-2.jpg` | `1573497019940-1c28c88b4f3e` | Professional businesswoman | https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80 |
| Team 3 | `public/images/customer/team-3.jpg` | `1472099645785-5658abf4ff4e` | Male executive portrait | https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80 |
| Team 4 | `public/images/customer/team-4.jpg` | `1580489944761-15a19d654956` | Female executive portrait | https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80 |
| Team 5 | `public/images/customer/team-5.jpg` | `1507003211169-0a1dd7228f2d` | Senior male professional | https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80 |
| About Content | `src/components/images/about.jpg` | `1497366216548-37526070297c` | Modern open office space | https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80 |
| Services | `src/components/images/services.jpg` | `1486406146926-c627a92ad1ab` | City architecture aerial | https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80 |
| Pricing | `src/components/images/pricing.jpg` | `1560179707-f14e90ef3623` | Luxury estate garden | https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1200&q=80 |
| Immio Banner | `public/immio.jpg` | `1582407947304-fd86f28320be` | Real estate cityscape | https://images.unsplash.com/photo-1582407947304-fd86f28320be?auto=format&fit=crop&w=1200&q=80 |

---

## Implementation Methods

### Method 1: Update JSX Image Source (Recommended for `<img>` tags)

In components where images are used as `src` attributes:

```jsx
// BEFORE
<img src="./images/list/p-1.png" alt="Property" />

// AFTER
<img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Residential Estate Home" />
```

### Method 2: Update CSS Background Images

In CSS files where images are used as backgrounds:

```css
/* BEFORE */
background-image: url("./images/banner.png");

/* AFTER */
background-image: url("https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80");
```

### Method 3: Using Data.js Image References

If images are referenced in `Data.js`:

```javascript
// BEFORE
cover: "./images/list/p-1.png"

// AFTER
cover: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
```

---

## Files to Update

### JSX Components

1. **src/components/home/hero/Hero.jsx**
   - Update `banner.png` reference to Unsplash URL
   - Update h1-h6 image references

2. **src/components/home/recent/Recent.jsx**
   - Property card images (from Data.js property.cover)

3. **src/components/home/location/Location.jsx**
   - City location images

4. **src/components/home/team/Team.jsx**
   - Team member photos

5. **src/components/about/About.jsx**
   - About page image

6. **src/components/home/aboutPreview/AboutPreview.jsx**
   - Preview banner

### CSS Files

1. **src/components/home/hero/hero.css**
   - Update background-image URL for banner

2. **src/components/home/featured/Featured.css** (if used)

3. **src/components/contact/contact.css** (if used)

---

## Quick Implementation Checklist

- [ ] Replace all image URLs in `public/images/` directory with Unsplash URLs
- [ ] Update JSX `src` attributes with Unsplash URLs
- [ ] Update CSS `background-image` URLs with Unsplash URLs
- [ ] Update image references in `Data.js`
- [ ] Test all images load correctly
- [ ] Verify image quality and aspect ratios
- [ ] Check mobile image display
- [ ] Validate responsive image behavior

---

## Notes

- All Unsplash URLs include `auto=format` for automatic format optimization
- Width parameters (`w=`) ensure proper sizing for each use case
- Quality parameter (`q=80`) balances image quality and file size
- Images are cached by Unsplash CDN for fast delivery
- No API key required for direct Unsplash image URLs
- Images are license-free and available for commercial use

---

## Sample Implementation

Here's an example of updating a component:

```jsx
// BEFORE
<div className="property-card">
  <div className="property-img">
    <img src="./images/list/p-1.png" alt="Veltora Skyline Residences" />
  </div>
  {/* ... rest of component ... */}
</div>

// AFTER  
<div className="property-card">
  <div className="property-img">
    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Veltora Skyline Residences" />
  </div>
  {/* ... rest of component ... */}
</div>
```

---

## Testing Images

1. **Development**: Run `npm start` and check all images in the browser
2. **Console**: Look for 404 errors in DevTools Network tab
3. **Responsive**: Test on mobile and tablet sizes
4. **Loading**: Verify images load quickly without broken icons

---

**All image URLs are ready to use. Simply copy the Unsplash URL for each image location and paste it into your component!**
