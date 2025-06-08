class UserService {
  sayHi() {
    console.log('Hi from UserService');
  }
}

class Component {
  constructor(public userService: UserService) {
  }
}

// Simplified Angular DI
class Injector {
  private _container = new Map();

  constructor(private _providers: any[]) {
    this._providers.forEach(service => this._container.set(service, new service()));
  }

  get(service: any): any {
    const serviceInstance = this._container.get(service);
    if (!serviceInstance) {
      throw Error('No provider found');
    }
    return serviceInstance;
  }
}

// Somewhere in the application
// This happens automatically
const injector = new Injector([UserService]);
const component = new Component(injector.get(UserService));

// Then we can use our component with injected services
component.userService.sayHi();