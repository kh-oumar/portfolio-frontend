import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';


type Section = { icon: string; title: string; content: string };

@Component({
  selector: 'app-about',
  imports: [LucideAngularModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  sections: Section[] = [
    {
      icon: 'heart',
      title: 'Mes valeurs',
      content:
        "L'excellence technique, la rigueur et l'apprentissage continu. Partage des connaissances et travail collaboratif."
    },
    {
      icon: 'target',
      title: 'Mon projet professionnel',
      content:
        "Approfondir l'architecture frontend et contribuer à des projets à impact. À terme : accompagner des équipes sur les bonnes pratiques."
    },
    {
      icon: 'users',
      title: 'Qualités humaines',
      content:
        "Esprit d'équipe, écoute active, communication claire. Environnements collaboratifs où l'entraide et le respect favorisent l'innovation."
    },
    {
      icon: 'sparkles',
      title: "Centres d'intérêt",
      content:
        "Veille technologique, expérimentations, open-source. Hors code : photographie et randonnée, qui nourrissent la créativité."
    }
  ];
}
