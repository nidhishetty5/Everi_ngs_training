import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // NamFomVar = {
  //   NamCol: "",
  //   ProdCol: "",
  //   CostCol: 0
  // };
  // prodAryVar!: any
  // EdtIdxVar = -1;

  // constructor(public httpConnection: HttpClient) {
  //   this.getProdFnc();
  // }

  // getProdFnc() {
  //   this.httpConnection.get("http://localhost:8000/prod")
  //     .subscribe({
  //       next: (ResRsgVar: any) => {
  //         // console.log('Products:', ResRsgVar);
  //         this.prodAryVar = ResRsgVar;
  //         console.log(this.prodAryVar);
  //       },
  //       error: (err) => {
  //         console.error('Error occurred:', err);
  //       }
  //     });
  // }

  // AddProdFnc(NamFomVar: NgForm) {
  //   // console.log('Form Data:', this.NamFomVar);
  //   this.httpConnection.post(
  //     "http://localhost:8000/prod",
  //     this.NamFomVar
  //   ).subscribe({
  //     next: (ResRsgVar: any) => {
  //       // console.log('Response:', ResRsgVar);
  //       this.getProdFnc(); // Refresh the product list
  //       this.resetForm();
  //     },
  //     error: (err) => {
  //       console.error('Error occurred:', err);
  //     }
  //   });
  // }

  // DeleteProdFnc(id: number) {
  //   console.log('Deleting product with id:', id);
  //   // var indexValue =  this.prodAryVar[id];
  //   // console.log(indexValue)
  //   this.httpConnection.delete(`http://localhost:8000/prod/${id}`).subscribe({
  //     next: (ResRsgVar: any) => {
  //       // console.log('Delete Response:', ResRsgVar);
  //       this.getProdFnc(); // Refresh the product list
  //     },
  //     error: (err) => {
  //       console.error('Error occurred:', err);
  //     }
  //   });
  // }

  // UptBtnFnc(index: number) {
  //   if (this.EdtIdxVar >= 0) {
  //     const updatedRow = this.prodAryVar[index];
  //     updatedRow.NamCol = this.NamFomVar.NamCol;
  //     updatedRow.ProdCol = this.NamFomVar.ProdCol;
  //     updatedRow.CostCol = this.NamFomVar.CostCol;
 
  //     this.httpConnection.put(`http://localhost:8000/prod/${updatedRow.UidCol}`, updatedRow)
  //       .subscribe({
  //         next: (ResRsgVar: any) => {
  //           console.log('Updated:', ResRsgVar);
  //           this.getProdFnc();
  //           this.resetForm();
  //         },
  //         error: (err) => {
  //           console.error('Error occurred:', err);
  //         }
  //       });
 
  //     this.EdtIdxVar = -1;
  //   }
  // }

  // editRow(index: number) {
  //   const selectedRow = this.prodAryVar[index];
  //   this.NamFomVar.NamCol = selectedRow.NamCol;
  //   this.NamFomVar.ProdCol = selectedRow.ProdCol;
  //   this.NamFomVar.CostCol = selectedRow.CostCol;
  //   this.EdtIdxVar = index;
  // }
  

  

  // // verifyTable = [
  // //   { NamCol: "Sriya", ProdCol: "Tesla Ev Car", CostCol: 5000000 },
  // //   { NamCol: "Navya", ProdCol: "Tesla Ev Car", CostCol: 10000000 },
  // //   { NamCol: "Serena", ProdCol: "iPhone 20", CostCol: 400000 },
  // //   { NamCol: "Jayanth", ProdCol: "HP Envy 390", CostCol: 40000 }
  // // ];

  // // EdtIdxVar = -1;


  // // deleteRow(index: number) {
  // //   if (confirm("Do you really want to delete?")) {
  // //     this.verifyTable.splice(index, 1);
  // //   }
  // // }

  // // UptBtnFnc() {
  // //   if (this.EdtIdxVar >= 0) {
  // //     this.verifyTable[this.EdtIdxVar] = {
  // //       NamCol: this.NamFomVar.NamCol,
  // //       ProdCol: this.NamFomVar.ProdCol,
  // //       CostCol: this.NamFomVar.CostCol
  // //     };
  // //     this.EdtIdxVar = -1;
  // //     this.resetForm();
  // //   }
  // // }

  // // addRow() {
  // //   if (this.NamFomVar.NamCol && this.NamFomVar.ProdCol && this.NamFomVar.CostCol > 0) {
  // //     this.verifyTable.push({
  // //       NamCol: this.NamFomVar.NamCol,
  // //       ProdCol: this.NamFomVar.ProdCol,
  // //       CostCol: this.NamFomVar.CostCol
  // //     });
  // //     this.resetForm();
  // //   } else {
  // //     alert("Please fill in all fields before adding.");
  // //   }
  // // }

  // resetForm() {
  //   this.NamFomVar = {
  //     NamCol: "",
  //     ProdCol: "",
  //     CostCol: 0
  //   };
  //   this.EdtIdxVar = -1;
  // }
}
