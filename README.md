# Tailwind CSS @apply Directive Order Issue

This repository demonstrates an uncommon error related to the order of `@apply` directives within a custom directive in Tailwind CSS.  Incorrect ordering can lead to unintended style overwriting.

## Bug Description
Using multiple `@apply` directives within a single custom directive in Tailwind can cause unexpected behavior if the directives overwrite each other. Later `@apply` directives will override earlier ones, resulting in only the last `@apply` being applied.

## Solution
To fix this, combine the desired Tailwind utility classes into a single `@apply` line or refactor your custom directive to use class names directly instead of relying on multiple `@apply` lines within the directive.

## Usage
1. Clone the repository.
2. Examine the `bug.js` file to see the incorrect usage of `@apply`.
3. See `bugSolution.js` for the correct implementation.