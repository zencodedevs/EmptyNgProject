/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.9.4.0 (NJsonSchema v10.3.1.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export interface ICityClient {
    readCity(): Observable<CityDto>;
    getCities(): Observable<CityDto[]>;
    createCity(command: CreateCityCommand): Observable<number>;
    updateCity(command: UpdateCityCommand): Observable<number>;
    deleteCity(id: number | undefined): Observable<number>;
}

@Injectable({
    providedIn: 'root'
})
export class CityClient implements ICityClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    readCity(): Observable<CityDto> {
        let url_ = this.baseUrl + "/api/v1/City/ReadCity";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processReadCity(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processReadCity(<any>response_);
                } catch (e) {
                    return <Observable<CityDto>><any>_observableThrow(e);
                }
            } else
                return <Observable<CityDto>><any>_observableThrow(response_);
        }));
    }

    protected processReadCity(response: HttpResponseBase): Observable<CityDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = CityDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<CityDto>(<any>null);
    }

    getCities(): Observable<CityDto[]> {
        let url_ = this.baseUrl + "/api/v1/City/GetCities";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetCities(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetCities(<any>response_);
                } catch (e) {
                    return <Observable<CityDto[]>><any>_observableThrow(e);
                }
            } else
                return <Observable<CityDto[]>><any>_observableThrow(response_);
        }));
    }

    protected processGetCities(response: HttpResponseBase): Observable<CityDto[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CityDto.fromJS(item));
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<CityDto[]>(<any>null);
    }

    createCity(command: CreateCityCommand): Observable<number> {
        let url_ = this.baseUrl + "/api/v1/City/CreateCity";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreateCity(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreateCity(<any>response_);
                } catch (e) {
                    return <Observable<number>><any>_observableThrow(e);
                }
            } else
                return <Observable<number>><any>_observableThrow(response_);
        }));
    }

    protected processCreateCity(response: HttpResponseBase): Observable<number> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<number>(<any>null);
    }

    updateCity(command: UpdateCityCommand): Observable<number> {
        let url_ = this.baseUrl + "/api/v1/City/UpdateCity";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processUpdateCity(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUpdateCity(<any>response_);
                } catch (e) {
                    return <Observable<number>><any>_observableThrow(e);
                }
            } else
                return <Observable<number>><any>_observableThrow(response_);
        }));
    }

    protected processUpdateCity(response: HttpResponseBase): Observable<number> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<number>(<any>null);
    }

    deleteCity(id: number | undefined): Observable<number> {
        let url_ = this.baseUrl + "/api/v1/City/DeleteCity?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDeleteCity(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDeleteCity(<any>response_);
                } catch (e) {
                    return <Observable<number>><any>_observableThrow(e);
                }
            } else
                return <Observable<number>><any>_observableThrow(response_);
        }));
    }

    protected processDeleteCity(response: HttpResponseBase): Observable<number> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<number>(<any>null);
    }
}

export interface IIpayClient {
    paymentCallback(order_id: string | null | undefined, payment_hash: string | null | undefined, ipay_payment_id: number | undefined, status: string | null | undefined, status_description: string | null | undefined, shop_order_id: string | null | undefined, payment_method: string | null | undefined, card_type: string | null | undefined, transaction_id: string | null | undefined, pan: string | null | undefined): Observable<FileResponse>;
    refundCallBack(order_id: string | null | undefined, payment_hash: string | null | undefined, ipay_payment_id: number | undefined, status: string | null | undefined, status_description: string | null | undefined, shop_order_id: string | null | undefined, payment_method: string | null | undefined, card_type: string | null | undefined, transaction_id: string | null | undefined, pan: string | null | undefined): Observable<FileResponse>;
}

@Injectable({
    providedIn: 'root'
})
export class IpayClient implements IIpayClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    paymentCallback(order_id: string | null | undefined, payment_hash: string | null | undefined, ipay_payment_id: number | undefined, status: string | null | undefined, status_description: string | null | undefined, shop_order_id: string | null | undefined, payment_method: string | null | undefined, card_type: string | null | undefined, transaction_id: string | null | undefined, pan: string | null | undefined): Observable<FileResponse> {
        let url_ = this.baseUrl + "/api/Ipay/PaymentCallback";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = new FormData();
        if (order_id !== null && order_id !== undefined)
            content_.append("order_id", order_id.toString());
        if (payment_hash !== null && payment_hash !== undefined)
            content_.append("payment_hash", payment_hash.toString());
        if (ipay_payment_id === null || ipay_payment_id === undefined)
            throw new Error("The parameter 'ipay_payment_id' cannot be null.");
        else
            content_.append("ipay_payment_id", ipay_payment_id.toString());
        if (status !== null && status !== undefined)
            content_.append("status", status.toString());
        if (status_description !== null && status_description !== undefined)
            content_.append("status_description", status_description.toString());
        if (shop_order_id !== null && shop_order_id !== undefined)
            content_.append("shop_order_id", shop_order_id.toString());
        if (payment_method !== null && payment_method !== undefined)
            content_.append("payment_method", payment_method.toString());
        if (card_type !== null && card_type !== undefined)
            content_.append("card_type", card_type.toString());
        if (transaction_id !== null && transaction_id !== undefined)
            content_.append("transaction_id", transaction_id.toString());
        if (pan !== null && pan !== undefined)
            content_.append("pan", pan.toString());

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/octet-stream"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processPaymentCallback(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processPaymentCallback(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse>><any>_observableThrow(response_);
        }));
    }

    protected processPaymentCallback(response: HttpResponseBase): Observable<FileResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return _observableOf({ fileName: fileName, data: <any>responseBlob, status: status, headers: _headers });
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<FileResponse>(<any>null);
    }

    refundCallBack(order_id: string | null | undefined, payment_hash: string | null | undefined, ipay_payment_id: number | undefined, status: string | null | undefined, status_description: string | null | undefined, shop_order_id: string | null | undefined, payment_method: string | null | undefined, card_type: string | null | undefined, transaction_id: string | null | undefined, pan: string | null | undefined): Observable<FileResponse> {
        let url_ = this.baseUrl + "/api/Ipay/RefundCallBack";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = new FormData();
        if (order_id !== null && order_id !== undefined)
            content_.append("order_id", order_id.toString());
        if (payment_hash !== null && payment_hash !== undefined)
            content_.append("payment_hash", payment_hash.toString());
        if (ipay_payment_id === null || ipay_payment_id === undefined)
            throw new Error("The parameter 'ipay_payment_id' cannot be null.");
        else
            content_.append("ipay_payment_id", ipay_payment_id.toString());
        if (status !== null && status !== undefined)
            content_.append("status", status.toString());
        if (status_description !== null && status_description !== undefined)
            content_.append("status_description", status_description.toString());
        if (shop_order_id !== null && shop_order_id !== undefined)
            content_.append("shop_order_id", shop_order_id.toString());
        if (payment_method !== null && payment_method !== undefined)
            content_.append("payment_method", payment_method.toString());
        if (card_type !== null && card_type !== undefined)
            content_.append("card_type", card_type.toString());
        if (transaction_id !== null && transaction_id !== undefined)
            content_.append("transaction_id", transaction_id.toString());
        if (pan !== null && pan !== undefined)
            content_.append("pan", pan.toString());

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/octet-stream"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processRefundCallBack(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processRefundCallBack(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse>><any>_observableThrow(response_);
        }));
    }

    protected processRefundCallBack(response: HttpResponseBase): Observable<FileResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return _observableOf({ fileName: fileName, data: <any>responseBlob, status: status, headers: _headers });
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<FileResponse>(<any>null);
    }
}

export interface IPaymentClient {
    checkPaymentData(paymentId: string | undefined): Observable<PaymentResponse>;
}

@Injectable({
    providedIn: 'root'
})
export class PaymentClient implements IPaymentClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    checkPaymentData(paymentId: string | undefined): Observable<PaymentResponse> {
        let url_ = this.baseUrl + "/api/Payment/CheckPaymentData?";
        if (paymentId === null)
            throw new Error("The parameter 'paymentId' cannot be null.");
        else if (paymentId !== undefined)
            url_ += "paymentId=" + encodeURIComponent("" + paymentId) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCheckPaymentData(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCheckPaymentData(<any>response_);
                } catch (e) {
                    return <Observable<PaymentResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<PaymentResponse>><any>_observableThrow(response_);
        }));
    }

    protected processCheckPaymentData(response: HttpResponseBase): Observable<PaymentResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = PaymentResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<PaymentResponse>(<any>null);
    }
}

export class CityDto implements ICityDto {
    id?: number;
    title?: string | undefined;

    constructor(data?: ICityDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.title = _data["title"];
        }
    }

    static fromJS(data: any): CityDto {
        data = typeof data === 'object' ? data : {};
        let result = new CityDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["title"] = this.title;
        return data; 
    }
}

export interface ICityDto {
    id?: number;
    title?: string | undefined;
}

export class CreateCityCommand implements ICreateCityCommand {
    name?: string | undefined;

    constructor(data?: ICreateCityCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): CreateCityCommand {
        data = typeof data === 'object' ? data : {};
        let result = new CreateCityCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        return data; 
    }
}

export interface ICreateCityCommand {
    name?: string | undefined;
}

export class UpdateCityCommand implements IUpdateCityCommand {
    id?: number;
    name?: string | undefined;

    constructor(data?: IUpdateCityCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): UpdateCityCommand {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateCityCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        return data; 
    }
}

export interface IUpdateCityCommand {
    id?: number;
    name?: string | undefined;
}

export class PaymentResponse implements IPaymentResponse {
    status?: PaymentStatus;

    constructor(data?: IPaymentResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.status = _data["status"];
        }
    }

    static fromJS(data: any): PaymentResponse {
        data = typeof data === 'object' ? data : {};
        let result = new PaymentResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["status"] = this.status;
        return data; 
    }
}

export interface IPaymentResponse {
    status?: PaymentStatus;
}

export enum PaymentStatus {
    InProgress = "InProgress",
    Succeed = "Succeed",
    Failed = "Failed",
    Unknown = "Unknown",
}

export interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: { [name: string]: any };
}

export class SwaggerException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}