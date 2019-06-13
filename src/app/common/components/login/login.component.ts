// import { MessageService } from '../../message/message.service';
// import { MessageModel } from '../../model/message.model';
import { UserItf } from '../../model/user.model';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  actForm: FormGroup;
  
  
  message: string=null;
  
  constructor( 
      private authService: AuthService,
      private _formBuilder: FormBuilder,
      private router: Router,
      // private messageService: MessageService
     ) { }

    static emailMatch(form: FormGroup)
    {
        const email=form.get('f3Email').value;
        const emailcopy=form.get('f3EmailCopy').value;
        return email!==emailcopy ? { matchingError: true} : null;
    }
  
  ngOnInit() 
  {
    // this.messageService.resetMessage();
    // this.prepareActForm();
    this.loginForm = new FormGroup({
      username: new FormControl('', {
        validators: [Validators.required]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

  onSubmit() 
  {
    // console.log(this.loginForm);
    this.authService.login(
      this.loginForm.value.username,
      this.loginForm.value.password
    )
    .subscribe( res => {
              console.log('login ok'+JSON.stringify(res) );
              this.postLogin(res);
            }
      ,
      err =>{
          console.error('login fails'+JSON.stringify(err) );
          const error=err.error;
          const status=err.status;
          /*
          if(status===409)
          {
              this.message='Account still not activated !';
          }
          else
          {
              this.message='Invalid user or password';
          }
          */
            
        }
    );
    
  }
  
   postLogin( user: UserItf)
    {
       this.router.navigate(['/']);
       /*
        if( user.userInfos )
        {
             this.messageService.emitMessage('success', 'Hello '+user.userInfos.prenom+' '+user.userInfos.nom+' ('+user.username+') ');
        }
       */
    }
  
    onResendPassword()
    {
        const username: string=this.loginForm.value.username;
        this.authService.resentPassword( username )
          .subscribe(
              res => {
                console.log('Password resent - message:'+JSON.stringify(res));
                // this.messageService.emitMessage('success', 'Vos informations utilisateur ont été envoyées');
              },
              err => 
              { 
                console.error( JSON.stringify(err));
                const status=err.status;
                /*
                  if( status===400)
                  {
                      const error=err.error;
                      const message=error.message;
                      const errMessage=error.error;
                      // const body=err['_body'];
                      console.log('Error :'+message);
                      // const mm=JSON.parse(body);
                      // this.message.setMessage(mm.message, this.message.messageEnum.ERROR);
                      this.messageService.emitMessage('danger', 'Technical error ! - '+errMessage); 
                  }
                  else
                  {
                    this.messageService.emitMessage('danger', 'Technical error !');  
                  }
                  */
              }
          );
    }
  

  
    isUsernameFieldEmpty()
    {
        const username: string=this.loginForm.value.username;
        // console.log('username:'+username);
        if(username===undefined || username==null || username.length===0)
        {
          return true;
        }
        return false;
    }
  

  
}
