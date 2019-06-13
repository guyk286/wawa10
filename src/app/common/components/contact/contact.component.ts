import { MessageService } from '../../message/message.service';
import { MessageModel } from '../../model/message.model';
import { ContactService } from './service/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&�*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ContactService ]
})
export class ContactComponent implements OnInit {

  loading =false;
  done =false;
  message: string;
    
    /*
    fcObjet: FormControl;
    fcEMail: FormControl;
    fcMessage: FormControl;
  */
    
  messageForm: FormGroup;
  
  contactForm: FormGroup;
  
  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder, 
    private messageService: MessageService
  ) { }

  ngOnInit() 
  {
    this.contactForm = this.formBuilder.group({
            contactFormName: ['', Validators.required],
            contactFormEmail: ['', [Validators.required, Validators.email]],
            contactFormSubject: ['', Validators.required],
            contactFormMessage: ['', Validators.required]
        });
  }
  
  onSendMessage()
    {

      this.loading=true;
         const jsondata: string=this.contactForm.value;
        this.contactService.sendMessage2( jsondata )
            .subscribe( res=>
                    {
                        const m: MessageModel=res;
                        const message=m['content'];
                        const code=m['code'];
                        if(code==='200')
                        {
                          this.done=true;
                          this.messageService.emitMessage('success', 'Message envoyé !');
                        }
                        else if(code === '401')
                        {
                          this.messageService.emitMessage('danger', 'Error:  '+message);
                        }
                        else if(code === '402')
                        {
                          this.messageService.emitMessage('danger', 'Error:  '+message);
                        }
                    },
                err=>console.error(err),
                ()=>this.loading=false
               );
    }
  
  onSubmit() 
  {
    // console.log(this.loginForm);
    /*
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
    */
  }
  

}
