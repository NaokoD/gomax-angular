import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatMenuModule, MatInputModule, MatIconModule, MatToolbarModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatGridListModule,
    MatTableModule, MatListModule, MatChipsModule, MatTabsModule, MatExpansionModule
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
        MatExpansionModule,
        MatChipsModule,
        MatInputModule
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
        MatTabsModule,
        MatExpansionModule,
        MatInputModule
    ]
})
export class MaterialModule { }

