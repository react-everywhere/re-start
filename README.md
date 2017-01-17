# ReactNativeEverywhere

This project  is an attempt to:
* Target multiple platforms(Android, iOS, web, windows and macOS) with react native' APIs.
* Follow best practices while doing the above.
* Cut out the time and effort it takes to setup the project(based on create-react-app)
---

## How it works
This starter kit has different branches based on what general requirements are(more branches coming soon). Just clone the project, switch to the desired branch, remove the .git folder and you are all set to code your app without thinking of any requirements or pre/post-tasks that need to be taken care of.  

---

##Wiring Up
`git clone https://yourGithubUsername@github.com/amoghbanta/reactNativeEverywhere.git yourProjectName`<br/>
`cd yourProjectName` <br/>
`git checkout theBranchYouNeed`<br/>
`rm -rf .git`<br/>
`npm i`<br/>
---

##Run you project
####Pre-requisites:
Node.js & npm on your system([follow this](https://docs.npmjs.com/getting-started/installing-node))<br/>
react-native CLI (`npm install -g react-native-cli`)

####Android
`react-native run-android`

####iOS
`react-native run-ios`

####Web
`npm run web`

###Build for production:
####Android/iOS
[This will help](https://facebook.github.io/react-native/docs/running-on-device.html)

####Web
`npm run build` (this will build your production ready bundle)

-------

###TODO:
- [x] support for web ([react-native-web](https://github.com/necolas/react-native-web))<br/>
- [ ] support for macOS([react-native-macOS](https://github.com/ptmt/react-native-macos))<br/>
- [ ] support for Windows ([react-native-windows](https://github.com/ReactWindows/react-native-windows))<br/>
- [ ] improve webpack config for web <br/>

---
##Contributing
This starter kit is still in very early stage. All your suggestions and PRs and welcome.