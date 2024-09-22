import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChildComponentComponent } from '../components/child-component.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, AsyncPipe, JsonPipe, ChildComponentComponent, ReactiveFormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'main-app';
  firstNameControl = new FormControl('chuck', { nonNullable: true });


  firstNameOutput(firstName: string | undefined) {
    console.log('Output first name is ',  firstName);
  }
}
