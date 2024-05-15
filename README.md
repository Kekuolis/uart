## Micro Bit

### Python

python has a lot of code examples and documentation but some of it does not compile on microbit

### Runtime

Then I found out that Microbit supports C++ but sadly it is installed with yotta and it is depricated and I cannot get it to run and install the runtime.

### Mbed studio

It appears it does not support [microbit](https://forums.mbed.com/t/should-mbed-studio-work-with-microbit/8506)
```
argument -m/--mcu: NRF51_MICROBIT is not a supported MCU. Supported MCUs are:
```

### Connecting via bluetooth

Tested with Android [serial bluetooth terminal](https://play.google.com/store/apps/details?id=de.kai_morich.serial_bluetooth_terminal). Connecting with the Microbit using the [microbit](https://play.google.com/store/apps/details?id=com.samsung.microbit) android application and waiting for it to pair, after the checkmark dissapears, mount to read information that is streamed over UART using javascript [here](./outputToUart.js) using the serial console it is possible to stream values to a log text file that is constantly updating, you set it to save in serial bluetooth terminal settings -> data -> log, and make sure to change the default location of logs or you will need to root your device to access the files or connect the android device to computer. The connection is inconsistent and often only works with restarting the microbit, forgetting the paired device and repairing instead of just reconnecting.

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

