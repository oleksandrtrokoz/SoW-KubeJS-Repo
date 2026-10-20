StartupEvents.registry('item', event => {
	event.create('incomplete_xl_iron_sheet')
	event.create('incomplete_xxl_iron_sheet')
	event.create('incomplete_xl_steel_sheet')
	event.create('incomplete_xxl_steel_sheet')

	event.create('l_iron_sheet').displayName('Large Iron Sheet')
	event.create('xl_iron_sheet').displayName('Extra Large Iron Sheet')
	event.create('xxl_iron_sheet').displayName('Extra Extra Large Iron Sheet')

	event.create('l_steel_sheet').displayName('Large Steel Sheet')
	event.create('xl_steel_sheet').displayName('Extra Large Steel Sheet')
	event.create('xxl_steel_sheet').displayName('Extra Extra Large Steel Sheet')
})
