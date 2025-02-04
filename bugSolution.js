```javascript
// Correct usage of Tailwind's @apply directive within a custom directive
@layer components {
  .my-custom-directive {
    @apply text-lg font-bold bg-gray-200; // Combine utility classes into a single @apply
  }
}

/* ... rest of your Tailwind CSS configuration ... */
```