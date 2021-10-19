Componenentes:

App:
-pinta los demas componentes.
-contiene el answer actual.
-contiene array de answers.
-contiene array de letras.
-defininir funcion onclick de letter, pasar la por props.
-comprueba si la letra esta en la palabra.
-en el caso que si: pasa la letra a answerbox.
-en el caso que no: pasa classname a HangmanBox.
-en el caso que sea la ultima letra de la palabra ara enviar

-contiene array de classNames del hangman.
-si respuesta fallada:
-del array de hangman classnames se quita un elemento, y se envia a hangmanbox.
-en el caso que el classname enviado sea el ultimo: finalizar.perdido

HangManBox:
-recibir nombre de classe i pintar el elemento segun la classe recivida

AnswerBox:
-recibir una letra y mostrala.
-recibe la lenght de la palabra y pinta los campos en funcion a este.

Letter:
-recibir una letra y mostrarla.
-recibir una actionOnClick.
