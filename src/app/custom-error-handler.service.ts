import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

// removed providedIn because we'll be using it using dependency provider
@Injectable()
export class CustomErrorHandler implements ErrorHandler {

    constructor(private _snackbar: MatSnackBar, private _zone: NgZone) { }

    handleError(error: unknown) {
        /**
         * using zone will detect the error and resolve our bug which is : duration not working
        */
        this._zone.run(() => {
            this._snackbar.open(
                'Error was detected! We are already working on it!',
                'Close',
                {
                    duration: 2000
                }
            );
        });

        console.warn(`Caught by Custom Error Handler: ${error}`);
    }
}
