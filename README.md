# re-start :globe_with_meridians: :iphone: :computer:

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![re-start (1).png](https://s4.postimg.org/4a0zw1egd/re-start_1.png)](https://postimg.org/image/6elcx4g2x/)






## Aim of this project is  to: 
* Target multiple platforms (Android, iOS, Web, Windows[UWP] and Electron[macOS, Ubuntu, Windows]) with react native' APIs and a single codebase.
* Follow best practices while doing the above.
* Cut out the time and effort it takes to setup the project (based on create-react-app).
* Achieve 'Write once use everywhere' with react-native (though react strictly says 'Learn once use anywhere').
* Mitigate git cloning or manual upgrading of boiler plates, which is possible because this project is a react-native [template](https://github.com/facebook/react-native/pull/12548). :tada:



## Structure of the project:

* This project comprises of several templates that are curated keeping in mind the various use cases of initiating a new project.
Based on your requirements and preferences, you can choose a templates that suits your you case the best.


| Template Name  | Description | Installation Command  |  Version |
| ------------- | ------------- | ------------- | ------------- |
| `re-base`  | The most basic version that runs on all platforms  | `react-native init <Your Project Name> --template re-base`  | [![npm](https://img.shields.io/npm/v/react-native-template-re-base.svg?style=flat-square)](https://www.npmjs.com/package/react-native-template-re-base)  |
| `re-dux`  | `re-base` with redux wired out of the box  | `react-native init <Your Project Name> --template re-dux`   | [![npm](https://img.shields.io/npm/v/react-native-template-re-dux.svg?style=flat-square)](https://www.npmjs.com/package/react-native-template-re-dux)  |
| `re-route`  | `re-base` with react-router wired out of the box  | `react-native init <Your Project Name> --template re-route`   | [![npm](https://img.shields.io/npm/v/react-native-template-re-route.svg?style=flat-square)](https://www.npmjs.com/package/react-native-template-re-route)  |
| `re-start`  | `re-base` combined with redux and react-router  | `react-native init <Your Project Name> --template re-start`   | [![npm](https://img.shields.io/npm/v/react-native-template-re-start.svg?style=flat-square)](https://www.npmjs.com/package/react-native-template-re-start)  |
 
 
 
 
## Usage 

### Pre-requisites:
Node.js & npm on your system([follow this](https://docs.npmjs.com/getting-started/installing-node))<br/>
react-native CLI (`npm install -g react-native-cli`)

All you have to do is:
- Create a new react-native project using react-native-cli and specify this project as a template:
```
react-native init <Your Project Name> --template <Template Name>
```
- Since react-native-template does'nt support adding dev dependencies and custom scripts to package.json,
 so I have created a custom script to do that.
```
node scripts/additionalDependencies.js
```
#### Notes:
 - If the above script fails due to some reason, you can do it manually by copying the contents
 of devDependencies.json to your package.json's devDependencies object and adding following to the scripts object.
 ```
"web": "node scripts/start.js",
"build": "node scripts/build.js"
```
- react-native-web currently (20th of July, 2017) supports React/ReactDOM 15.4, 15.5, or 15.6, so make sure you do not upgrade if you want support for web.
- make sure that the version of react-native-windows is same as your react-native version, if you are targeting windows support.

---

## Run the project on a specific platform:

### Android
`react-native run-android`

### iOS
`react-native run-ios`

### Web
`npm/yarn run web`

### Windows
`react-native windows`
`react-native run-windows`

### Desktop (Electron)
`npm/yarn run electron`

## Build for production:
### Android/iOS
[This will help](https://facebook.github.io/react-native/docs/running-on-device.html)

### Web
`npm/yarn run build` (this will build your production ready bundle)

-------
## Some very useful cross platform compatible libraries:
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [axios](https://github.com/mzabriskie/axios)
- [react-router](https://github.com/ReactTraining/react-router)
- [re-render](https://github.com/amoghbanta/re-render) (this is experimental and a WIP)


-------
## Progress:
- [x] support for web ([react-native-web](https://github.com/necolas/react-native-web))<br/>
- [x] support for Windows ([react-native-windows](https://github.com/ReactWindows/react-native-windows))<br/>
- [x] Support for electron <br/>
- [x] Compatibility with React 16 <br/>
- [ ] Add Docs and FAQs <br/>
- [ ] Configure Travis and Greenkeeper <br/>
- [ ] Interactive CLI to create templates and components <br/>

---
## Running demo on Web, Android, iOS, Windows(Universal) and Electron:
<p align="center">
<img src="https://s28.postimg.org/gmgva9rrh/58961a12afcd1276062762.gif" height="450"  width="260">
<img src="https://s28.postimg.org/nbneqad3h/58961a2a030da447844552.gif" height="450"  width="260">
<img src="https://s28.postimg.org/aa1q0fop9/589619ef1b623465256988.gif" height="450"  width="260">
</p>
<p align="center">
<img src="https://s21.postimg.org/yuzzepj7b/ezgif_com_video_to_gif.gif" height="450"  width="260">
<img src="https://s2.postimg.org/edxytckih/ezgif.com-video-to-gif.gif" height="450"  width="350">
</p>

------


## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars0.githubusercontent.com/u/7105580?v=4" width="100px;"/><br /><sub>Amogh Banta</sub>](http://www.amoghbanta.com)<br />[💻](https://github.com/amoghbanta/re-start/commits?author=amoghbanta "Code") [🎨](#design-amoghbanta "Design") [📖](https://github.com/amoghbanta/re-start/commits?author=amoghbanta "Documentation") [🐛](https://github.com/amoghbanta/re-start/issues?q=author%3Aamoghbanta "Bug reports") [🤔](#ideas-amoghbanta "Ideas, Planning, & Feedback") [⚠️](https://github.com/amoghbanta/re-start/commits?author=amoghbanta "Tests") | [<img src="https://avatars1.githubusercontent.com/u/532414?v=4" width="100px;"/><br /><sub>Jesús Leganés-Combarro</sub>](http://pirannafs.blogspot.com)<br />[💻](https://github.com/amoghbanta/re-start/commits?author=piranna "Code") [🤔](#ideas-piranna "Ideas, Planning, & Feedback") [🐛](https://github.com/amoghbanta/re-start/issues?q=author%3Apiranna "Bug reports") [⚠️](https://github.com/amoghbanta/re-start/commits?author=piranna "Tests") [👀](#review-piranna "Reviewed Pull Requests") [📖](https://github.com/amoghbanta/re-start/commits?author=piranna "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/1699793?v=4" width="100px;"/><br /><sub>Ankit Popli</sub>](https://ankitpopli.me)<br />[👀](#review-ankitpopli1891 "Reviewed Pull Requests") [🤔](#ideas-ankitpopli1891 "Ideas, Planning, & Feedback") [🐛](https://github.com/amoghbanta/re-start/issues?q=author%3Aankitpopli1891 "Bug reports") | [<img src="https://avatars1.githubusercontent.com/u/177822?v=4" width="100px;"/><br /><sub>Christopher Hein</sub>](http://chrishein.com)<br />[📖](https://github.com/amoghbanta/re-start/commits?author=christopherhein "Documentation") [🐛](https://github.com/amoghbanta/re-start/issues?q=author%3Achristopherhein "Bug reports") | [<img src="https://avatars0.githubusercontent.com/u/593122?v=4" width="100px;"/><br /><sub>DuncanMacWeb</sub>](https://github.com/DuncanMacWeb)<br />[💻](https://github.com/amoghbanta/re-start/commits?author=DuncanMacWeb "Code") |
| :---: | :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->
Full list of contributors can be found [here](https://github.com/react-everywhere/re-start/graphs/contributors).



#### Companies that contribute to `re-start`'s development:

- [DigiCred Technologies](https://github.com/DigiCred)
- [Quantum BA](https://quantum-ba.com/)



## LICENSE

MIT

