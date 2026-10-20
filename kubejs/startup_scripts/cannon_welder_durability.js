ItemEvents.modification(event => {
  event.modify('createbigcannons:cannon_welder', item => {
    item.maxDamage = 4096
  })
})
