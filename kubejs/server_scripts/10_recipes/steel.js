ServerEvents.recipes(event => {

  ;(() => {

      event.remove({ id: 'crusty_chunks:create_steel_pressing' })

      event.recipes.create.pressing(
        'crusty_chunks:steelplate',
        '#forge:ingots/steel'
      ).id('kubejs:steel/pressing/steel_plate_from_steel_ingot')

      event.custom({
        type: 'createaddition:rolling',
        input: {
          tag: 'forge:ingots/steel'
        },
        result: {
          item: 'kubejs:steel_rod',
          count: 2
        }
      }).id('kubejs:steel/rolling/steel_rods_from_steel_ingot')
  })()

  ;(() => {

      function addStonecuttingSet(items, material) {
        const existingItems = items.filter(item => Item.exists(item))

        existingItems.forEach(input => {
          existingItems.forEach(output => {
            if (input === output) {
              return
            }

            event.custom({
              type: 'minecraft:stonecutting',
              ingredient: {
                item: input
              },
              result: output,
              count: 1
            }).id('kubejs:steel/stonecutting/' + material + '/' + input.replace(':', '_') + '_to_' + output.replace(':', '_'))
          })
        })
      }

      addStonecuttingSet([
        'createmetallurgy:steel_ingot',
        'crusty_chunks:steel_ingot',
        'mekanism:ingot_steel',
        'tfmg:steel_ingot'
      ], 'ingots')

      addStonecuttingSet([
        'mekanism:nugget_steel',
        'tfmg:steel_nugget'
      ], 'nuggets')

      addStonecuttingSet([
        'createmetallurgy:steel_block',
        'crusty_chunks:steel_block',
        'mekanism:block_steel',
        'tfmg:steel_block'
      ], 'blocks')
  })()

})
