BlockEvents.modification(event => {
  const colors = [
    "white","blue","light_blue","red","green","lime","pink",
    "magenta","yellow","gray","light_gray","brown","cyan",
    "purple","orange","black"
  ];

  const destroySpeed = 3.0;
  const explosionResistance = 6.0;

  event.modify("tfmg:rebar_concrete", block => {
    block.destroySpeed = destroySpeed;
    block.explosionResistance = explosionResistance;
  });

  colors.forEach(color => {
    event.modify(`tfmg:${color}_rebar_concrete`, block => {
      block.destroySpeed = destroySpeed;
      block.explosionResistance = explosionResistance;
    });
  });
});
