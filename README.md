# vue-cli-plugin-coffee

CoffeeScript2 support for the projects created with [@vue/cli](https://github.com/vuejs/vue-cli).

With built-in:
* `cache-loader`
* `thread-loader`
* `babel-loader`
* `bower_components` and `node_modules` ignoring

## Installation

According to [this](https://cli.vuejs.org/guide/plugins-and-presets.html#installing-plugins-in-an-existing-project) you are able to install community plugins as follows:

```shell
npm remove @vue/cli-plugin-eslint # or see Troubleshooting
vue add coffee
```

## Common usage

Usually you write SFC like this

```vue
<template>
  <button @click="onclick">
    <slot></slot>
  </button>
</template>

<script lang="coffee">
  export default
    name: "Button"
    props:
      onclick:
        type: Function
        required: false
</script>
```

## Entries

According to [this](https://cli.vuejs.org/config/#configurewebpack) you can add entries using your `vue.config.js` like so:

```javascript
// vue.config.js
module.exports = {
  configureWebpack: {
    entry: {
      'new-entry': 'path/to/new/entry.coffee'
    }
  }
}

```

## Troubleshooting

If you're using ESLint, note that vue-loader uses `lang="coffee"` to identify components which are using Coffeescript, but `lang="coffee"` is not recognizable for ESLint. Fortunately, ESLint (following traditional HTML) uses `type="xxx"` to identify the type of scripts. As long as a `<script>` tag has any type other than javascript, ESLint would mark the script as non-javascript, and skips linting it. Coffeescript’s convention is to use `type="text/coffeescript"` to identify itself. Therefore, in your Vue components which are using Coffeescript, using both `lang` and `type` to avoid ESLint warnings. 
