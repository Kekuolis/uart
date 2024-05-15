#!/bin/bash

BLUETOOTH_COMMANDS=$(cat << EOF
remove C5:7B:8D:6B:61:93
scan off
scan on
agent on
EOF
)

echo "$BLUETOOTH_COMMANDS" | bluetoothctl

sleep 10
BLUETOOTH_COMMANDS=$(cat << EOF
trust C5:7B:8D:6B:61:93
pair C5:7B:8D:6B:61:93
EOF
)
echo "$BLUETOOTH_COMMANDS" | bluetoothctl

sleep 5

BLUETOOTH_COMMANDS=$(cat << EOF
connect C5:7B:8D:6B:61:93
EOF
)