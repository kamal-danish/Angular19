import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
x=signal(10)
y=signal(20)
z=computed(()=>this.x() + this.y())

constructor(){
  effect(()=>{
    if(this.z() === 120)
    console.log('hello')
  })
}
show(){
  console.log(this.z());
  this.x.set((100))
  console.log(this.z());
}
updateX(){
  this.x.update(value=>value+10)
}
}
