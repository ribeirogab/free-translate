<h1 align="center">
<img src="https://i.ibb.co/WysD55S/free-translate.png" alt="free translate" width="250"/>
</h1>


# A free and unlimited translator for Node.js

> 🈂️ ⠀free text translator for Node.js.

## **Install**

To install free-translate, you can use NPM:

```zsh
npm install free-translate
```

## **Quick examples**

```js
const { translate } = require('free-translate');

(async () => {
  const translatedText = await translate('Hello World', { from: 'en', to: 'ja' });

  console.log(translatedText); // こんにちは世界
})();
```

### **Automatic language recognition**

If the language informed in the `from` is dynamic, just do not send it and the translator will automatically recognize it:

```js
const { translate } = require('free-translate');

(async () => {
  const translatedText = await translate('This is cool!', { to: 'ja' });

  console.log(translatedText); // これはカッコいい！
})();
```


---

## Support

Contact me!

- E-mail <a href="mailto:ribeirogabx@gmail.com" target="_blank">`ribeirogabx@gmail.com`</a>

---

## Licensa

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
