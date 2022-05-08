<script>
	import { MetaTags } from 'svelte-meta-tags';
	import Container from '../components/Container.svelte';
	import { fade, fly } from 'svelte/transition';
</script>

<MetaTags
	title="Mohamad Adithya"
	description="I'm a Front-End Developer with 2+ years of experience. I can
	implement my skills to make or design a web interface to be interactive and attractive. I can
	also work in a team."
	twitter={{
		handle: '@MohamadAdithya',
		site: '@MohamadAdithya',
		cardType: 'summary_large_image',
		title: 'Twitter',
		description: `Mohamad Adithya's Twitter`,
		image: 'https://pbs.twimg.com/profile_images/1522614353207652358/QWsXvO0W_400x400.jpg',
		imageAlt: `Mohamad Adithya's Twitter photo`
	}}
/>

<section class="grid h-screen place-items-center">
	<Container classes="max-w-2xl">
		<h1 class="text-4xl md:text-5xl font-bold mb-5" in:fly={{ y: 200, duration: 2000 }} out:fade>
			Hi!, Nice to Meet <span class="text-cheese">You</span>
		</h1>
		<p
			class="mb-8 text-gray-300 leading-relaxed"
			in:fly={{ y: 200, duration: 2000, delay: 300 }}
			out:fade
		>
			Welcome to my portfolio website, I'm a Front-End Developer with 2+ years of experience. I can
			implement my skills to make or design a web interface to be interactive and attractive. I can
			also work in a team.
		</p>
		<a
			href="/projects"
			in:fly={{ y: 200, duration: 2000, delay: 600 }}
			out:fade
			class="bg-cheese text-custom-black px-4 py-3 rounded-lg font-bold inline-block transition-transform duration-500 hover:scale-95"
			>See My Projects <i class="fas fa-fw fa-chevron-right ml-1" /></a
		>
	</Container>
</section>
