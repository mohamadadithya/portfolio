<script>
	import { fade } from 'svelte/transition';
	import ProjectCard from '../components/ProjectCard.svelte';
	import Container from '../components/Container.svelte';
	import { projects } from '../data';
	import LightBox from '../components/LightBox.svelte';
	import { MetaTags } from 'svelte-meta-tags';

	let showLightBox = false,
		lightBoxImage,
		lightBoxTitle;

	const showImage = (projectImage, projectName) => {
		showLightBox = true;
		lightBoxImage = projectImage;
		lightBoxTitle = projectName;
	};
</script>

<MetaTags title="Mohamad Adithya | Projects" description="Mohamad Adithya's projects" />

<section class="pt-24 pb-10">
	<Container>
		<h1 class="text-3xl font-bold mb-8" transition:fade={{ duration: 500 }}>My Projects</h1>
		<div class="grid md:grid-cols-3 gap-6 mb-10">
			{#if projects}
				{#each projects as project}
					<ProjectCard on:click={() => showImage(project.image, project.name)} {project} />
				{/each}
			{:else}
				<i class="far fa-fw fa-spin fa-spinner text-3xl" />
			{/if}
		</div>
		<a
			transition:fade
			href="https://github.com/mohamadadithya?tab=repositories"
			target="_blank"
			class="text-xl hover:text-cheese"
			>See other projects <i class="far fa-fw fa-chevron-right" /></a
		>
		{#if showLightBox}
			<LightBox
				title={lightBoxTitle}
				imagePath={lightBoxImage}
				on:click={() => (showLightBox = false)}
			/>
		{/if}
	</Container>
</section>
