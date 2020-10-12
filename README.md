# Проекты 4-12: Место

## Директории

`/public` — статика, полученная в результате билда фронтенд-приложения на Реакте  
`/data` — JSON-файлы для временной эмуляции работы с базой данных  
`/routes` — папка с файлами роутера

Остальные директории вспомогательные, создаются при необходимости разработчиком

## Запуск проекта

`npm run start` — запускает сервер  
`npm run dev` — запускает сервер с hot-reload

**Общее**

В проекте реализован одностраничный сайт с попапами и адаптивными
карточками для размещения фотографий с подписями. Заполнение формы
в попапе изменяет информацию на основной странице. Можно сменить аватар профиля.
Карточки можно добавить, удалить и поставить им лайк. Данные отправляются на сервер,
другие пользователи также могут поставить лайк.
При нажатии на изображение всплывает попап с увеличенной картинкой и ее подписью.
Реализована валидация форм. Попап можно закрыть при клике на overlay или Esc.

Использовались css, html, javascript, jsx, react, webpack, babel, express, node.

Выполнен бэкенд на express.
Выполнен рефакторинг на React.
Использованы реакт-хуки.
Настроена сборка проекта с помощью Webpack.
Настроено взаимодействие с сервером (отправка и получение данных).

**Figma**

-   [Ссылка на макет в Figma 4](https://www.figma.com/file/StZjf8HnoeLdiXS7dYrLAh/JavaScript.-Sprint-4)

-   [Ссылка на макет в Figma 5](https://www.figma.com/file/nlYpT4VhFiwimn2YlncrcF/JavaScript.-Sprint-5?node-id=0%3A1)

-   [Ссылка на макет в Figma 6](https://www.figma.com/file/XNaGNEZD5NEjeyJzAT4gMb/JavaScript.-Sprint-6?node-id=0%3A1)

-   [Ссылка на макет в Figma 9](https://www.figma.com/file/hhhIavVTeuilfPPZ6sbifl/JavaScript.-Sprint-9?node-id=0%3A1)

<!-- **Ссылка на GitPages**

[Ссылка на сайт в GitPages](https://dianadomino24.github.io/mesto/index.html) -->

**Технологии**

Освоены:

-   создание сервера на Express, middlewares, отдача статичных файлов,
-   рефакторинг кода с использованием React,
    реакт-хуки (useEffect, useState,
    useRef, createContext),
    конвертация html в jsx,
-   настройка взаимодействия с сервером (GET, PUT, DELETE, PATCH, POST методы),
-   использование асинхронных ф-ций и промисов,
-   рефакторинг кода с использованием классов из ООП,
    деструктуризация и слабое связывание классов,
-   сборка проекта с помощью Webpack(минификация, транспиляция, автопрефиксер),
-   методы валидации форм, вывод стандартных браузерных текстов ошибок в кастомных стилях,
    измерение состояния кнопки submit в зависимости от валидности формы,
-   методы работы с формами в javascript, изменение классов,
    условные конструкции, метод addEventListener,
-   методы добавления разметки через template.content.cloneNode,
-   использование модулей
-   применение свойств target у event,
-   метод forEach,
-   отзывчивая (responsive), адаптивная (adaptive) и
    резиновая (liquid/fluid) верстки,
-   flex- и grid- верстка,
-   Nested файловая структура по БЭМ.

**В перспективе**

В перспективе необходимо доработать сайт:

-   реализовать проверку валидности, используя регулярные выражения
-   реализовать редактирование текущих карточек
-   перетаскивание карточек мышью
-   копирование карточек.
