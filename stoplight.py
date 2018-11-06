import RPi.GPIO as GPIO
import time
import datetime

wakeHour = 7
sleepHour = 19
wakeMin = 45
snoozeMin = 30

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

GPIO.setup(9, GPIO.OUT) #Red
GPIO.setup(10, GPIO.OUT)#Yellow
GPIO.setup(11, GPIO.OUT)#Green


for x in range(10):
  for y in range(9, 12):
    GPIO.output(y, 1)
    time.sleep(.3)
  for z in range(9,12):
    GPIO.output(z, 0)
    time.sleep(.3)

currentHour = datetime.datetime.now().hour
currentMin = datetime.datetime.now().minute
#Yellow
if (wakeHour-1 == currentHour and snoozeMin <= currentMin < wakeMin):
  GPIO.output(9, 0)
  GPIO.output(10, 1)
  GPIO.output(11, 0)
#Green
elif (wakeHour <= currentHour < sleepHour or (wakeHour-1 == currentHour and wakeMin <= currentMin)):
  GPIO.output(9, 0)
  GPIO.output(10, 0)
  GPIO.output(11, 1)
#Red
else:
  GPIO.output(9, 1)
  GPIO.output(10, 0)
  GPIO.output(11, 0)

#Do not do cleanup so that current light stay on
#GPIO.cleanup()
