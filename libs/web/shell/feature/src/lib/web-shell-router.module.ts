import { Routes } from "@angular/router";
import { LayoutComponent } from "@todos-app/web/shell/ui/layout";

export const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: async () => (await (await import('@todos-app/web/document')).DocumentComponentModule)
            }
           
        ]

    },
    // {
    //     path: '',
    //     redirectTo: '',
    //     pathMatch: 'full'
    //   }
]