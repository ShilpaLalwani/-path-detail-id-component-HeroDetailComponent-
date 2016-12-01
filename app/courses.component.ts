import { Component} from 'angular2/core';


import { CoursesService } from './Courses.service';
import { AutoGrowDirective } from './Auto-grow-directive'
@Component({
	selector : 'courses',
	template : `{{title}}
				<h2>courses</h2>
				<ul>
				<li *ngFor="#course of courses">
					{{course}}
				</li>
				</ul>`
	providers : [CoursesService]
	Directives : [AutoGrowDirective]	,

})

export class CoursesComponent{
	title="Course title";
	courses;
	constructor(private coursesService : CoursesService){
		this.courses=coursesService.getCourse();
	}
	

}