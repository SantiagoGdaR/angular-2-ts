import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductOpenNotificationService {
    notification: Subject<void> = new Subject<void>();
    
    openProduct():void{
        this.notification.next();
    }

    getProductOpenObservable(): Observable<void>{
        return this.notification.asObservable();
    }
}