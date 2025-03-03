<div align="center">
    <h1>rc-tc-ifn</h1>
    <b><a href="https://codesandbox.io/s/nblgi">LIVE EXAMPLE</a></b>
</div>

---

[![NPM](https://img.shields.io/npm/v/rc-tc-ifn.svg)](https://www.npmjs.com/package/rc-tc-ifn)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Downloads](https://img.shields.io/npm/dt/rc-tc-ifn.svg)

---

#### Description
Change [rc-tc-ifn](https://www.npmjs.com/package/rc-tc-ifn)

+ You want to display beauty list data. But some data is oversized and break line, you need to clip and show tooltips for them. Using this.

+ Truncate text with ellipsis and show tooltip. (<b>if need</b>)

+ It suitable for dropdown list or table list data. (make width better)

+ v>= 2.0 (Fix and update better)


---
### Usage

Install the package

```js
npm install rc-tc-ifn
```

Import the module in the place you want to use:
```js
import TooltipIfNeed from "rc-tc-ifn";

import "rc-tc-ifn/dist/styles.css";

```

#### Snippet

```js
// const [content, setContent] = useState('This is simple tooltip')

// 1. truncate and display tooltip (ex: width > 100px)
<TooltipIfNeed width="100px" right>
    todosomethingxxxlatexxxx
</TooltipIfNeed>
// display: todosomethingxxx
// tooltip: todosomethingxxxlatexxxx   // or pass props tooltipContent
```

```js
// 2. no truncate and no tooltip (width <= 100px)
<TooltipIfNeed width="100px" right>
    todo work
</TooltipIfNeed>

/* it suitable for dropdown list or table list data */
```

<br />

---

#### props

see all props in [react-tooltip-z](https://www.npmjs.com/package/react-tooltip-z) or file d.ts

+ note

```js
`trigger` and `showSync`: now only supports hover so it is disabled.
```

| props                | type                          | description                                                                |
|----------------------|-------------------------------|----------------------------------------------------------------------------|
| tagName              | String                        | Tag wrap & fix size (default `span`)                                       |
| tagTruncate          | String                        | Tag child name (default `span`)                                            |
| truncateClassName    | String                        | Tag truncate className                                                     |
| width                | `px`, `%`                     | Set width with for child. Default `no`.                                    |

#### note
`you should add className and set width from className`.

<br />

#### RUN

<b><a href="https://codesandbox.io/s/nblgi">LIVE EXAMPLE</a></b>

<br />

### License

MIT
