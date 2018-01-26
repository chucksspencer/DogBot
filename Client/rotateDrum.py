import RPi.GPIO as gpio
import time
import argparse

PINS = [17,18,27,22]
SEQA = [(22,),(27,),(18,),(17,)]

parser = argparse.ArgumentParser()
parser.add_argument('steps', type=int, default=430, help='Number of steps to go. 180 degrees is about 430 steps.')
parser.add_argument('--direction', type=str, default="cw", choices=['cw', 'ccw'], help='Direction to go.')
parser.add_argument('--delay', type=float, default=.002, help='The delay between steps, in seconds. Default is .002')
args = parser.parse_args()

if args.direction == 'ccw':
    SEQA = [(17,),(18,),(27,),(22,)]

gpio.setmode(gpio.BCM)

for pin in PINS:
    gpio.setup(pin, gpio.OUT)

def stepper(sequence, pins):
    for step in sequence:
        for pin in pins:
            gpio.output(pin, True) if pin in step else gpio.output(pin, False)
        time.sleep(args.delay)

try:
    for _ in range(args.steps):
        stepper(SEQA,PINS)  # forward
    gpio.cleanup()
except KeyboardInterrupt:
    gpio.cleanup()