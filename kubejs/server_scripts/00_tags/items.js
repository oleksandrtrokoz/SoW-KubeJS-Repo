ServerEvents.tags('item', event => {

  ;(() => {

      event.add('kubejs:andesitealloycheap', [
        'create:zinc_nugget',
        'minecraft:iron_nugget'
      ])

      event.add('kubejs:andesitealloyexpensive', [
        'createaddition:zinc_sheet',
        'create:iron_sheet'
      ])

      event.add('kubejs:strings', [
        'minecraft:string',
        'tfmg:synthetic_string'
      ])

      if (Item.exists('kubejs:steel_rod')) {
        event.add('forge:rods/steel', 'kubejs:steel_rod')
      }

      if (Item.exists('survival_instinct:steellium')) {
        event.add('forge:ingots/steel', 'survival_instinct:steellium')
      }

      if (Item.exists('survival_instinct:aluminium')) {
        event.add('forge:ingots/aluminum', 'survival_instinct:aluminium')
        event.add('forge:ingots/aluminium', 'survival_instinct:aluminium')
      }

      const gasolineBuckets = [
        'createdieselgenerators:gasoline_bucket',
        'tfmg:gasoline_bucket'
      ]

      gasolineBuckets.forEach(gasolineBucket => {
        if (!Item.exists(gasolineBucket)) {
          return
        }

        event.add('forge:buckets/gasoline', gasolineBucket)
      })

      const sulfurItems = [
        'createsprings:sulfur',
        'crusty_chunks:sulfur',
        'mekanism:dust_sulfur',
        'survival_instinct:sulfur',
        'survival_instinct:sulfur_dust',
        'tfmg:sulfur',
        'tfmg:sulfur_dust'
      ]

      sulfurItems.forEach(sulfurItem => {
        if (!Item.exists(sulfurItem)) {
          return
        }

        event.add('kubejs:sulfurs', sulfurItem)
        event.add('forge:dusts/sulfur', sulfurItem)
      })
  })()

  ;(() => {

      event.add('forge:plates/steel', 'crusty_chunks:steelplate')
  })()

})
