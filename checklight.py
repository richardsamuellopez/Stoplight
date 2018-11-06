import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

for x in range(9, 12):
  GPIO.setup(x, GPIO.IN)
  print(x, GPIO.input(x))
  if(GPIO.input(x)==1):
    GPIO.setup(x, GPIO.OUT)
    GPIO.output(x, 1)
    if(x==9):
      print("RED")
    elif(x==10):
      print("YELLOW")
    elif(x==11):
      print("GREEN")
    else:
      print("UNKNOWN")  

#GPIO.cleanup()
