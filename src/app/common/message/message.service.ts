import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessageService
{

  public messageEvents = new BehaviorSubject< {m_type: string, m_message: string}>(null);
  
  constructor() { }

  emitMessage(_type: string, _message: string)
  {
    this.messageEvents.next( {m_type: _type, m_message: _message} );
  }
  
  resetMessage()
  {
    this.messageEvents.next(null);
  }
}
