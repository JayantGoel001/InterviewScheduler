import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from "@angular/material/chips";
import { HttpModule } from '@angular/http';
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
	declarations: [
		AppComponent,
		CardComponent,
		HomeComponent,
		ScheduleComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatChipsModule,
		HttpModule,
		HttpClientModule,
		MatSnackBarModule,
		MatFormFieldModule,
		MatNativeDateModule,
		MatInputModule,
		MatDatepickerModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
