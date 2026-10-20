StartupEvents.registry('item', event => {
	event.create('small_receiver').displayName('Small Receiver')
	event.create('medium_receiver').displayName('Medium Receiver')
	event.create('large_receiver').displayName('Large Receiver')

	event.create('strong_small_receiver').displayName('Strong Small Receiver')
	event.create('strong_medium_receiver').displayName('Strong Medium Receiver')
	event.create('strong_large_receiver').displayName('Strong Large Receiver')
	
	// event.create('strong_large_receiver').displayName('Strong Large Receiver')
})
