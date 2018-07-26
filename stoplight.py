import RPi.GPIO as GPIO
import time
import datetime

hourToWake = 7


GPIO.setmode(GPIO.BCM)
GPIO.setup(9, GPIO.OUT)
GPIO.setup(10, GPIO.OUT)
GPIO.setup(11, GPIO.OUT)

try:
  while(True):
    currentHour = datetime.datetime.now().hour
    if (currentHour >= hourToWake and currentHour < hourToWake+5):
      GPIO.output(9, 0)
      GPIO.output(11, 1)
    else:
      GPIO.output(9, 1)
      GPIO.output(11, 0)

    time.sleep(60)

  GPIO.cleanup()
except:
  print ("Error!")
  GPIO.cleanup()
