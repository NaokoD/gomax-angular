import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';







import {
    MatMenuModule, MatIconModule, MatToolbarModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatGridListModule,
    MatTableModule, MatListModule, MatChipsModule, MatTabsModule
} from '@angular/material';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatGridListModule,
        MatTableModule,
        MatListModule,


        MatChipsModule,
    ],
    exports: [
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatGridListModule,
        MatTableModule,
        MatListModule,
        MatChipsModule,
        MatTabsModule

    ]
})
export class MaterialModule { }

