import {Component, NgModule} from '@angular/core'
import {WorkerAppModule} from '@angular/platform-webworker'

@Component({
	selector: 'demo-app',
	template: `
	  <h1>Hello {{name}}</h1>
	  <input type="text" (input)="name = $event.target.value" [value]="name">
	`
})
export class DemoApp {
	name = "World"
}

@NgModule({
	imports: [WorkerAppModule],
	declarations: [DemoApp],
	bootstrap: [DemoApp]
})
export class AppModule {}
