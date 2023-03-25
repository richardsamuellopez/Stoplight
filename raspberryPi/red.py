import RPi.GPIO as GPIO
import time 

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

GPIO.setup(9, GPIO.OUT)
GPIO.setup(10, GPIO.OUT)
GPIO.setup(11, GPIO.OUT)

GPIO.output(9, 1)
GPIO.output(10, 0)
GPIO.output(11, 0)

#GPIO.cleanup()
