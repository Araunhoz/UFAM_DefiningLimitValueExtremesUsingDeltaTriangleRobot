#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
tecla = sys.argv[1]
x = sys.argv[2]
y = sys.argv[3]
z = sys.argv[4]
acerto = sys.argv[5]
arq = open('C:\\Users\Paulo Henrique\Desktop\BasedeDados\BD_+.txt', 'a')
texto = "Asus;6;"+ tecla +";"+ x +";"+ y +";"+ z +";"+ acerto
arq.write(texto)
arq.write('\n')
arq.close()