import { ChangeDetectorRef, OnDestroy, PipeTransform } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @Pipe PushPipe
 *
 * @description
 *
 * The `push` pipe serves as a drop-in replacement for the `async` pipe.
 * It contains intelligent handling of change detection to enable us
 * running in zone-full as well as zone-less mode without any changes to the code.
 *
 * The current way of binding an observable to the view looks like that:
 *  ```html
 *  {{observable$ | async}}
 * <ng-container *ngIf="observable$ | async as o">{{o}}</ng-container>
 * <component [value]="observable$ | async"></component>
 * ```
 *
 * The problem is `async` pipe just marks the component and all its ancestors as dirty.
 * It needs zone.js microtask queue to exhaust until `ApplicationRef.tick` is called to render all dirty marked
 *     components.
 *
 * Heavy dynamic and interactive UIs suffer from zones change detection a lot and can
 * lean to bad performance or even unusable applications, but the `async` pipe does not work in zone-less mode.
 *
 * `push` pipe solves that problem.
 *
 * Included Features:
 *  - Take observables or promises, retrieve their values and render the value to the template
 *  - Handling null and undefined values in a clean unified/structured way
 *  - Triggers change-detection differently if `zone.js` is present or not (`detectChanges` or `markForCheck`)
 *  - Distinct same values in a row to increase performance
 *  - Coalescing of change detection calls to boost performance
 *
 * @usageNotes
 *
 * `push` pipe solves that problem. It can be used like shown here:
 * ```html
 * {{observable$ | push}}
 * <ng-container *ngIf="observable$ | push as o">{{o}}</ng-container>
 * <component [value]="observable$ | push"></component>
 * ```
 *
 * @publicApi
 */
export declare class PushPipe<S> implements PipeTransform, OnDestroy {
    private renderedValue;
    private readonly subscription;
    private readonly RenderAware;
    private readonly resetObserver;
    private readonly updateObserver;
    constructor(cdRef: ChangeDetectorRef);
    transform<T>(potentialObservable: null, config?: string | Observable<string>): null;
    transform<T>(potentialObservable: undefined, config?: string | Observable<string>): undefined;
    transform<T>(potentialObservable: ObservableInput<T>, config?: string | Observable<string>): T;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<PushPipe<any>, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<PushPipe<any>, "push">;
}