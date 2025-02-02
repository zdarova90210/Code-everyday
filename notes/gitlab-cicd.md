# Шпаргалка по основам деплоя CI/CD в GitLab

GitLab предоставляет встроенный инструмент для настройки CI/CD через `.gitlab-ci.yml`. Вот основные шаги и примеры для
настройки CI/CD пайплайна:

---

## 1. **Создание файла `.gitlab-ci.yml`**

Файл `.gitlab-ci.yml` находится в корне репозитория и определяет стадии, задачи, окружения для CI/CD.

```yaml
stages:
   - build
   - test
   - deploy
```

---

## 2. **Пример простого пайплайна**

```yaml
stages:
   - build
   - test
   - deploy

build-job:
   stage: build
   script:
      - echo "Building the application..."
      - npm install

test-job:
   stage: test
   script:
      - echo "Running tests..."
      - npm test

deploy-job:
   stage: deploy
   script:
      - echo "Deploying the application..."
      - npm run deploy
   only:
      - main
```

---

## 3. **Основные элементы настроек**

- **stages** – Определяет последовательность выполнения задач.
- **jobs** – Конкретные задачи на каждом этапе.
- **script** – Команды, которые будут выполнены внутри задачи.
- **only/except** – Фильтры запуска (например, `only: - main` запускает задачи только на ветке `main`).
- **artifacts** – Хранение артефактов между этапами (например, сборка файлов или отчетов).

---

## 4. **Переменные окружения**

Переменные можно определить как глобально, так и на уровне задач. Они часто используются для хранения секретов.

```yaml
variables:
   NODE_ENV: production

deploy-job:
   stage: deploy
   script:
      - echo "Deploying to $NODE_ENV..."
```

Секретные переменные задаются через **Settings > CI/CD > Variables**.

---

## 5. **Динамические окружения**

Для создания динамических окружений (например, отдельное окружение для каждой ветки):

```yaml
deploy:
   stage: deploy
   script:
      - echo "Deploying $CI_ENVIRONMENT_NAME..."
   environment:
      name: review/$CI_COMMIT_REF_NAME
      url: http://$CI_ENVIRONMENT_NAME.example.com
```

---

## 6. **Кэширование и артефакты**

Кэш помогает ускорить сборку (например, для зависимостей):

```yaml
cache:
   paths:
      - node_modules/
```

Артефакты сохраняют данные для последующих этапов:

```yaml
artifacts:
   paths:
      - build/
```

---

## 7. **Пример деплоя на сервер через SSH**

Для деплоя через SSH потребуется приватный ключ на сервере:

```yaml
deploy-job:
  stage: deploy
  before_script:
    - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client -y )'
    - eval $(ssh-agent -s)
    - ssh-add <(echo "$SSH_PRIVATE_KEY")
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
    - ssh-keyscan your-server.com >> ~/.ssh/known_hosts
  script:
    - scp -r ./build user@your-server.com:/path/to/deploy
    - ssh user@your-server.com "pm2 restart app"
  only:
    - main
```

Секретный ключ необходимо добавить в CI/CD Variables (`SSH_PRIVATE_KEY`).

---

## 8. **Мониторинг и отладка**

- Для отладки пайплайнов можно использовать pipeline logs.
- Запускайте pipeline вручную или на конкретной ветке для тестирования.
- Все этапы и статусы пайплайна видны в разделе "CI/CD > Pipelines".

---