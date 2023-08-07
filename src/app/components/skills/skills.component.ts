import { Component } from '@angular/core';
import { Skill } from './skill';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills: Skill[];

  constructor(){

   this.skills = [

      new Skill('Java','https://i.ibb.co/qYWq9Ym/4691382-java-icon.png'),
      new Skill('Spring Boot','https://i.ibb.co/k11F95Z/9055841-bxl-spring-boot-icon.png'),
      new Skill('Hibernate','https://i.ibb.co/sCXW69n/hibernate-logo-icon-248090.png'),
      new Skill('Gradle','https://i.ibb.co/rkxPYsW/file-type-light-gradle-icon-130462.png'),
      new Skill('Maven','https://i.ibb.co/qrRLJWf/file-type-maven-icon-130397.png'),
      new Skill('Html','https://i.ibb.co/QPxX6KQ/104494-html5-html-icon.png'),
      new Skill('CSS','https://i.ibb.co/2YgZHPD/7422531-css3-css-file-development-icon.png'),
      new Skill('JavaScript','https://i.ibb.co/2sNr4rx/9035061-logo-javascript-icon.png'),
      new Skill('Angular','https://i.ibb.co/J303yck/4691504-angular-icon.png'),
      new Skill('Material UI','https://i.ibb.co/hXh1WP7/material-ui-icon-137419.png'),
      new Skill('Docker','https://i.ibb.co/7WYgds0/8666171-docker-icon.png'),
      new Skill('VueJS','https://i.ibb.co/fY69zCc/9035136-logo-vue-icon.png'),
      new Skill('TailwindCSS','https://i.ibb.co/wptnm43/9074204-tailwind-icon.png'),
      new Skill('VS Code','https://i.ibb.co/hHfvk63/9805191-vs-code-logo-microsoft-visual-studio-code-code-icon.png'),
      new Skill('Postman','https://i.ibb.co/k42tG7Z/4691397-postman-icon.png'),
      new Skill('IntelliJ','https://i.ibb.co/z6wSHwW/brand-intellij-icon-158846.png'),
      new Skill('Node','https://i.ibb.co/k2z86Ym/8546986-node-icon.png'),
      new Skill('npm','https://i.ibb.co/YXnvjqd/4691529-npm-icon.png'),
  
    ]

  }

}
