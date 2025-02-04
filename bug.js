```javascript
// Example showing incorrect usage of Tailwind's @apply directive within a custom directive
@layer components {
  .my-custom-directive {
    @apply text-lg font-bold; // This won't work properly because of the next line
    @apply bg-gray-200; // This overwrites the previous @apply  
  }
}

/* ... rest of your Tailwind CSS configuration ... */
```