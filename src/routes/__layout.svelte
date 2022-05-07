<script>
	import Navbar from '../components/Navbar.svelte';
	import '../../static/css/tailwind.css';
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;700&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css"
		rel="stylesheet"
		type="text/css"
	/>
</svelte:head>

<main
	class="font-plus-jakarta-sans bg-custom-black text-white bg-[url('/images/bg-main.svg')] bg-cover"
>
	{#if ready}
		<Navbar />
		<slot />
	{/if}
</main>
