# Basic running steps and some tips for setting the environment

> Running scripts in elevated powershell is vital!

1. Setup your environment according to [this guide](https://reactnative.dev/docs/set-up-your-environment)
2. Create AVD (Android Virual Device) with Android 35 SDK and bring it up and running.
3. Run the development servers. The project was initialized according to [this guide](https://reactnative.dev/docs/getting-started-without-a-framework)
``` sh
npm install
npm start # this will start Metro (javascript build tool), suggested to be running in its own terminal
npm run android # this should open an android emulator and after a while it should install the app
```
4. Try doing some changes in the codebase and see if the changes are reflected

- Gradle seems to be a little bit pain in the back. Uninstalling `c:/users/<user>/.gradle` and running the `android` script seems to solve some things
- MapLibre Native node package is `@maplibre/maplibre-react-native`
