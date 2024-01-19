// Nuclear Missile Manager

// Our nuclear missile manager system is coded in Node.js. We are currently testing the system and it seems that the launchAll function does not work as expected. It should launch 5 missiles each 1 second apart. The current code tries to launch the missile #5 five times...

// Can you fix this for us? You know, it's pretty critical code...

// Note: There are 5 missiles labeled i which is a number in {0, 1, 2, 3, 4}. The missile i should be launched after i seconds.

const launchAll = launchMissile => [0, 1, 2, 3, 4]
    .forEach(x => setTimeout(() => launchMissile(x), x * 1000))