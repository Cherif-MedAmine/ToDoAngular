import { Component } from '@angular/core';
import { article } from 'src/Models/Article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

    listArticle:article[]=[
      {titre: "le championnat du monde", contenu: "le champion du monde de cette annee est", auteur: "Med Taher", date: "12/12/2005",categorie: "sport"},
      {titre: "Les nouveaux parents", contenu: "les nouveaux parents", auteur: "Ahmed Said", date: "11/11/2018",categorie: "Education"},
      {titre: "Comment ecrire votre CV", contenu: "Pour réussir à décraucher un emploi", auteur: "Marie Elsa ", date: "20/04/2017",categorie: "Travail"},]

      postuler(){
      
      }
      cat="Travail";
      cat2="Education"; 
      nb=0;
      countNB(){
       
       for(var off of this.listArticle){
          if(off.categorie !=this.cat)
         this.nb++;
        }
      
       
       return this.nb ;
      }

}
