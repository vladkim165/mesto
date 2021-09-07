# Проект: Место  
## Описание проекта  
Место - интерактивная страница, где вы можете менять имя, биографию и аватарку, добавлять и удалять карточки, а также лайкать их. 
Проект написан на ООП
## Технологии проекта  
Проект написан по методологии БЭМ, файловая структура имеет БЭМ архитектуру Nested; 
Стэк: - html, css, javascript, git, npm(Webpack, babel);
Использовались глобальные стили: normalize.css; 
Страница адаптивная, версталась под несколько разрешений: 320px и 1280px. Также добавлялись брейкпонты, чтобы страница не развалилась на разных разрешениях;   
Позиционировались элементы с помощью flex-боксов и гридов;  
Добавлена логика на JS(открытие и закрытие формы, сабмит и изменение данных о человеке на странице, изменение аватара профиля, лайки карточек, добавление и удаление карточек);
Все данные сохраняются, проект связан с REST API(к которому обращаются ещё несколько пользователей), используются fetch-запросы.
## Инструкция по использованию проекта и системные требования  
Необходимая версия языка: ru, т.к. страница написана на русском;    
Использумые языки: html, css, javascript;  
Используемые шрифты: Inter, Arial, sans-serif;    
## Разработка локально (Быстрый старт).
Если вы хотите запустить проект локально:  
1. Клонируйте репозиторий себе на устройство  
2. Установите npm-зависимости  
3. Используйте команду npm run dev  
4. Если все прошло успешно, проект открется на: http://localhost:8000  

Теперь вы можете вносить изменения в проект и видеть их результат в режиме реального времени.  

## Ссылка на проект  
https://vladkim165.github.io/mesto/
