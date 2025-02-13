# Standalone components and optional modules

Чтобы объявить компонент как standalone, нужно в его декораторе прописать `standalone: true`:

``` typescript
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ngSandbox';
}
```

С этого самого момента такой компонент не может быть объявлен в `declarations` какого-либо модуля, как это обычно
делается с **не standalone** компонентами. Теперь такой компонент может существовать вообще без своего модуля, как
правило, именно так и происходит.

Если мы всё-таки хотим объявить такой компонент в каком-то определённом модуле, то будем объявлять компонент не в
`declarations`, а в `imports`, хотя ранее при использовании только не standalone компонентов, мы этого делать не могли.

Standalone компоненты позволяют создавать Angular-приложения без модулей вообще (включая `app.module.ts`). Вместо этого
для подключения зависимостей используется более низкоуровневый подход на этапе бутстрапа.

В таком случае возникает вопрос - как быть с бутстрапом приложения и с роутингом? Ведь раньше это делалось при помощи
корневого модуля (чаще всего `AppModule`). Теперь это делается через файл `main.ts`. Пример:

``` typescript
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
```

При этом переменную `appConfig` принято хранить в папке `app` в файле `app.config.ts`:

``` typescript
export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes)
    ]
};
```

Таким образом в `bootstrapApplication` можно подключать глобальные модули и провайдеры напрямую, используя
`importProvidersFrom`. Пример подключения `HttpClientModule` и самого роутера:

``` typescript
bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(HttpClientModule, RouterModule.forRoot(routes))]
});
```

Из приведённого кода видно, как происходит инициализация приложения и регистрация путей для роутинга.

## Дополнительные моменты

- Standalone компоненты появились в **Angular 14**.
- Использование standalone компонента не требует перевода всего проекта на этот подход. Angular позволяет смешивать
  standalone и старые модульные компоненты.
- То же самое касается и standalone директив и пайпов.
