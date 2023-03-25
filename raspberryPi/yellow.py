import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

GPIO.setup(9, GPIO.OUT)
GPIO.setup(10, GPIO.OUT)
GPIO.setup(11, GPIO.OUT)

GPIO.output(9, 0)
GPIO.output(10, 1)
GPIO.output(11, 0)

#GPIO.cleanup()
