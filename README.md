# SAVAM GROUP

Сайт студии дизайна и разработки сайтов.

## Запуск

```bash
npm install
npm run dev
```

Открыть: http://localhost:3000 (или адрес, который выведет Next.js).

## Сборка

```bash
npx eslint .
npm run build
npx tsc --noEmit
npm run start
```

## Где менять контент

- `public/brand/` — логотип
- `public/projects/` — изображения работ
- `src/config/site.ts` — название и контакты
- `src/app/page.tsx` — главная страница
- `src/app/layout.tsx` — язык и метаданные
- `src/app/globals.css` — общие стили
