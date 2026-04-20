import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
interface StudentData {
  name: string;
  marks: number | null;
}

@Component({
  selector: 'app-student',
  standalone: true,
   imports: [CommonModule,FormsModule], 
  templateUrl: './student.html',
  styleUrls: ['./student.css']
})
export class StudentComponent {
  passMark = 35;

  // List of students for the teacher to grade
  students: StudentData[] = [
    { name: 'Arun ', marks: null },
    { name: 'raja', marks: null },
    { name: 'Joseph Vijay', marks: null },
    { name: 'sarah ', marks: null },
    { name: 'Abi ', marks: null }
  ];

  calculateStatus(m: number | null): string {
    if (m === null) return 'Waiting...';
    return m >= this.passMark ? 'Pass' : 'Fail';
  }
  calculategrade(m: number | null): string {
    if(m===null)return "waiting..";
    if (m < this.passMark) return "Fail"
    if(m>=95) return "O";
    else if(m>=85) return "A+";
    else if(m>=80)return "A";
    else return "B+"; 


  }
}
