ServerEvents.recipes(event => {

  ;(() => {

      event.remove({ output: 'drivebywire:backup_block' })

      event.shaped(
        Item.of('drivebywire:backup_block', 1),
        [
          'WIW',
          'WHW',
          'WIW'
        ],
        {
          W: 'drivebywire:wire',
          I: 'minecraft:iron_block',
          H: 'drivebywire:controller_hub'
        }
      )
  })()

  ;(() => {

      event.remove({ output: 'drivebywire:controller_hub' })

      event.shaped(
        Item.of('drivebywire:controller_hub', 1),
        [
          'RBR',
          'WCW',
          'RBR'
        ],
        {
          R: 'create:redstone_link',
          W: 'drivebywire:wire',
          C: 'create:linked_controller',
          B: 'create:brass_casing'
        }
      )
  })()

  ;(() => {

      event.remove({ output: 'drivebywire:tweaked_controller_hub' })

      event.shaped(
        Item.of('drivebywire:tweaked_controller_hub', 1),
        [
          'RHR',
          'WTW',
          'RBR'
        ],
        {
          H: 'drivebywire:controller_hub',
          T: 'create_tweaked_controllers:tweaked_linked_controller',
          B: 'create:brass_casing',
          R: 'create:redstone_link',
          W: 'drivebywire:wire'
        }
      )
  })()

  ;(() => {

      event.remove({ output: 'drivebywire:wire' })

      event.shapeless('1x drivebywire:wire', [
        '#forge:wires/iron',
        '#minecraft:wool'
      ])
  })()

  ;(() => {

      event.remove({ output: 'drivebywire:wire_cutter' })

      event.shaped(
        Item.of('drivebywire:wire_cutter', 1),
        [
          ' I ',
          'RWI',
          ' R '
        ],
        {
          I: '#forge:ingots/iron',
          R: '#forge:rods/iron',
          W: '#minecraft:wool'
        }
      )
  })()

})
