/* 80's Kids #6: Rock 'Em, Sock 'Em Robots
https://www.codewars.com/kata/566b490c8b164e03f8000002/train/javascript
You and your friends have been battling it out with your Rock 'Em, Sock 'Em robots,
but things have gotten a little boring. You've each decided to add some amazing new features to your robot and automate them to battle to the death.

Each robot will be represented by an object. You will be given two robot objects,
and an object of battle tactics and how much damage they produce. Each robot will have a name,
hit points, speed, and then a list of battle tactics they are to perform in order.
Whichever robot has the best speed, will attack first with one battle tactic.

Your job is to decide who wins.

Example:

 robot1 = {
  "name": "Rocky",
  "health": 100,
  "speed": 20,
  "tactics": ["punch", "punch", "laser", "missile"]
 }
 robot2 = {
   "name": "Missile Bob",
   "health": 100,
   "speed": 21,
   "tactics": ["missile", "missile", "missile", "missile"]
 }
 tactics = {
   "punch": 20,
   "laser": 30,
   "missile": 35
 }
 
 fight(robot1, robot2, tactics) -> "Missile Bob has won the fight."

robot2 uses the first tactic, "missile" because he has the most speed. This reduces robot1's health by 35. Now robot1 uses a punch, and so on.

Rules

    A robot with the most speed attacks first. If they are tied, the first robot passed in attacks first.
    Robots alternate turns attacking. Tactics are used in order.
    A fight is over when a robot has 0 or less health or both robots have run out of tactics.
    A robot who has no tactics left does no more damage, but the other robot may use the rest of his tactics.
    If both robots run out of tactics, whoever has the most health wins.
    If one robot has 0 health, the other wins. Return the message "{Name} has won the fight."
    If both robots run out of tactics and are tied for health, the fight is a draw. Return "The fight was a draw."
*/

function fight(robot1, robot2, tactics) {
    const announcement = "has won the fight."
    if (robot2.speed > robot1.speed) {
        const tmp = robot1
        robot1 = robot2
        robot2 = tmp
    }

    for (let i = 0; i < Math.max(robot1.tactics.length, robot2.tactics.length); ++i) {
        const r1Tac = robot1.tactics[i];
        const r2Tac = robot2.tactics[i];

        if (r1Tac) {
            robot2.health -= tactics[r1Tac]
            if (robot2.health <= 0) {
                return `${robot1.name} ${announcement}`
            }
        }

        if (r2Tac) {
            robot1.health -= tactics[r2Tac]
            if (robot1.health <= 0) {
                return `${robot2.name} ${announcement}`
            }
        }
    }

    if (robot1.health === robot2.health) {
        return "The fight was a draw."
    } else {
        return `${robot1.health > robot2.health ? robot1.name : robot2.name} ${announcement}`
    }
}



const robot1 = {
    name: 'Alpha',
    speed: 41,
    health: 155,
    tactics: ['snooze']
}
const robot2 = {
    name: 'Omega',
    speed: 35,
    health: 823,
    tactics: ['punch', 'flamethrower']
}
const tactics = { flamethrower: 50, punch: 20, snooze: 0, laser: 30, nuke: 1001 }


console.log(fight(robot1, robot2, tactics), "Omega has won the fight.")

