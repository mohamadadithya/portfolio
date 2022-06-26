<script context="module">
	export async function load() {
		const API_URL = 'https://dev.to/api/articles/latest?username=mohamadadithya';
		const response = await fetch(API_URL);
		const articles = await response.json();
		return { props: { articles } };
	}
</script>

<script>
	import Container from '../components/Container.svelte';
	import Article from '../components/Article.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { fade } from 'svelte/transition';

	export let articles;
</script>

<MetaTags title="Blog" />

<section class="pt-24 pb-10 min-h-screen">
	<Container>
		<h1 class="text-3xl font-bold mb-8" transition:fade={{ duration: 500 }}>My Blog</h1>
		<div class="grid md:grid-cols-3 gap-5">
			{#each articles as article}
				<Article {article} />
			{/each}
		</div>
	</Container>
</section>
