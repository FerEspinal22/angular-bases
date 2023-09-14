import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

@NgModule({
  //Es una buena práctica que estén ordenadas alfabeticamente
  declarations: [HeroComponent, ListComponent,],
  exports: [HeroComponent, ListComponent,],
  imports: [CommonModule]
})
export class HeroesModule {
}
