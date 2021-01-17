;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-intermediate-reader.ss" "lang")((modname fibonacci) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f () #f)))
(check-expect (fibonacci 1) 1)
(check-expect (fibonacci 2) 1)
(check-expect (fibonacci 3) 2)
(check-expect (fibonacci 4) 3)

(define (fibonacci n)
         (if (= n 1 ) 1
         (if (= n 2 ) 1
         (+ (fibonacci (- n 1))
             (fibonacci (- n 2))))))