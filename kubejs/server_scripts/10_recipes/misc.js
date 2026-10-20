ServerEvents.recipes(event => {

  ;(() => {

      event.recipes.createHaunting(
        'minecraft:echo_shard',
        'minecraft:amethyst_shard'
      ).id('kubejs:minecraft/echo_shard_from_haunting_amethyst')

      event.remove({ output: 'vista:hollow_cassette' })
      event.shapeless('vista:hollow_cassette', [
        'exposure:color_film',
        'minecraft:echo_shard'
      ]).id('kubejs:vista/hollow_cassette_from_color_film_and_echo_shard')

      event.shaped('vs_clockwork:universal_shaft_item', [
        'K  ',
        ' K ',
         '  K'
       ], {
          K: 'minecraft:dried_kelp'
       }).id('kubejs:vs_clockwork/compressible_shaft_from_kelp')

       event.shaped('vs_clockwork:universal_shaft_item', [
         '  K',
         ' K ',
         'K  '
       ], {
          K: 'minecraft:dried_kelp'
       }).id('kubejs:vs_clockwork/compressible_shaft_from_kelp_mirrored')

      event.recipes.create.mixing(
        [
          Fluid.of('create:potion', 1000, {
            Bottle: 'REGULAR',
            Potion: 'minecraft:poison'
          })
        ],
        [
          'crusty_chunks:toxic_agent',
          Fluid.of('minecraft:water', 1000)
        ]
      ).id('kubejs:create/mixing/poison_potion_from_toxic_agent')
  })()

  ;(() => {

      event.remove({ id: 'survival_instinct:sulfur_dust_recipe' })

      const sulfurItems = [
        'createsprings:sulfur',
        'crusty_chunks:sulfur',
        'mekanism:dust_sulfur',
        'survival_instinct:sulfur',
        'survival_instinct:sulfur_dust',
        'tfmg:sulfur',
        'tfmg:sulfur_dust'
      ]

      sulfurItems.forEach(sourceSulfur => {
        if (!Item.exists(sourceSulfur)) {
          return
        }

        sulfurItems.forEach(targetSulfur => {
          if (sourceSulfur === targetSulfur || !Item.exists(targetSulfur)) {
            return
          }

          event.custom({
            type: 'minecraft:stonecutting',
            ingredient: {
              item: sourceSulfur
            },
            result: targetSulfur,
            count: 1
          }).id(`kubejs:sulfur/${sourceSulfur.replace(':', '_')}_to_${targetSulfur.replace(':', '_')}`)
        })
      })

      event.replaceInput(
        { id: 'tfmg:vat_machine_recipe/sulfuric_acid' },
        'tfmg:sulfur_dust',
        '#forge:dusts/sulfur'
      )
  })()

  ;(() => {

      event.stonecutting(
        'railways:copycat_headstock',
        '#forge:ingots/zinc'
      ).id('kubejs:railways/stonecutting/copycat_headstock_from_zinc_ingot')
  })()

})
