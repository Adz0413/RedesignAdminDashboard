# Android Studio setup

The Android app uses Capacitor, so the React/Vite dashboard in `src/` remains
the single UI source for web, phone, tablet, and Android Studio builds.

## Requirements

- Android Studio with the Android SDK
- JDK 21
- Node.js and pnpm versions from `.mise.toml`

## Open the project

From the repository root:

```bash
pnpm install
pnpm android:sync
pnpm android:open
```

`android:sync` creates the latest production web bundle and copies it into the
native project. `android:open` opens the `android/` directory in Android Studio.

In Android Studio:

1. Allow Gradle sync to finish.
2. Select an emulator or connected Android device.
3. Run the `app` configuration.

## After changing React or CSS

Run:

```bash
pnpm android:sync
```

Then run the app again in Android Studio. Use `pnpm android:copy` when no native
plugin or Capacitor configuration changed.

## Project locations

- React application: `src/`
- Shared static assets: `public/assets/`
- Capacitor settings: `capacitor.config.ts`
- Native Android project: `android/`

The interface automatically switches between a desktop sidebar and mobile
bottom navigation. It also accounts for Android display cutouts and gesture
navigation using CSS safe-area insets.
