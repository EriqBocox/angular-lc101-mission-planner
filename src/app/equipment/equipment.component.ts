import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  pieceBeingEdited: object = null;
  equipment: object[] = [
    {name: 'Habitat dome'},
    {name: "Drones"},
    {name: "Food containers"},
    {name: "Oxygen Tanks"}
  ];
  constructor() { }

  ngOnInit() {
  }

  add(pieceName: string){
    this.equipment.push({name: pieceName});
  }

  remove(piece: object){
    let index = this.equipment.indexOf(piece);
    this.equipment.splice(index,1);
  }

  edit(piece: object){
    this.pieceBeingEdited = piece;
  }

  save(name: string, piece: object){
    piece['name'] = name;
    this.pieceBeingEdited = null;
  }
}
