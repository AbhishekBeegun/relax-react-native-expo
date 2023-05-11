# Expo Router Example

step one download aab from expo--
step two generate keystore using keytool default name and password works
step three put bundletool + aab + keystore in one folder
step four open cmd cd to folder and paste this 
java -jar bundletool.jar build-apks --bundle=livewire.aab --output=livewire.apks --mode=universal --ks=release.keystore --ks-key-alias=KEY_ALIAS

this return an apks with can be installed or rename to .zip to get apk
Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-react-native-app -t with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)
- [Request for Comments](https://github.com/expo/router/discussions/1)
