# 🚀 Деплой на Vercel

## Подготовка Google Maps API

### 1. Получение API ключа
1. Перейдите на [Google Cloud Console](https://console.cloud.google.com/)
2. Создайте новый проект или выберите существующий
3. Включите **Maps JavaScript API**:
   - APIs & Services → Library → Maps JavaScript API → Enable
4. Создайте API ключ:
   - APIs & Services → Credentials → Create Credentials → API Key
5. Ограничьте ключ для безопасности:
   - Выберите созданный ключ
   - Application restrictions → HTTP referrers
   - Добавьте домены:
     ```
     https://your-app-name.vercel.app/*
     https://vercel.app/*
     ```

### 2. Настройка переменных окружения

#### В Vercel Dashboard:
1. Перейдите в настройки проекта
2. Settings → Environment Variables
3. Добавьте переменную:
   ```
   Name: REACT_APP_GOOGLE_MAPS_API_KEY
   Value: YOUR_ACTUAL_API_KEY_HERE
   Environment: Production, Preview, Development
   ```

#### Локально для тестирования:
Создайте файл `.env.local`:
```
REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_ACTUAL_API_KEY_HERE
```

## Деплой

### Вариант 1: Через GitHub (рекомендуется)
1. Загрузите код в GitHub
2. Подключитесь к Vercel через GitHub
3. Выберите репозиторий
4. Настройте переменные окружения
5. Деплой автоматически запустится

### Вариант 2: Через Vercel CLI
```bash
# Установка CLI
npm i -g vercel

# Логин
vercel login

# Деплой
vercel

# Для продакшена
vercel --prod
```

## Проверка деплоя

1. Откройте деплой URL
2. Проверьте, что карта загружается
3. Проверьте, что маркеры отображаются
4. Проверьте, что кластеризация работает
5. Проверьте, что BottomSheet открывается при клике на маркер

## Устранение проблем

### Карта не загружается
- Проверьте API ключ в переменных окружения
- Убедитесь, что Maps JavaScript API включен
- Проверьте ограничения доменов в Google Cloud Console

### Маркеры не отображаются
- Проверьте консоль браузера на ошибки
- Убедитесь, что изображения загружаются
- Проверьте координаты в mockPlaces.js

### Ошибки сборки
- Проверьте, что все зависимости установлены
- Убедитесь, что нет TypeScript ошибок
- Проверьте логи сборки в Vercel
