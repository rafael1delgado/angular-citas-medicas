import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent implements OnInit {
  @Input() listadoCitas: any;
  @Output() deleteCita = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  eliminarCita(index: number):void {
    this.deleteCita.emit(index);
  }
}
