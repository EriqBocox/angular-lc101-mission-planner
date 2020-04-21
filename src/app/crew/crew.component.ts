import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  memberBeingEdited: object = null;
  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, firstMission: boolean){
    let foundIndex: number = -1

    for(let i=0; i<this.crew.length; i++){
      if(memberName === this.crew[i].memberName){
        foundIndex = i;
      }
    }

    if(foundIndex === -1){
      this.crew.push({
        memberName: memberName,
        firstMission: firstMission
      });
    } 
  }

  remove(member: object){
    let index = this.crew.indexOf(member);
    this.crew.splice(index,1);
  }

  edit(member: object){
    this.memberBeingEdited = member;
  }

  save(name: string, member: object){
    member['name'] = name;
    this.memberBeingEdited = null;
  }
}
