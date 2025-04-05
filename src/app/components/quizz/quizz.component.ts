import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  imports: [CommonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit {

  title: string = ""
  questions: any
  questionSelected: any
  answers: string[] = []
  answerSelected: string = ""
  questionIndex: number = 0
  questionMaxIndex: number = 0
  finished: boolean = false

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
