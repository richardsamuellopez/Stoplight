import RPi.GPIO as GPIO
from flask import Flask, render_template, request, redirect, url_for
import sys
import os
sys.path.append(os.path.abspath("/home/pi/Desktop/Stoplight"))
from stoplight import *

app = Flask(__name__)

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

ledRed = 9
ledYellow = 10
ledGreen = 11
ledRedSts = 0
ledYellowSts = 0
ledGreenSts = 0
#GPIO.setup(ledRed, GPIO.OUT)
#GPIO.output(ledRed, GPIO.LOW)
#GPIO.setup(ledYellow, GPIO.OUT)
#GPIO.output(ledYellow, GPIO.LOW)
#GPIO.setup(ledGreen, GPIO.OUT)
#GPIO.output(ledGreen, GPIO.LOW)

for x in range(9, 12):
  GPIO.setup(x, GPIO.IN)
  print(x, GPIO.input(x))
  if(GPIO.input(x)==1):
    GPIO.setup(x, GPIO.OUT)
    GPIO.output(x, GPIO.HIGH)
    if(x==ledRed):
      print("RED")
      ledRedSts = 1
    elif(x==ledYellow):
      print("YELLOW")
      ledYellowSts = 1
    elif(x==ledGreen):
      print("GREEN")
      ledGreenSts = 1
    else:
      print("UNKNOWN")
  else:
    GPIO.setup(x, GPIO.OUT)
@app.route('/index')
@app.route('/')
def index():
  ledRedSts = GPIO.input(ledRed)
  ledYellowSts = GPIO.input(ledYellow)
  ledGreenSts = GPIO.input(ledGreen)
  templateData = { 'ledRed' : ledRedSts,
  'ledYellow' : ledYellowSts,
  'ledGreen' : ledGreenSts }
  return render_template('index.html', **templateData)
@app.route('/<deviceName>/<action>')
def do(deviceName, action):
  print(deviceName, action)
  if deviceName == "ledRed":
    actuator = ledRed
  if deviceName == "ledYellow":
    actuator = ledYellow
  if deviceName == "ledGreen":
    actuator = ledGreen
  if action == "on":
    GPIO.output(ledRed, GPIO.LOW)
    GPIO.output(ledYellow, GPIO.LOW)
    GPIO.output(ledGreen, GPIO.LOW)
    GPIO.output(actuator, GPIO.HIGH)
  if action == "off":
    GPIO.output(actuator, GPIO.LOW)
  ledRedSts = GPIO.input(ledRed)
  ledYellowSts = GPIO.input(ledYellow)
  ledGreenSts = GPIO.input(ledGreen)
  templateData = { 'ledRed' : ledRedSts,
  'ledYellow' : ledYellowSts,
  'ledGreen' : ledGreenSts }
  return render_template('index.html', **templateData )
@app.route('/party')
def party():
#  setup()
#  party()
  fun()
  setlight()
  return redirect(url_for('index'))
@app.route('/cakes')
def cakes():
  return 'Yummy cakes!'
if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0', threaded=True)
