ServerEvents.recipes(event => {

  ;(() => {

      event.remove({ id: 'mekanism:chemical_oxidizer' })

      event.shaped(
        Item.of('mekanism:chemical_oxidizer', 1),
        [
          'RDR',
          'BSC',
          'RDR'
        ],
        {
          R: 'mekanism:alloy_reinforced',
          D: 'mekanism:dynamic_tank',
          B: 'mekanism:basic_bin',
          S: 'mekanism:steel_casing',
          C: 'mekanism:basic_chemical_tank'
        }
      ).id('kubejs:mekanism/chemical_oxidizer')
  })()

})
