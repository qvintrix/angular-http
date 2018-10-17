import { HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import * as env from '../environments/environment';

export class HttpInterceptorService implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler) {
		const headers = new HttpHeaders();

		const newHeaders = headers
			.append('testHeader', 'my-new-auth-token')
			.append('testHead1111er', 'my-new-auth-t1oken');

		const customHeaders = newHeaders.set('Token', 'm112390123812074812');

		const modifiedReq = req.clone({
			url: this.modifyUrl(req.url),
			headers: customHeaders
		});

		console.log(newHeaders);
		console.log(modifiedReq);
		return next.handle(modifiedReq);
	}

	private modifyUrl(url: string): string {
		return `${env.environment.apiUrl}${url}`;
	}
}
