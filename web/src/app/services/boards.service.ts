import { Injectable } from '@angular/core';

@Injectable()
export class BoardsService {


  private boards:Board[] = [
    {
      nombre: "Shinn King Gee Air King",
      bio: "The new King Gee – Sea King delivers something unique to the lightwind market place – a truly enjoyable performance. Designed to increase your time on the water in less than optimal conditions this is a board you can ride even as the wind fills in without the need to rush back to the beach for something smaller.",
      img: "assets/img/board1.jpg",
      puntuacion: "4.9/5",
      precio:"752,84€"
    },
    {
      nombre: "Shinn Bronq Backspacer 2019 TwinTip",
      bio: "High performance freestyle. Top of many riders “most wanted” list, the Bronq Backspacer was developed with one focus in mind – un-rivalled, plush riding enjoyment and when Kiteworld magazine describe it as “loose, playful and (with) the ability to ride for hours without feeling battered” we think our efforts have not gone to waste.",
      img: "assets/img/board2.jpg",
      puntuacion: "4.7/5",
      precio:"822,44€"
    },
    {
      nombre: "Bronq Q XL TwinTip",
      bio: "True freeride performance in an XL package for larger riders and lighter winds. Lightweight, increased flex responsiveness and improved range – can there be a better set of characteristics to apply to a lightwind machine? The Bronq Q XL combines all the constructional advances of the Bronq Q and applies them to one of the most tricky challenges in TT design – making a super-early planning board with decent upper end range that’s still fun to ride.",
      img: "assets/img/board3.jpg",
      puntuacion: "4/5",
      precio:"451,24€"
    },
    {
      nombre: "Shinn Pinbot RX3 2019 TwinTip",
      bio: "Unbeatable control and ease, develop your style fast! Looking for a twintip that will allow you to learn and progress fast, but doesnt hold you back at intermediate level, then this is your choice of Shinn Twintip.",
      img: "assets/img/board4.jpg",
      puntuacion: "4.9/5",
      precio:"474,44€"
    },
    {
      nombre: "Bernhard TwinTip",
      bio: "Maximum fun, minimum wind. Bernhard is a new model and a new category for Shinn and has only one mission – increasing your days on the water with amazing power efficiency and unbelievable upwind ability whilst all the time keeping your riding fun.",
      img: "assets/img/board5.jpg",
      puntuacion: "4.7/5",
      precio:"654,24€"
    },
    {
      nombre: "Monkette Gumbubble 2019 TwinTip",
      bio: "Unashadmely born from the DNA of the Monk the Monkette bring ease, control and performance. Our SQ3 mould technology, progressive concave and constant curve rocker deliver outstanding grip, effortless chop handling and superb, easy to access POP, all combined with one purpose in mind – making your moves bigger, smoother and more effortless.",
      img: "assets/img/board6.jpg",
      puntuacion: "4.2/5",
      precio:"636,84€"
    },
    {
      nombre: "Ronson Player 2019 TwinTip",
      bio: "Call it what you will, Ronson is all things to all riding styles. Radical POP, amazing grip and outstanding control. Ronson fulfills your demands as a dynamic kiteboarder not willing to be limited by conditions or riding style.",
      img: "assets/img/board7.jpg",
      puntuacion: "4.9/5",
      precio:"683,24€"
    }
  ];

  constructor() {
    console.log("Servicios");
   }


   getBoards():Board[]{
     return this.boards;
   }

   getBoard( idx: string ){
     return this.boards[idx];
   }


}


export interface Board{
  nombre: string;
  bio: string;
  img: string;
  puntuacion: string;
  precio: string;
};
