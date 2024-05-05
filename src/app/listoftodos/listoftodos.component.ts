import { Component, input } from '@angular/core';

@Component({
  selector: 'app-listoftodos',
  templateUrl: './listoftodos.component.html',
  styleUrl: './listoftodos.component.css'
})
export class ListoftodosComponent {

    todo:string = "";
    listoftodos: string[] = [];
    itemtodo:string = '';

    additemtolistoftodos(){
        this.listoftodos.push(this.todo);
    }
}
