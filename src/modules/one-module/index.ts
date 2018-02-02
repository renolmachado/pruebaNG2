import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneModuleComponent } from './oneModule.component';

export * from './oneModule.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        OneModuleComponent
    ],
    exports: [
        OneModuleComponent
    ]
})

export class OneModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: OneModule
        };
    }
}
