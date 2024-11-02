import { Component } from '@angular/core';
import { RegisterService} from '../Services/register-service.service';
import { IRegister } from '../models/iregister';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  
  registerData: IRegister = {
    username: '',
    correo: '',
    contrasena: ''
  };

  constructor(private registerService: RegisterService) {}

  onRegister() {
    this.registerService.register(this.registerData).subscribe({
      next: (response) => console.log('Registro exitoso:', response),
      error: (error) => console.error('Error en el registro:', error)
    });
  }
}
