import {HttpClient} from 'aurelia-fetch-client';

export class App {
  constructor() {
    this.heading = 'Todos';
    this.todos = [];
    this.todoDescription = '';
    let httpClient = new HttpClient();
    httpClient.fetch('https://backendcrud-production.up.railway.app/user/')
      .then(response => console.log(response.json()))
  }

  

  addTodo() {
    if (this.todoDescription) {
      this.todos.push({
        description: this.todoDescription,
        done: false
      });
      this.todoDescription = '';
    }
  }

  removeTodo(todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
