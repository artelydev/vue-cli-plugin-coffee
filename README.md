# vue-cli-plugin-coffee

CoffeeScript2 support for the projects created with [@vue/cli](https://github.com/vuejs/vue-cli).

## Installation

According to [this](https://cli.vuejs.org/guide/plugins-and-presets.html#installing-plugins-in-an-existing-project) you are able to install community plugins as follows:

```shell
vue add coffee
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

## -coffeescript

I found [this](https://github.com/thisredone/vue-cli-plugin-coffeescript) package but apparently it does some `main.coffee` searching and replacement. While it is not bad by any means, it seems to me like a custom behavior. Want to keep things as clean as possible :sparkles:

## Troubleshooting

Note that vue-loader uses `lang="coffee"` to identify components which are using Coffeescript, but `lang="coffee"` is not recognizable for ESLint. Fortunately, ESLint (following traditional HTML) uses `type="xxx"` to identify the type of scripts. As long as a `<script>` tag has any type other than javascript, ESLint would mark the script as non-javascript, and skips linting it. Coffeescript’s convention is to use `type="text/coffeescript"` to identify itself. Therefore, in your Vue components which are using Coffeescript, using both `lang` and `type` to avoid ESLint warnings. 
