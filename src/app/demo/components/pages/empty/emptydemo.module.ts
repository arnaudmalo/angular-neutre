import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyDemoRoutingModule } from './emptydemo-routing.module';
import { EmptyDemoComponent } from './emptydemo.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
	imports: [
		CommonModule,
		EmptyDemoRoutingModule,
		MenubarModule
	],
	declarations: [EmptyDemoComponent]
})
export class EmptyDemoModule { }
