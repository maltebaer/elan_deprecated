# elan/vanilla version

## technology

-   semantic html
-   css with tailwind
-   js with alpine
-   building with vite

## methodology

### cube css

1. design tokens
2. css reset
3. global styles
   -> style as much as possible at a high level
   -> progressive enhancement in action
4. composition
   -> provide high-level, flexible layouts
   -> determine how elements interact with each other
   -> create consistent flow and rhythm
5. utility
   -> extend design tokens to maintain a single source of truth
   -> abstract repeatability away from css and apply it in the html
6. block
   -> extend the work already done by the global css, composition and utility layers
   -> apply a collection of design tokens within a concise group
   -> create a namespace or specificity boost to control a specific context
7. exception
   -> provide a concise varation to a block
   -> use data attributes
8. grouping
    1. the elements's primary block class
    2. any subsequent block classes
    3. standard utility classes
    4. design token utility classes
