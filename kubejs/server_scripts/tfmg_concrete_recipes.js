ServerEvents.recipes(event => {
  const colors = [
    "white","blue","light_blue","red","green","lime","pink",
    "magenta","yellow","gray","light_gray","brown","cyan",
    "purple","orange","black"
  ];

  // MIXING: Base concrete
  event.recipes.createMixing(
    [Item.of("tfmg:concrete", 4)],
    [
      Item.of("minecraft:sand", 4),
      Item.of("minecraft:gravel", 4),
      Fluid.of("minecraft:water", 20)
    ]
  );

  // MIXING: Base concrete > colored concrete
  colors.forEach(color => {
    event.recipes.createMixing(
      [Item.of(`tfmg:${color}_concrete`, 8)],
      [
        Item.of("tfmg:concrete", 8),
        `minecraft:${color}_dye`
      ]
    );
  });

  // SHAPELESS: Base concrete > rebar concrete
  event.shapeless(
    Item.of("tfmg:rebar_concrete", 1),
    [
      Item.of("tfmg:rebar", 8),
      "tfmg:concrete"
    ]
  );

  // SHAPELESS: Colored concrete > colored rebar concrete
  colors.forEach(color => {
    event.shapeless(
      Item.of(`tfmg:${color}_rebar_concrete`, 1),
      [
        Item.of("tfmg:rebar", 8),
        `tfmg:${color}_concrete`
      ]
    );
  });
});
