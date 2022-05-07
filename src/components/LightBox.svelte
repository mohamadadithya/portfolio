<script>
	export let imagePath, title;
</script>

<div
	class="fixed h-screen top-0 left-0 w-full grid place-content-center bg-opacity-60 bg-custom-black backdrop-filter backdrop-blur-sm px-4"
>
	<button class="ml-auto text-3xl mb-5" on:click><i class="far fa-fw fa-times" /></button>
	<p class="text-center text-xl font-bold mb-4">
		<span class="text-cheese">{title}</span> screenshot
	</p>
	{#if imagePath != ''}
		<img src="/images/projects/{imagePath}" class="w-full md:max-w-2xl rounded-md" alt={title} />
	{:else}
		<i class="far fa-spin fa-spinner text-3xl" />
	{/if}
</div>
