<!--<html>
  <table border="1">
    <tr>
      <th>Name</th>
      <th>Prod</th>
      <th>Cost</th>
      <th>Actions</th>
    </tr>
    <tr *ngFor="let ItmVar of verifyTable; let i = index">
      <td>{{ItmVar.NamVak}}</td>
          <td>{{ItmVar.prod}}</td>
      <td>{{ItmVar.cost}}</td>
      <td>
        <button (click)="editRow(i)">Edit</button>
        <button (click)="deleteRow(i)">Delete</button>
      </td>
    </tr>
  </table>
 
  <form name="editForm">
    <label>
      Name:
      <input type="text" name="NamIptVak" [(ngModel)]="NamFomVar.NamIptVak" required>
    </label>
    <br>
    <label>
      Prod:
<input type="text" name="prod" [(ngModel)]="NamFomVar.prod" required>
    </label>
    <br>
    <label>
      Cost:
      <input type="number" name="cost" [(ngModel)]="NamFomVar.cost" required>
    </label>
    <br>
    <button (click)="UptBtnFnc()" *ngIf="EdtIdxVar >= 0">Update</button>
  </form>
</html>
--></form>



/*import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  NamFomVar = {
    NamIptVak: "",
    prod: "",
    cost: 0
  };
 
  verifyTable = [
    { "NamVak": "Sriya", "prod": "Tesla Ev Car", "cost": 5000000 },
    { "NamVak": "Navya", "prod": "Tesla Ev Car", "cost": 10000000 },
    { "NamVak": "serena", "prod": "iphone 20", "cost": 400000 },
    { "NamVak": "jayanth", "prod": "HP Envy 390", "cost": 40000 }
  ];
 
  EdtIdxVar = -1;
 
  editRow(index: number) {
    const selectedRow = this.verifyTable[index];
    this.NamFomVar.NamIptVak = selectedRow.NamVak;
this.NamFomVar.prod = selectedRow.prod;
    this.NamFomVar.cost = selectedRow.cost;
    this.EdtIdxVar = index;
  }
 
  deleteRow(index: number) {
    if (confirm("Do you really want to delete?")) {
      this.verifyTable.splice(index, 1);
    }
  }
 
  UptBtnFnc() {
    if (this.EdtIdxVar >= 0) {
      this.verifyTable[this.EdtIdxVar] = {
        NamVak: this.NamFomVar.NamIptVak,
prod: this.NamFomVar.prod,
        cost: this.NamFomVar.cost
      };
      this.EdtIdxVar = -1;
      this.resetForm();
    }
  }
 
  resetForm() {
    this.NamFomVar = {
      NamIptVak: "",
      prod: "",
      cost: 0
    };
  }
} */