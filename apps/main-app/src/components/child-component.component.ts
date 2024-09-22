import { ChangeDetectionStrategy, Component, computed, effect, input, output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: true,
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponentComponent {

  // optional
  firstName = input<string>();
  age = input(0);
  // required
  lastName = input.required<string>();
  // age multiplied by two.
  ageMultiplied = computed(() => this.age() * 2);

  firstNameEffect = effect(() => {
    console.log('first name changed to: ', this.firstName());
  });

  firstNameOutput = output<string | undefined>();


  sendOutput() {
    this.firstNameOutput.emit(this.firstName());
  }
}
