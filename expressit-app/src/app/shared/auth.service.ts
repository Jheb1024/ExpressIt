import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router:Router) { }
  //login Method
  login(email: string, password: string){
    this.fireAuth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','true');
      this.router.navigate(['/usuario/blog/home']);
    }, err=>{
        alert('Algo salió mal');
        this.router.navigate(['/inicio-sesion']);
    })
  }

  //RegisterMethod
  register(email: string, password: string){
      this.fireAuth.createUserWithEmailAndPassword(email,password).then(()=>{
        this.router.navigate(['/inicio-sesion']);
      },err=>{
          alert('err.message');
          this.router.navigate(['/register']);
      })
  }

  logout(){
    this.fireAuth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    },err=>{
      alert(err.message);
    })
  }
}
