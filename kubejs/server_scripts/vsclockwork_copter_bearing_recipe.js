ServerEvents.recipes(event => {
  event.shaped('vs_clockwork:copter_bearing', [
    '#V#',
    ' F ',
    '#V#'
  ], {
    '#': 'create:industrial_iron_block',
    'V': 'vs_clockwork:spinoff_bearing',
    'F': 'vs_clockwork:universal_shaft'
  })
})