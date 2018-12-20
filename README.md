# re-start :globe_with_meridians: :iphone: :computer:

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![re-start](https://s4.postimg.org/4a0zw1egd/re-start_1.png)](https://postimg.org/image/6elcx4g2x/)

## Aim of the project
* Target multiple platforms (Android, iOS, Web, Windows[UWP] and Electron[macOS,
  Linux, Windows]) with react native' APIs and a single codebase.
* Follow best practices while doing the above.
* Cut out the time and effort it takes to setup the project (based on
  `create-react-app`).
* Achieve [write once run everywhere](https://en.wikipedia.org/wiki/Write_once,_run_anywhere)
  with react-native (though react strictly says 'Learn once use anywhere').
* Mitigate git cloning or manual upgrading of boiler plates, which is possible
  because this project is a react-native
  [template](https://github.com/facebook/react-native/pull/12548). :tada:

## Structure of the project

* This project comprises of several templates that are curated keeping in mind
  the various use cases of initiating a new project. Based on your requirements
  and preferences, you can choose a templates that suits your you case the best.

| Template Name | Description | Version |
| ------------- | ----------- | ------- |
| `re-base`     | The most basic version that runs on all platforms | [![npm version](https://badge.fury.io/js/react-native-template-re-base.svg)](https://badge.fury.io/js/react-native-template-re-base)   |
| `re-dux`      | `re-base` with redux wired out of the box         | [![npm version](https://badge.fury.io/js/react-native-template-re-dux.svg)](https://badge.fury.io/js/react-native-template-re-dux)     |
| `re-route`    | `re-base` with react-router wired out of the box  | [![npm version](https://badge.fury.io/js/react-native-template-re-route.svg)](https://badge.fury.io/js/react-native-template-re-route) |
| `re-start`    | `re-base` combined with redux and react-router    | [![npm version](https://badge.fury.io/js/react-native-template-re-start.svg)](https://badge.fury.io/js/react-native-template-re-start) |

## Usage

### Pre-requisites
- [Node.js & npm](https://docs.npmjs.com/getting-started/installing-node)
- react-native CLI (`npm install -g react-native-cli`)

### Install

1. Create a new react-native project using `react-native-cli` and specify
   `re-base` as a template:
   ```sh
   react-native init <Your Project Name> --template re-base
   ```
2. If you want to use a derived template like `re-dux` or `re-route`, install
   them directly on top of the just created project. You'll probably get a
   warning about the project already exists, just say it to overwrite the files.
   ```sh
   react-native init <Your Project Name> --template re-dux
   react-native init <Your Project Name> --template re-route
   react-native init <Your Project Name> --template re-start
   ```
   `re-start` template depend of both `re-route` and `re-dux`, be sure to
   install them first in that order.
3. Since `react-native-template` doesn't support adding `devDependencies` and
   custom scripts to `package.json`, exec `./finishInstall.js` to finish the
   project configuration.
4. Your project should now be ready to build apps for the different platforms.

### Run the project on a specific platform

#### Android/iOS
```sh
npm/yarn run android
npm/yarn run ios
```
In case of problems, this
[tutorial](https://facebook.github.io/react-native/docs/running-on-device.html)
will help you to configure your environment.

#### Desktop (Electron)
```sh
npm/yarn run electron
```

#### Web
```sh
npm/yarn run web
```

#### Windows
```sh
npm/yarn run windows
```
Windows platforms needs to have installed the `Windows 10 SDK Build 14393` to be
able to be build. A certificate is needed to sign the binary, follow the
[instructions](https://msdn.microsoft.com/en-us/library/windows/apps/br230260(v=vs.110).aspx)
to create or update the sign certificate. After that, a pop-up window would
appear during the first time you exec the build process asking to install the
certificate you've just created, just accept it.

### Build for production

#### Android
```sh
npm/yarn run android:release
```

#### Electron
```sh
npm/yarn run electron:release
```
If you are running this on Linux or OSX, this will need you have `wine` 1.6
installed in your system because setting the Windows app icon makes usage
internally of the [node-rcedit](https://github.com/atom/node-rcedit) package.

#### iOS
```sh
npm/yarn run ios:release
```

#### Web
```sh
npm/yarn run web:release
```
This will build your production ready bundle

#### Windows
```sh
npm/yarn run windows:release
```

## Some very useful cross platform compatible libraries
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [axios](https://github.com/mzabriskie/axios)
- [react-router](https://github.com/ReactTraining/react-router)
- [re-render](https://github.com/amoghbanta/re-render) (this is experimental and a WIP)

## Progress
- [x] support for web ([react-native-web_improved](https://github.com/piranna/react-native-web_improved))
- [x] support for Windows ([react-native-windows](https://github.com/ReactWindows/react-native-windows))
- [x] Support for electron
- [x] Compatibility with React 16
- [ ] Add Docs and FAQs
- [ ] Configure Travis and Greenkeeper
- [ ] Interactive CLI to create templates and components

## Running demo on Web, Android, iOS, Windows(Universal) and Electron

<p align="center">
<img src="https://s28.postimg.org/gmgva9rrh/58961a12afcd1276062762.gif" height="450"  width="260">
<img src="https://s28.postimg.org/nbneqad3h/58961a2a030da447844552.gif" height="450"  width="260">
<img src="https://s28.postimg.org/aa1q0fop9/589619ef1b623465256988.gif" height="450"  width="260">
</p>
<p align="center">
<img src="https://s21.postimg.org/yuzzepj7b/ezgif_com_video_to_gif.gif" height="450"  width="260">
<img src="https://s2.postimg.org/edxytckih/ezgif.com-video-to-gif.gif" height="450"  width="350">
</p>

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars0.githubusercontent.com/u/7105580?v=4" width="100px;"/><br /><sub>Amogh Banta</sub>](http://www.amoghbanta.com)<br />[💻](https://github.com/amoghbanta/re-start/commits?author=amoghbanta "Code") [🎨](#design-amoghbanta "Design") [📖](https://github.com/amoghbanta/re-start/commits?author=amoghbanta "Documentation") [🐛](https://github.com/amoghbanta/re-start/issues?q=author%3Aamoghbanta "Bug reports") [🤔](#ideas-amoghbanta "Ideas, Planning, & Feedback") [⚠️](https://github.com/amoghbanta/re-start/commits?author=amoghbanta "Tests") | [<img src="https://avatars1.githubusercontent.com/u/532414?v=4" width="100px;"/><br /><sub>Jesús Leganés-Combarro</sub>](http://pirannafs.blogspot.com)<br />[💻](https://github.com/amoghbanta/re-start/commits?author=piranna "Code") [🤔](#ideas-piranna "Ideas, Planning, & Feedback") [🐛](https://github.com/amoghbanta/re-start/issues?q=author%3Apiranna "Bug reports") [⚠️](https://github.com/amoghbanta/re-start/commits?author=piranna "Tests") [👀](#review-piranna "Reviewed Pull Requests") [📖](https://github.com/amoghbanta/re-start/commits?author=piranna "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/1699793?v=4" width="100px;"/><br /><sub>Ankit Popli</sub>](https://ankitpopli.me)<br />[👀](#review-ankitpopli1891 "Reviewed Pull Requests") [🤔](#ideas-ankitpopli1891 "Ideas, Planning, & Feedback") [🐛](https://github.com/amoghbanta/re-start/issues?q=author%3Aankitpopli1891 "Bug reports") | [<img src="https://avatars1.githubusercontent.com/u/177822?v=4" width="100px;"/><br /><sub>Christopher Hein</sub>](http://chrishein.com)<br />[📖](https://github.com/amoghbanta/re-start/commits?author=christopherhein "Documentation") [🐛](https://github.com/amoghbanta/re-start/issues?q=author%3Achristopherhein "Bug reports") | [<img src="https://avatars0.githubusercontent.com/u/593122?v=4" width="100px;"/><br /><sub>DuncanMacWeb</sub>](https://github.com/DuncanMacWeb)<br />[💻](https://github.com/amoghbanta/re-start/commits?author=DuncanMacWeb "Code") |
| :---: | :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->
Full list of contributors can be found [here](https://github.com/react-everywhere/re-start/graphs/contributors).

## Companies that contribute to `re-start`'s development

- [DigiCred Technologies](https://github.com/DigiCred)
- [Quantum BA](https://quantum-ba.com/)
- [UnifyMe](http://www.unifyme.me/)

## LICENSE

MIT
