ServerEvents.recipes(event => {

  ;(() => {

      const hammer = 'nose_cones:nose_cone_hammer'
      const chezBurger = 'nose_cones:chez_burger'

      Ingredient.of('@nose_cones').itemIds.forEach(itemId => {
        const id = String(itemId)
        event.remove({ output: id })

        if (id === hammer || id === chezBurger) {
          return
        }

        event.shapeless(Item.of(id), [
          '#forge:storage_blocks/steel'
        ]).id('kubejs:nose_cones/steel_block_to_' + id.split(':')[1])
      })

      event.shaped(hammer, [
        'III',
        ' R ',
        ' R '
      ], {
        I: '#forge:ingots/iron',
        R: '#forge:rods/iron'
      }).id('kubejs:nose_cones/nose_cone_hammer')
  })()

})
