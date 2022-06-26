<script>
	import { fade } from 'svelte/transition';
	import Container from './Container.svelte';

	let isOpen = false,
		scrollY;
</script>

<svelte:window bind:scrollY />

<nav
	transition:fade={{ duration: 600 }}
	class="py-6 {isOpen || scrollY >= 50 ? 'bg-inherit' : 'bg-transparent'} fixed top-0 w-full z-10"
>
	<Container classes="md:flex justify-between relative">
		<header class="flex justify-between items-center">
			<a
				on:click={() => (isOpen = false)}
				href="/"
				class="font-bold font-satisfy text-3xl hover:text-cheese">Mohamad Adithya</a
			>
			<button class="md:hidden" on:click={() => (isOpen = !isOpen)}>
				<svg class="w-10" x="0px" y="0px" viewBox="0 0 50 50">
					<path
						class={isOpen ? 'opacity-0' : 'opacity-100'}
						fill="#FFF"
						d="M8.667,15h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,15,8.667,15z"
					/>
					<path
						class={isOpen ? 'opacity-0' : 'opacity-100'}
						fill="#FFF"
						d="M8.667,37h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,37,8.667,37z"
					/>
					<path
						fill="#FFF"
						d="M8.667,26h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,26,8.667,26z"
					/>
				</svg>
			</button>
		</header>
		<ul
			class="md:flex items-center md:h-fit h-screen mt-10 md:mt-0 {isOpen
				? 'block'
				: 'hidden'} text-gray-400"
		>
			<li class="mr-8 hover:line-through hover:text-cheese mb-10 md:mb-0">
				<a on:click={() => (isOpen = false)} href="/projects">Projects</a>
			</li>
			<li class="mr-8 hover:line-through hover:text-cheese mb-10 md:mb-0">
				<a on:click={() => (isOpen = false)} href="/contact">Contact</a>
			</li>
			<li class="mr-8 hover:line-through hover:text-cheese mb-10 md:mb-0">
				<a on:click={() => (isOpen = false)} href="/blog">Blog</a>
			</li>
			<li class="hover:line-through hover:text-cheese">
				<a
					on:click={() => (isOpen = false)}
					href="https://drive.google.com/file/d/1awigWeRSYC50yRRKxo7vtxqhpGox1l5y/view?usp=sharing"
					target="_blank">Resume</a
				>
			</li>
		</ul>
	</Container>
</nav>
