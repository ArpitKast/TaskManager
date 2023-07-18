import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit{
  lists:any;
  tasks:any;
  listId: any;
  constructor(private taskService : TaskService, private route: ActivatedRoute){}
  
  ngOnInit() {
    this.route.params.subscribe((params)=>{
      console.log(params)
      this.listId = params['listId']
      if(params['listId']){
        this.taskService.getTasks(params['listId']).subscribe((res)=>{
          console.log(res)
          this.tasks = res
        })
      }
    })
    this.getLists()
  }

  getLists(){
    this.taskService.getLists().subscribe((res)=>{
      console.log(res)
      this.lists = res
    })
  }

  onTaskClick(task:any){
    // we want to set the task to completed
    this.taskService.complete(task).subscribe((res)=>{
      console.log(res)
      task.completed = !task.completed;
    })
  }
}
