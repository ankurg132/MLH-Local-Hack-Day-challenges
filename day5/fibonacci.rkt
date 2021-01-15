(check-expect (fibonacci 1) 1)
(check-expect (fibonacci 2) 1)
(check-expect (fibonacci 3) 2)
(check-expect (fibonacci 4) 3)

(define (fibonacci n)
         (if (= n 1 ) 1
         (if (= n 2 ) 1
         (+ (fibonacci (- n 1))
             (fibonacci (- n 2))))))
