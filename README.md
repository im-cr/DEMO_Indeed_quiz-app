# **Indeed Demo Application**

---

### **Table Of Contents**

- [App Config](#config)
  - [App Install](#install)
  - [Local App](#local)
- [Build Considerations](#build)
  - [Engineering](#engineering)
    - [JS Build](#jsbuild)
    - [Why Sass](#sass)
  - [UX](#ux)
- [Refactor](#time)
- [QA](#qa)
- [Dependencies](#dependencies)

## ⚙ Application Config <a name="config"></a>

### **Install Dependencies** <a name="install"></a>

To get started, in the same root directory as the `package.json` file run the npm command below in the command line or terminal to install the project dependencies.

```
  npm install
```

Please make sure you have the latest [`node.js`](https://nodejs.org/en/) installed on your system.

### **View App Locally** <a name="local"></a>

This application was developed use `create-react-app`. You can view the application locally by running the command below in the projects root folder.

```
npm run start
```

## 💭 Build Considerations <a name="build"></a>

### 🧪 **Engineering** <a name="engineering"></a>

**_Why React?_** <a name="jsbuild"></a>

Truthfully, while I considered using `next.js` or additional react libraries to build this application. I decided against more complex frameworks/dependencies because I wanted to build a bare bones prototype that would accurately reflect my approach and thought process regarding this sort of application without significant usage of dependencies.

**_Why Sass?_** <a name="sass"></a>

I decided to use `scss` for styling and implemented a `bem/atomic` css style approach to break styles into smaller `scss` modules that would be easier to find and review.

Using `scss` also allowed for easy `scss` to `css` compiling for file compression and realtime file watching.

Each major markup element `quiz, question, answer` has a namespaced `.scss` file that contains it's related styles.

The `scss` architecture is organized into 5 primary groups:

- `/abstracts`: Non-rendered elements (variables,mixins,etc)
- `/base`: Browser resets and default custom style declarations.
- `/comp`: Element specific modules (header,footer, etc).
- `/layouts`: Layout/Page specific modules (page level overrides)
- `/utils`: General style utility classes,animations,override settings.

The `app.scss` file imports the `__index.scss` file located in each group directory which in turn imports the necessary `.scss` files contained in each shared folder.

The `scss` compiler can be run from the command line or terminal with the script below:

```
npm run sass
```

- `scss source directory` = `./src/assets/sass/`
- `css output directory` = `./src/assets/css/`

### 🎨 User Experience <a name="ux"></a>

The UI/UX considerations occupied two spaces while building this application.

1. Build a high fidelity prototype that closely matches the provided application mockup assets.
2. Add appropriate interaction cues and accents that would feel natural within the application context.

I wanted to ensure that the general styles would appropriately and responsively render on modern devices and match the provided mockups.

Additional interaction and animation accents were added to the quiz button and radio inputs.

## ⏲ Refactor <a name="time"></a>

Given more time I would address the items listed below:

- Breakdown additional smaller componenets (i.e - buttons, header, etc
- Update and design alternative animation accents for form elements & quiz completion
- Add react router
- Add routes & data persistence functionality for quiz questions and completion history
- Add a loader animation element

## 🔎 QA Review <a name="qa"></a>

General application functionality on the browsers listed below will provide the intended application experience.

| Browser | Version     |
| ------- | ----------- |
| Chrome  | 90 - Latest |
| Safari  | 13 - Latest |
| Firefox | 98 - Latest |

## 📕 Dependencies <a name="dependencies"></a>

- [Prettier](https://www.npmjs.com/package/prettier)
- [Sass](https://www.npmjs.com/package/sass)
