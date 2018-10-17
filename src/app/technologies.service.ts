import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

// import { Technology } from './technology.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TechnologiesService {
	constructor(
		private http: HttpClient
	) { }

	saveData(): Observable<{}> {
		// const headers = new HttpHeaders().set('Authorization', 'my-new-auth-token');
		const params = new HttpParams().set('test', 'test');
		// const url = 'http://localhost:3000/api/recipes';
		// const data = {
		// 	'title': 'test',
		// 	'description': 'sadasdasdsad',
		// 	'photoUrl': '',
		// 	'instructions': 'sadsadmnas,nv,dsas',
		// 	'categoryId': 'sadjasndjwqnejlqwne',
		// 	'ingredients': [
		// 		'string'
		// 	]
		// };
		// return this.http.post(
		// 	url,
		// 	data,
		// 	{
		// 		params
		// 	}
		// );



		const data = {
			'title': 'test',
			'description': 'sadasdasdsad',
			'photoUrl': '',
			'instructions': 'sadsadmnas,nv,dsas',
			'categoryId': 'sadjasndjwqnejlqwne',
			'ingredients': [
				'string'
			]
		};

		const request = new HttpRequest(
			'POST',
			'recipes',
			data,
			{
				reportProgress: true,
				params
			});
		return this.http.request(request);
	}

	getData() {
		return this.http.get(
			'recipes'
		)
			.pipe(
				map(
					(data) => {
						// console.log(data);
						return data;
					}
				)
			);
	}
}
