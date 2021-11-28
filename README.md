<div align="center">
    <h1>rc-tc-ifn</h1>
    <b><a href="https://codesandbox.io/s/rc-tc-ifn-nblgi">LIVE EXAMPLE</a></b>
</div>

---

#### Description
Advertising [rc-tc-ifn](https://www.npmjs.com/package/rc-tc-ifn) (for search)

+ You want to display beauty list data. But some data is oversized and break line, you need to clip and show tooltips for them. Using this.

+ Truncate text with ellipsis and show tooltip. (<b>if need</b>)

+ It suitable for dropdown list or table list data. (make width better)


---
### Usage

Install the package

```js
npm install --save rc-tc-ifn
```

Import the module in the place you want to use:
```js
import TooltipIfNeed from "rc-tc-ifn";

import "rc-tc-ifn/build/styles.css";

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

// 2. no truncate and no tooltip (width <= 100px)
<TooltipIfNeed width="100px" right>
    todo work
</TooltipIfNeed>

/* it suitable for dropdown list or table list data */

```

<br />

---

#### props

see all props in [react-tooltip-z](https://www.npmjs.com/package/react-tooltip-z)

+ note props

```js
`trigger` and `showSync`: now only supports hover so it's disabled.
```

| props                | type                          | description                                                                |
|----------------------|-------------------------------|----------------------------------------------------------------------------|
| tagName              | String                        | Tag wrap & fix size (default `span`)                                       |
| tagTruncate          | String                        | Tag child name (default `span`)                                            |
| width                | `px`, `%`                     | Set width with for child. Default `no`. (You should set width)             |

#### note
+ you should add className and set width from className.

<br />

#### RUN

<b><a href="https://codesandbox.io/s/rc-tc-ifn-nblgi">LIVE EXAMPLE</a></b>

<br />

### License

MIT
