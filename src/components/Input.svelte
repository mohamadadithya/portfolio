<script>
	export let name, placeholder;
</script>

<div class="flex flex-col mb-5">
	<label for={name.toLowerCase()}>{name}</label>
	<input
		type="text"
		class="mt-3 outline-none bg-transparent border-b pb-2 border-cheese"
		{placeholder}
		id={name.toLowerCase()}
		autocomplete="off"
	/>
</div>
