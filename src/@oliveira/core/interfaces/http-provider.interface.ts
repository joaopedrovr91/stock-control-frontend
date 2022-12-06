import {Observable} from 'rxjs';

export interface HttpProviderInterface<RawType> {

    /**
     * Manter essa bagaça assim porque vai facilitar à fazer coisas genéricas no sistema,
     * Se precisar fazer qualquer alteração no httpProvider, não aq dentro...
     */

    get<QueryParams, ReturnType>(url: string, queryParams: QueryParams, params: {}): Observable<ReturnType>
    post<BodyType, ReturnType>(url: string, body: BodyType, params: {}): Observable<ReturnType>
    remove<BodyType>(url: string, params: {}): Observable<void>
    put<BodyType, ReturnType>(url: string, body: BodyType, params: {}): Observable<ReturnType>
}
