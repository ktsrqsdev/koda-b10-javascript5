``` mermaid
flowchart TD
    A@{ shape: circle, label: "Start" }
    B@{ shape: lean-r, label: "C" }
    C@{ shape: rect, label: "K = C + 273.15" }
    D@{ shape: rect, label: "F = (9/5 * C) + 32" }
    E@{ shape: rect, label: "R = (4/5) * C" }
    F@{ shape: lean-r, label: "K" }
    G@{ shape: lean-r, label: "F" }
    H@{ shape: lean-r, label: "R" }
    I@{ shape: dbl-circ, label: "Stop" }

    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
    G --> H
    H --> I
  
```
