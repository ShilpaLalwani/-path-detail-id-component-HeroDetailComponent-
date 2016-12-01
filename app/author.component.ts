import { Component } from 'angular2/core';

import { AuthorService } from './author.service'

@Component({
	selector : 'author',
	template : `<h1>Author</h1>
				{{title}}
				<ul>
				<li *ngFor="author of authors">{{author}}</li>
				</ul>`,
	providers : [ AuthorService ]
})

export class AuthorComponent{
	title ="title for author";
	authors : string[];
	constructor(authorService : AuthorService){
		this.authors= authorService.getAuthor();
	}
}