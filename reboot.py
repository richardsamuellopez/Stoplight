import RPi.GPIO as GPIO
import time
import datetime

hourToWake = 7
hourToSleep = 19

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

GPIO.setup(9, GPIO.OUT)
GPIO.setup(10, GPIO.OUT)
GPIO.setup(11, GPIO.OUT)


for x in range(10):
  for y in range(9, 12):
    GPIO.output(y, 1)
    time.sleep(.3)
  for z in range(9,12):
    GPIO.output(z, 0)
    time.sleep(.3)

currentHour = datetime.datetime.now().hour
currentMin = datetime.datetime.now().minute
if (hourToWake-1 == currentHour and currentMin > 44):
  GPIO.output(9, 0)
  GPIO.output(10, 1)
  GPIO.output(11, 0)
elif (hourToWake <= currentHour < hourToSleep):
  GPIO.output(9, 0)
  GPIO.output(10, 0)
  GPIO.output(11, 1)
else:
  GPIO.output(9, 1)
  GPIO.output(10, 0)
  GPIO.output(11, 0)

#GPIO.cleanup()
