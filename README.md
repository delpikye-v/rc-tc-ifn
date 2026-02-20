# 💬 rc-tc-ifn

[![NPM](https://img.shields.io/npm/v/rc-tc-ifn.svg)](https://www.npmjs.com/package/rc-tc-ifn) ![Downloads](https://img.shields.io/npm/dt/rc-tc-ifn.svg)

<a href="https://codesandbox.io/p/sandbox/zz7pzp" target="_blank">LIVE EXAMPLE</a>

---

Smart truncate + tooltip component for React 18+.   
Built on top of `react-tooltip-z`.

> Automatically truncates text with ellipsis **only when needed** and
> shows tooltip when content overflows.

---

## Why rc-tc-ifn?

-   ✂️ Auto truncate with `text-overflow: ellipsis`
-   🧠 Tooltip shows **only if content overflows**
-   🎯 Zero manual overflow checking
-   📦 Lightweight wrapper
-   🪟 Portal-based tooltip (via react-tooltip-z)
-   🎨 Fully customizable tooltip props
-   ⚡ React 18+ ready

Perfect for:

-   Table cells
-   Dropdown lists
-   Select menus
-   Data grids
-   Compact UI layouts

---

## Installation

``` bash
npm install rc-tc-ifn
```

---

## Basic Usage

``` tsx
import TooltipIfn from "rc-tc-ifn";

export function Example() {
  return (
    <TooltipIfn width={120} placement="right">
      Very long content here that might overflow
    </TooltipIfn>
  );
}
```

If the content exceeds 120px → it will truncate and show tooltip.\
If not → it renders normally (no tooltip).

---

## Custom Content

``` tsx
<TooltipIfn
  width="150px"
  content="Custom tooltip content"
  placement="top"
>
  Long text here...
</TooltipIfn>
```

---

## Props

All tooltip-related props are inherited from **react-tooltip-z**\
(except `trigger` and `open`, which are internally controlled).

| Prop                | Type                     | Default   | Description                               |
|---------------------|--------------------------|-----------|-------------------------------------------|
| `children`          | `ReactNode`              | —         | Target element                             |
| `content`           | `string \| ReactNode`    | `children`| Tooltip content                            |
| `width`             | `string \| number`       | —         | Width applied to truncated child           |
| `wrapperWidth`      | `string \| number`       | —         | Width applied to wrapper                   |
| `tagName`           | `string`                 | `"span"`  | Wrapper tag                                |
| `truncateClassName` | `string`                 | —         | Custom class for truncated element         |
| `...rest`           | `any`                    | —         | Forwarded to `react-tooltip-z` props       |

---

## Behavior Notes

-   Tooltip only appears when content overflows.
-   No CSS import required (CSS injected via JS).
-   `trigger` and `open` props are disabled (hover-only behavior).
-   Child element must accept `ref` (DOM or forwardRef component).

---

## Comparison

| Criteria               | rc-tc-ifn | Manual Implementation  |
| ---------------------- | :-------: | :--------------------: |
| Smart overflow check   |     ✅     |           ❌           |
| Tooltip only if needed |     ✅     |           ❌           |
| Portal support         |     ✅     |           ⚠️           |
| API simplicity         |     ✅     |           ❌           |
| Setup time             |     ✅     |           ❌           |

<br />

<b>Notes</b>

- ✅ Built-in overflow detection — no extra logic required
- ✅ Tooltip renders only when necessary — avoids unnecessary DOM updates
- ✅ Portal support included — better layering & positioning
- ⚠️ Manual approach may support portal, but requires custom setup
- ❌ Manual implementation requires repetitive boilerplate and edge-case handling

---

## License

MIT

