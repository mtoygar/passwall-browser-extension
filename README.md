# PassWall Browser Extension

This repo is constituted to demonstrate the utilization of official [passwall-web](https://github.com/pass-wall/passwall-web/) code for a browser extension usage. By [static export](https://nextjs.org/docs/advanced-features/static-html-export) feature of next.js, the web code can be directly used on an extension.


Obviously, the web code does not designed for such a use, but most of the javascript code can be used directly or with little change. Moreover, having a framework eases the testability and maintainability of the extension code.

### Screenshots

- Below screenshots are actually identical to passwall-web. The only difference is they are taken from extension's popup.

<table>
  <tr>
    <td><img src="screenshots/readme-login.png" alt="Login Screen"/></td>
    <td><img src="screenshots/readme-login-index.png" alt="Login Index"/></td>
  </tr>
  <tr>
    <td><img src="screenshots/readme-new-login.png" alt="New Login Modal"/></td>
    <td><img src="screenshots/readme-login-search.png" alt="Login Search"/></td>
  </tr>
</table>

### Development

```
npm build
npm export
```

`npm export` command will output a `out` folder in project's root directory. Copy that file inside extension-src folder.

Afterwards, you can install the extension in the development mode directly to Firefox or Chrome.

Below two links can guide you for how to install the extension in the development mode directly to Firefox or Chrome.

- https://developer.chrome.com/extensions/getstarted#manifest
- https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
