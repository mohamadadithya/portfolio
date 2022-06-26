<script>
	export let article;
	import { fade, fly } from 'svelte/transition';
</script>

<div
	in:fly={{ y: 200, duration: 1500 }}
	out:fade
	class="p-6 bg-gray-700 h-full rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-sm"
>
	<a class="block text-2xl font-bold mb-3 duration-300" href={article.url} target="_blank"
		>{article.title}</a
	>
	{#each article.tag_list as tag}
		<a href="/" class="inline-block mr-3 text-cheese hover:line-through">#{tag}</a>
	{/each}
	<p class="mt-3 text-gray-500">
		{article.reading_time_minutes} min read &bullet; Published on {article.readable_publish_date}
	</p>
</div>
