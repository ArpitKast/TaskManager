import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService:WebRequestService) { }

  createList(title: string) {
    // We want to send a web request to create a list
    return this.webReqService.post('lists',{title});
  }
  createTask(title: string, listId:string) {
    // We want to send a web request to create a task
    return this.webReqService.post(`lists/${listId}/tasks`,{title});
  }
  getLists(){
    return this.webReqService.get('lists')
  }

  getTasks(listId:any){
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  complete(task:any){
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`,{
      completed:!task.completed
    })
  }
}
