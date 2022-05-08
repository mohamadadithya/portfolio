<script>
	export let project;
	import { fade, fly } from 'svelte/transition';
</script>

<div
	in:fly={{ y: 200, duration: 1500, delay: project.delay }}
	out:fade
	class="p-5 bg-gray-700 backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-lg flex flex-col justify-between"
>
	<div>
		<button on:click>
			<img
				src="/images/projects/{project.image}"
				class="rounded-md mb-5 transition-transform duration-300 hover:scale-105"
				alt={project.name}
			/>
		</button>
		<h1 class="font-bold text-xl mb-3">{project.name}</h1>
		<p class="text-gray-400 mb-5">
			{project.description}
		</p>
	</div>
	<div>
		<a
			href={project.urls.source_code}
			class="bg-cheese px-3 py-2.5 mr-3 inline-block text-black rounded-md transition-transform duration-500 hover:scale-95"
			><i class="fab fa-fw fa-github mr-1" /> Source Code</a
		>
		<a href={project.urls.demo} class="hover:text-cheese"
			><i class="far fa-fw fa-eye mr-1" /> Demo</a
		>
	</div>
</div>
