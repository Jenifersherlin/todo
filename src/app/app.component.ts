import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO LIST';
  todo=[
    {
    label:'learn c++',
  done:false,
  priority:3
},
{
  label:'prep',
done:false,
priority:2
},
{
  label:'learn python',
done:true,
priority:1
},
{
  label:'aptitude',
done:false,
priority:4
},
{
  label:'mcq',
done:false,
priority:5
},
];
addtodo( newtodolabel )
{
  var newtodo = {
    label:newtodolabel,
    priority:1,
    done:false
  };
  this.todo.push(newtodo);
}
deletetodo(todo){
  this.todo=this.todo.filter(t=>t.label !== todo.label );
}
}
