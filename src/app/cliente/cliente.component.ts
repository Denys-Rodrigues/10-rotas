import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Models/Cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor() { }

  model: Cliente = new Cliente();

  ngOnInit(): void {
  }

  onConfirmar() {
    console.log(this.model);
  }
}
