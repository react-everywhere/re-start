# ReactNativeEverywhere :globe_with_meridians: :iphone: :computer:

[![re-start (1).png](https://s4.postimg.org/4a0zw1egd/re-start_1.png)](https://postimg.org/image/6elcx4g2x/)


## Note (Current status): 
Good news is that react-native-cli now supports [templates](https://github.com/facebook/react-native/pull/12548). So, it makes makes much more sense if this project is a react-native-template, which will remove the need to update this project with every majore release of react-native. It just works as of now (on android, iOS and Web, need to test in on windows). So, no more git cloning. All you have to do is:
```
react-native init <Your Project Name> --template everywhere
```
and then:
```
react-native run-ios
react-native run-android
npm run web
```
