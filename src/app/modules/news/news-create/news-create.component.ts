import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewsType } from '../types/news-status.enum';
import { KvpModel } from '../../../common/model/kvp.model';
import { AppUtils } from '../../../common/utils/AppUtils';
import { AuthService } from '../../auth/services/auth.service';
import { AuthenticatedUserModel } from '../../auth/model/authenticated-user.model';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.scss']
})
export class NewsCreateComponent implements OnInit {

  loc=location.protocol+'//'+location.host;
  imageUrl=this.loc+'/assets/news/no-image.jpg';

  newsForm: FormGroup;

  newsStatuses=NewsType;
  
  user: AuthenticatedUserModel=null;

  newsStatus: Array<KvpModel>=AppUtils.stringEnumToKeyValue(NewsType);
  
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder, 
  ) { }

  ngOnInit(): void
  {
    this.user=this.authService.getCurrentUser();
    this.newsForm = this.formBuilder.group({
      nom: ['', Validators.required],
      presentation: ['', Validators.required],
      externalLink: [''],
      showOrder: ['', Validators.required],
      avatar: [null]
    });
  }

  showPreview(event)
  {
    const file = (event.target as HTMLInputElement).files[0];
    this.newsForm.patchValue({
      avatar: file
    });
    this.newsForm.get('avatar').updateValueAndValidity();

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  getUserFullName(): string
  {
    let userFullName='';
    if(this.user!==null)
    {
      userFullName=this.user.getFullName();
    }
    return userFullName;
  }
}
