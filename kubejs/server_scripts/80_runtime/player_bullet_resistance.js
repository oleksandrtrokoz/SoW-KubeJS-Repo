const bulletResistanceCommand = 'execute as @a run attribute @p tacz:bulletresistance base set .75'

function applyBulletResistance(event) {
  event.server.runCommandSilent(bulletResistanceCommand)
}

PlayerEvents.loggedIn(event => {
  applyBulletResistance(event)
})

PlayerEvents.respawned(event => {
  applyBulletResistance(event)
})
