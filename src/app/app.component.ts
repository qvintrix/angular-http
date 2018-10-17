import { Component } from '@angular/core';
import { TechnologiesService } from './technologies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  technologies = [
    {
      name: 'JavaScript',
      time: 10,
      id: this.generateId()
    },
    {
      name: 'TypeScript',
      time: 15,
      id: this.generateId()
    }
  ];

  constructor(
    private technologiesService: TechnologiesService
  ) {}

  onAddServer(name: string) {
    this.technologies.push({
      name: name,
      time: 5,
      id: this.generateId()
    });
  }

  save() {
    this.technologiesService.saveData()
      .subscribe(
        (data) => {
          console.log(data);
        }
      );
  }

  getData() {
    this.technologiesService.getData().subscribe((data) => console.log(data));
  }

  private generateId() {
    return Math.round(Math.random() * 100);
  }
}
