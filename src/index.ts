import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneModule } from './modules/one-module/index';

import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';
export * from './modules/one-module/index';

@NgModule({
    imports: [
        CommonModule,
        OneModule
    ],
    declarations: [
        SampleComponent,
        SampleDirective,
        SamplePipe
    ],
    exports: [
        SampleComponent,
        SampleDirective,
        SamplePipe
    ]
})
export class SampleModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SampleModule,
            providers: [SampleService]
        };
    }
}
