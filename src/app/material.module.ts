import { NgModule } from '@angular/core';

import { MatInputModule, MatSelectModule, MatDialogModule,MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatSnackBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [FormsModule,
            MatFormFieldModule, 
            MatButtonModule, 
            MatInputModule,
            MatToolbarModule,
            MatButtonModule,
            MatSidenavModule,
            MatIconModule,
            MatListModule,
            MatTableModule,
            MatDialogModule,
            MatPaginatorModule,
            MatSortModule,
            MatFormFieldModule,
            MatSnackBarModule,
            MatSelectModule,
        ]
})
export class MaterialModule {}