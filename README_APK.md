# 📱 Сборка APK для Android

Проект настроен для создания мобильного приложения на Android с помощью Capacitor.

## 🚀 Быстрый старт

### Шаг 1: Подготовка проекта

1. **Скачайте проект из GitHub:**
   - В редакторе poehali.dev нажмите "Скачать → Подключить GitHub"
   - Склонируйте репозиторий на свой компьютр

2. **Установите зависимости:**
   ```bash
   npm install
   # или
   bun install
   ```

### Шаг 2: Создание Android проекта

```bash
# Инициализировать Android платформу
npx cap add android
```

### Шаг 3: Сборка приложения

```bash
# Собрать веб-версию и синхронизировать с Android
npm run build
npx cap sync android
```

### Шаг 4: Открыть проект в Android Studio

```bash
npx cap open android
```

В Android Studio:
1. Дождитесь завершения Gradle Sync
2. Выберите **Build → Build Bundle(s) / APK(s) → Build APK(s)**
3. Готовый APK будет в: `android/app/build/outputs/apk/debug/app-debug.apk`

## 📦 Что уже настроено

✅ **Capacitor конфигурация** (`capacitor.config.ts`)
- App ID: `dev.poehali.pdd`
- App Name: "ПДД для школьников"
- Android scheme: https

✅ **PWA манифест** (`public/manifest.json`)
- Иконки приложения
- Тема и цвета
- Режим standalone

✅ **Метаданные** в `index.html`
- Viewport для мобильных
- Theme color
- Название и описание

## 🎨 Создание иконок приложения

Создайте иконки размером 192x192 и 512x512 пикселей:

```bash
# Сохраните их как:
public/icon-192.png
public/icon-512.png
```

Можно использовать онлайн-генераторы:
- https://icon.kitchen/
- https://www.pwabuilder.com/imageGenerator

## 🔧 Полезные команды

```bash
# Сборка и синхронизация
npm run build && npx cap sync android

# Запуск на эмуляторе/устройстве
npx cap run android

# Копирование веб-файлов в Android проект
npx cap copy android

# Обновление Capacitor
npm install @capacitor/core@latest @capacitor/cli@latest @capacitor/android@latest
npx cap sync
```

## 📱 Требования

- **Node.js** 16 или выше
- **Android Studio** (для сборки APK)
- **Java JDK** 17 (устанавливается с Android Studio)

### Установка Android Studio

1. Скачайте с https://developer.android.com/studio
2. Установите Android SDK (API Level 33+)
3. Настройте переменные окружения:
   - `ANDROID_HOME` → путь к Android SDK
   - `JAVA_HOME` → путь к JDK

## 🐛 Решение проблем

**Ошибка: "Android SDK not found"**
```bash
# Укажите путь к SDK в файле local.properties
echo "sdk.dir=/путь/к/Android/SDK" > android/local.properties
```

**Ошибка при Gradle Sync**
```bash
# Очистите кеш Gradle
cd android
./gradlew clean
```

**APK не устанавливается на телефон**
- Включите "Установка из неизвестных источников" в настройках Android
- Проверьте, что телефон в режиме разработчика

## 🎓 Дополнительно

- [Документация Capacitor](https://capacitorjs.com/docs)
- [Руководство по Android](https://capacitorjs.com/docs/android)
- [Публикация в Google Play](https://capacitorjs.com/docs/android/deploying-to-google-play)

## ✨ Production сборка

Для публикации в Google Play создайте подписанный APK:

1. Создайте keystore:
   ```bash
   keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
   ```

2. Добавьте в `android/app/build.gradle`:
   ```gradle
   android {
       signingConfigs {
           release {
               storeFile file("my-release-key.keystore")
               storePassword "password"
               keyAlias "my-key-alias"
               keyPassword "password"
           }
       }
       buildTypes {
           release {
               signingConfig signingConfigs.release
           }
       }
   }
   ```

3. Соберите release APK:
   ```bash
   cd android
   ./gradlew assembleRelease
   ```

Готовый APK: `android/app/build/outputs/apk/release/app-release.apk`
