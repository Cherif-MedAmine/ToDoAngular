import { Component } from '@angular/core';
import { emploi } from 'src/Models/Emploi';

@Component({
  selector: 'app-offresemploi',
  templateUrl: './offresemploi.component.html',
  styleUrls: ['./offresemploi.component.css']
})
export class OffresemploiComponent {
  listOffre:emploi[]=[
    {refirence: "A1", titre: "chef projet", entreprise: "esprit", etat: true},
    {refirence: "B2", titre: "directeur", entreprise: "google", etat: false},
    {refirence: "C3", titre: "ouvrier", entreprise: "angular", etat: true}, 
    {refirence: "D4", titre: "technicien", entreprise: "typescript", etat: false}, ]

search=null;
    postuler(){
      
      }

      cloture=0;
cloturecount(){
 
 for(var off of this.listOffre){
  if(off.etat==false){
   this.cloture++;
  }

 }
 return this.cloture ;
}

}

