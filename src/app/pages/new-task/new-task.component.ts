import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Route } from '@angular/router';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  listId!: string;
  constructor(private taskService:TaskService,private route:ActivatedRoute,private router:Router){}

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      console.log(params)
      this.listId = params['listId']
      console.log(this.listId)
    })
  }

  createTask(title:string){
    this.taskService.createTask(title,this.listId).subscribe((newTask:any)=>{
      console.log(newTask)
      this.router.navigate(['../'], {relativeTo: this.route})
    })
  }
}
