# CSS Animations Library

This section contains practical CSS animations with a consistent structure:

1. Animation name  
2. Animation description  
3. Animation code snippet  
4. Animation itself (live demo in `animations-showcase.html`)

## Folder Structure

```text
css/
  animations/
    README.md
    animations.css
    animations-showcase.html
```

## How to Run

Open `animations-showcase.html` in your browser.

## Showcase Order (Primitive -> Advanced)

1. `fade-in`
2. `slide-in-left`
3. `slide-in-right`
4. `pulse`
5. `rotate`
6. `bounce`
7. `shake`
8. `typing`
9. `gradient-shift`
10. `parallax-layers` (advanced)

---

## 1) Fade In

- **Animation name:** `fade-in`
- **Animation description:** Smoothly reveals an element by animating opacity from 0 to 1.
- **Animation code snippet:**

```css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.anim-fade-in {
  animation: fade-in 1s ease-in-out both;
}
```

- **Animation itself:** See block with class `anim-fade-in`.

## 2) Slide In Left

- **Animation name:** `slide-in-left`
- **Animation description:** Moves an element from the left into its natural position.
- **Animation code snippet:**

```css
@keyframes slide-in-left {
  from { transform: translateX(-40px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.anim-slide-in-left {
  animation: slide-in-left 0.8s ease-out both;
}
```

- **Animation itself:** See block with class `anim-slide-in-left`.

## 3) Slide In Right

- **Animation name:** `slide-in-right`
- **Animation description:** Moves an element from the right into place.
- **Animation code snippet:**

```css
@keyframes slide-in-right {
  from { transform: translateX(40px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.anim-slide-in-right {
  animation: slide-in-right 0.8s ease-out both;
}
```

- **Animation itself:** See block with class `anim-slide-in-right`.

## 4) Bounce

- **Animation name:** `bounce`
- **Animation description:** Creates a vertical bouncing effect.
- **Animation code snippet:**

```css
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-22px); }
  60% { transform: translateY(-12px); }
}

.anim-bounce {
  animation: bounce 1.2s ease infinite;
}
```

- **Animation itself:** See block with class `anim-bounce`.

## 5) Pulse

- **Animation name:** `pulse`
- **Animation description:** Gently scales an element in and out.
- **Animation code snippet:**

```css
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
}

.anim-pulse {
  animation: pulse 1.1s ease-in-out infinite;
}
```

- **Animation itself:** See block with class `anim-pulse`.

## 6) Rotate

- **Animation name:** `rotate`
- **Animation description:** Rotates an element continuously around its center.
- **Animation code snippet:**

```css
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.anim-rotate {
  animation: rotate 1.4s linear infinite;
}
```

- **Animation itself:** See block with class `anim-rotate`.

## 7) Shake

- **Animation name:** `shake`
- **Animation description:** Quick horizontal shaking, useful for invalid state feedback.
- **Animation code snippet:**

```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-8px); }
  40% { transform: translateX(8px); }
  60% { transform: translateX(-6px); }
  80% { transform: translateX(6px); }
}

.anim-shake {
  animation: shake 0.55s ease;
}
```

- **Animation itself:** See block with class `anim-shake`.

## 8) Typing

- **Animation name:** `typing`
- **Animation description:** Simulates a text typing effect using width steps and a cursor.
- **Animation code snippet:**

```css
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: #0f172a; }
}

.anim-typing {
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #0f172a;
  animation: typing 2.5s steps(22, end) forwards, blink-caret 0.75s step-end infinite;
}
```

- **Animation itself:** See block with class `anim-typing`.

## 9) Gradient Shift

- **Animation name:** `gradient-shift`
- **Animation description:** Animates a colorful background gradient position for a vivid effect.
- **Animation code snippet:**

```css
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.anim-gradient-shift {
  background: linear-gradient(120deg, #22c55e, #3b82f6, #a855f7);
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}
```

- **Animation itself:** See block with class `anim-gradient-shift`.

## 10) Parallax Layers (Advanced)

- **Animation name:** `parallax-layers`
- **Animation description:** Creates depth illusion by moving background/midground/foreground layers at different speeds.
- **Animation code snippet:**

```css
.parallax-back  { animation: parallax-back 6s ease-in-out infinite alternate; }
.parallax-mid   { animation: parallax-mid 4s ease-in-out infinite alternate; }
.parallax-front { animation: parallax-front 2.8s ease-in-out infinite alternate; }
```

- **Animation itself:** See block with class `parallax-scene`.

## Reduced Motion Note

For accessibility, disable or simplify non-essential motion:

```css
@media (prefers-reduced-motion: reduce) {
  .demo-box {
    animation: none !important;
    transition: none !important;
  }
}
```

In this showcase, animations are intentionally kept active for interview/demo visibility.
