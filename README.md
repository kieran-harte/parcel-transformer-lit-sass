# parcel-transformer-lit-sass

Import a SCSS file into a Lit component as a CSS template literal.

This Parcel setup will take a SASS file import, compile it to CSS, then convert it to a Lit CSS template literal:

# Setup

Install the package from [npm](https://www.npmjs.com/package/parcel-transformer-lit-sass)

```
npm i parcel-transformer-lit-sass
```

In your `.parcelrc` config file, create a [named pipeline](https://v2.parceljs.org/configuration/plugin-configuration/#named-pipelines) which will tell Parcel to use the three transformers shown below, in that order.

Your config may look something like this:

```json
{
  "extends": "@parcel/config-default",
  "transformers": {
    "litsass:*": [
      "@parcel/transformer-sass",
      "parcel-transformer-lit-sass",
      "@parcel/transformer-js"
    ]
  }
}
```

_You can change `'litsass'` to a different name if you desire._

_If you are importing a `.css` file, remove `@parcel/transformer-sass`_

# How to use

Prepend your import path with your named pipeline:

```js
import myStyles from 'litsass:./myStyles.scss'
```

The value of `myStyles` will become:

```js
mySyles = css`
  p {
    color: black;
  }
  ...
`
```

## Example

```js
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators';

// Import stylesheet using the 'litsass:' named pipeline
import myStyles from 'litsass:./myStyles.scss';

@customElement('my-component')
export class MyComponent extends LitElement {

	static styles = [myStyles];

	...
```
