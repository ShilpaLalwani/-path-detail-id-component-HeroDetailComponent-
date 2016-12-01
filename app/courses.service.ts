import [ Injectable ] from 'angular2/core';

Injectable()

export CoursesService {
	getCourses() : string[]{
		return ["course1","course2","course3"];
	}
}