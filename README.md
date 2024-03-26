# Career consultant

**[WELCOME TO LIVE PAGE](https://github.com/SoftRyzen-internship/career-consultant)**

<>
<img width="100%" src="./public/images/readme/readme-title.jpg" alt="microservices"/>
</>

<p align="center">
  <a href="#introduction">Introduction</a> •
  <a href="#sections">Sections</a> •
  <a href="#components-api">Components API</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

## Introduction

`Career consultant` is a web application aimed at career counseling for
Ukrainians who want to receive a clear action plan, practical tools, and
support.

## Features

The layout is responsive and cross-browser compatible - mobile starts from
360px, tablet from 768px, desktop from 1280px. The layout from 360px to 480px is
fluid (stretchable). Used mobile-first approach.

### Sections

- **Header**: Contains a logo and a navigation menu. Each menu item is clickable
  and performs smooth scrolling to the respective section on the page. A mobile
  menu is used for the mobile and tablet versions.
- **Hero**: Contains four components, the data of which can be edited using the
  Sanity admin panel. The mobile version includes a slider. The slider is
  infinite, swipable, and automatically transitions one card at a time.
- **Requests**: On the desktop version, it consists of cards, while on the
  tablet and mobile versions, it features a slider with navigation buttons.
- **Services**: Contains an infinite slider. Cards can be deleted and added via
  the Sanity admin panel.
- **What to choose**: Static section with a button to redirect to the Telegram
  messenger.
- **Reviews**:There is a slider with navigation buttons. Data can be edited
  using the Sanity admin panel.
- **Feedback**: Contains links to social networks and a feedback form.

## Components API

- ### Button

| Prop            | Value               | Description                         |
| --------------- | ------------------- | ----------------------------------- |
| `children`      | `text`              | required, button text               |
| `type`          | `button` / `submit` | required, button type               |
| `onClick`       | `function`          | optional, add effect on click event |
| `isSubmitted`   | `boolean`           | optional, set submitted styles      |
| `isSubmitError` | `boolean`           | optional, set submit error styles   |
| `disabled`      | `boolean`           | optional, set disable styles        |

## Credits

This software uses the following open source packages:

- [Next.js](https://nextjs.org/)
- [Sanity](https://www.sanity.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [HeadlessUI](https://headlessui.com/)
- [Swiper](https://swiperjs.com/)
- [react-scroll](https://www.npmjs.com/package/react-scroll)
- [react-hook-form](https://react-hook-form.com/)
- [svgr](https://www.npmjs.com/package/@svgr/webpack)
- [classnames](https://www.npmjs.com/package/classnames)
