# CountryLive

CountryLive is a React Native application that fetches news from [NewsAPI](https://newsapi.org/) and provides features such as search and categories. It uses `twrnc` for styling with Tailwind-like utilities.

https://github.com/user-attachments/assets/00a3fc0b-9ad2-4286-a435-132c7cd44710

## Features

- Fetches the latest news using [NewsAPI](https://newsapi.org/).
- Search functionality to find news articles by keywords.
- Category-based news browsing.
- Styled with `twrnc` for a seamless TailwindCSS-like experience.

## Prerequisites

- Node.js (>=18)
- npm
- Android Studio (for running on Android devices/emulators)
- Xcode (for running on iOS devices/simulators, macOS only)

## Installation

1. Fork and Clone the repository:

   ```bash
   git clone <repository-url>
   cd CountryLive
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install pods for iOS (macOS only):

   ```bash
   cd ios
   pod install
   cd ..
   ```

## Running the App

### Android

1. Build the app:

   ```bash
   npx react-native run-android
   ```

2. Start the Metro bundler:

   ```bash
   npx react-native start
   ```

   > **Note:** Ensure an Android emulator is running or a physical Android device is connected.

### iOS (macOS only)

1. Start the Metro bundler:

   ```bash
   npx react-native start
   ```

2. In a new terminal, run:

   ```bash
   npx react-native run-ios
   ```

   > **Note:** Ensure an iOS simulator is running or a physical iOS device is connected.

## Troubleshooting

If you encounter issues, run the following command to diagnose:

```bash
npx react-native doctor
```

This will highlight any missing dependencies or configuration issues. Fix the reported issues and try running the app again.

## Project Structure

- `src/components`: Reusable UI components.
- `src/`: Pages.

## Styling

This app uses `twrnc` for styling, which provides TailwindCSS-like utilities in React Native. For more details, visit the [twrnc documentation](https://github.com/jaredh159/tailwind-react-native-classnames).

## Dependencies

- `react-native`: ^0.76.6
- `react`: ^18.3.1
- `@react-navigation/native`: ^7.0.14
- `nativewind`: ^4.1.23
- `twrnc`: ^4.6.0
- `react-native-heroicons`: ^4.0.0
- `react-native-animatable`: ^1.4.0

## Dev Dependencies

- `@babel/core`: ^7.26.0
- `@react-native-community/cli`: latest
- `eslint`: ^8.19.0
- `jest`: ^29.6.3
- `typescript`: 5.0.4

