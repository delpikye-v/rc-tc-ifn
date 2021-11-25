<div align="center">
    <h1>rc-tc-ifn</h1>
    <b><a href="https://codesandbox.io/s/rc-tc-ifn-nblgi">LIVE EXAMPLE</a></b>
</div>

---

#### Description

+ You want to display beauty list data. But some data is oversized and dashed, you need to clip and show only tooltips for them, and you don't know when to show tooltips.
=> This lib supports you if it suits your requirements.

+ Truncate string with ellipsis (Show tooltip if need)

+ You should see live demo

---
### Usage

Install the package

```js
npm install --save rc-tc-ifn
```

Import the module in the place you want to use:
```js
import TruncateTooltip from "rc-tc-ifn";

import "rc-tc-ifn/build/styles.css";

```

#### Snippet

```js
// const [content, setContent] = useState('This is simple tooltip')

// 1
<TruncateTooltip width="100px" right>
    abcdefghiklmonpf100px...fjslkfjlksdjflksjfdlksjflksjfklsjflksjdlf
</TruncateTooltip>
// => truncate and display tooltip  (display on screen:  `abcdefghiklmonpf100px...` )

// 2
<TruncateTooltip width="100px" right>
    abcdefghiklmonpf1
</TruncateTooltip>
// => no truncate and no tooltip

/*
it will auto truncate, display text with ... and show tooltip
(You should see live demo)
*/

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

<br />

#### Note
more `react-tooltip-z`

<br />

#### RUN

<b><a href="https://codesandbox.io/s/rc-tc-ifn-nblgi">LIVE EXAMPLE</a></b>

<br />

### License

MIT
