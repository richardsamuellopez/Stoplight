# Stoplight for Pi


## Crontabs
View with `crontab -l`
Edit with `crontab -e`
```30 6 * * * python /home/pi/Desktop/Stoplight/yellow.py
45 6 * * * python /home/pi/Desktop/Stoplight/green.py
#0 12 * * * python /home/pi/Desktop/Stoplight/red.py
#30 14 * * * python /home/pi/Desktop/Stoplight/green.py
0 19 * * * python /home/pi/Desktop/Stoplight/red.py
@reboot python ~/Desktop/Stoplight/stoplight.py
@reboot python3 ~/Desktop/Stoplight/server/app.py```


