import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  ipAddress = '';
  formClient!: FormGroup;
  showForm: boolean = true;

  constructor(private fb: FormBuilder, private http: HttpClient, private clientService: ClientService) {
    this.newFormClient();
  }

  newFormClient() {
    this.formClient = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("^[a-zA-Z\u00F1\u00D1\u00E0-\u00FC]*$"),Validators.pattern(/[^\u0023\u201C\u002C\u002A\u002B\u00BF\u00A1\u003F]/)]],
      nit: ['', [Validators.required, Validators.pattern(/[^\u0023\u201C\u002C\u002A\u002B\u00BF\u00A1\u003F]/)]],
      name_location: ['', [Validators.pattern(/[^\u0023\u201C\u002C\u002A\u002B\u00BF\u00A1\u003F]/)]],
      name_team: ['', [Validators.pattern(/[^\u0023\u201C\u002C\u002A\u002B\u00BF\u00A1\u003F]/)]],
      city: ['',[Validators.required]],
      promoter: ['', [Validators.pattern(/[^\u0023\u201C\u002C\u002A\u002B\u00BF\u00A1\u003F]/)]],
      rtc: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      cap_user: ['', [Validators.pattern(/[^\u0023\u201C\u002C\u002A\u002B\u00BF\u00A1\u003F]/), Validators.pattern("^[a-zá-ú]+$")]],
      ip: '',
      cb: [false, Validators.requiredTrue]
    })
  }

  ngOnInit(): void {
    this.http.get<{ ip: string; }>('https://jsonip.com')
      .subscribe(data => {
        this.ipAddress = data.ip;
      })
  }

  save() {
    this.formClient.patchValue({
      ip: this.ipAddress
    });

    let saveForm = {
      name: this.formClient.get('name')?.value,
      nit: this.formClient.get('nit')?.value,
      name_location: this.formClient.get('name_location')?.value,
      name_team: this.formClient.get('name_team')?.value,
      city: this.formClient.get('city')?.value,
      promoter: this.formClient.get('promoter')?.value,
      rtc: this.formClient.get('rtc')?.value,
      cap_user: this.formClient.get('cap_user')?.value,
      ip: this.formClient.get('ip')?.value,
    }

    this.clientService.saveClient(saveForm)
      .subscribe(() => {
        console.log("cliente agregado exitosamente");
        this.showForm = !this.showForm;
      }, (error: any) => {
        console.log("error: ", error);
      })

//      this.clientService.get().subscribe( (data:any) => {
//      console.log("respuesta clientes: ", data);
//    }, (error: any) => {
//        console.log("error: ", error);
//      })
  }
}

