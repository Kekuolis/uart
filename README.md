## Micro Bit

### Python

python has a lot of code examples and documentation that does not work

### Runtime

Then I found out that Microbit supports C++... but sadly it is installed with yotta and it is depricated and I cannot get it to run and install the runtime.

### Mbed studio

It appears it does not support [microbit](https://forums.mbed.com/t/should-mbed-studio-work-with-microbit/8506)
```
argument -m/--mcu: NRF51_MICROBIT is not a supported MCU. Supported MCUs are:
```

### Connecting via bluetooth

Tested with Android serial bluetooth terminal. Connecting with the Microbit using the microbit android application and waiting for it to pair, after the checkmark dissapears, mount to read information that is streamed over UART using javascript [here](./outputToUart.js) using the serial console it is possible to stream values to a log text file that is constantly updating.

I have also attempted this using Debian linux by binding the bluetooth to a serial mount using rfcomm and bluetoothctl to scan and pair and connect with the device. 
```
bluetoothctl
scan on
agent on
pair C5:7B:8D:6B:61:93
```

When the checkmark dissapears run

```
connect C5:7B:8D:6B:61:93
```

I have tried to read from this using cat, screen, bluez and handling potential access issues to the serial port without success.