import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpProviderInterface} from '../core/interfaces/http-provider.interface';
import {Observable} from 'rxjs';

/**
 * Manter essa bagaça assim porque vai facilitar à fazer coisas genéricas no sistema,
 * Se precisar fazer qualquer alteração no httpProvider, não aq dentro...
 */

@Injectable()
export class HttpProvider<RawType> implements HttpProviderInterface<RawType> {
    private url: string;

    constructor(public httpClient: HttpClient) {
    }

    get<QueryParams, ReturnType>(url: string, params: {}): Observable<ReturnType> {
        return this.httpClient.get<ReturnType>(url, {
            observe: 'body',
            responseType: 'json',
            ...params
        })
    }

    post<BodyType, ReturnType>(url: string, body: BodyType, params: {}): Observable<ReturnType> {
        return this.httpClient.post<ReturnType>(url, body, params)
    }

    put<BodyType, ReturnType>(url: string, body: BodyType, params: {}): Observable<ReturnType> {
        return this.httpClient.put<ReturnType>(url, body, params)
    }

    remove<BodyType>(url: string, params: {}): Observable<void> {
        return this.httpClient.delete<void>(url, params)
    }
}
