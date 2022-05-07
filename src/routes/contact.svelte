<script>
	import Input from '../components/Input.svelte';
	import Container from '../components/Container.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { fade, fly } from 'svelte/transition';
</script>

<MetaTags title="Contact" />

<section class="pt-24">
	<Container classes="h-screen">
		<h1 class="text-3xl font-bold mb-8" transition:fade={{ duration: 500 }}>Contact Me</h1>
		<div
			in:fly={{ y: 200, duration: 1500 }}
			out:fade
			class="p-5 grid md:grid-cols-2 gap-10 items-center bg-custom-black bg-opacity-25 rounded-lg backdrop-filter backdrop-blur-md"
		>
			<form>
				<Input name="Username" placeholder="Enter your name" />
				<Input name="Email Address" placeholder="Enter your email" />
				<div class="flex flex-col">
					<label for="message">Message</label>
					<textarea
						id="message"
						class="outline-none bg-transparent w-full border-b border-cheese h-48 mt-3"
						placeholder="Enter message"
					/>
				</div>
			</form>
			<ul class="flex items-center md:justify-self-center text-3xl md:text-5xl">
				<li in:fly={{ y: 200, duration: 1500, delay: 500 }} out:fade>
					<a target="_blank" href="https://linkedin.com/in/mohamadadithya">
						<i class="fab fa-fw fa-linkedin" />
					</a>
				</li>
				<li class="mx-4" in:fly={{ y: 200, duration: 1500, delay: 700 }} out:fade>
					<a target="_blank" href="https://github.com/mohamadadithya">
						<i class="fab fa-fw fa-github" />
					</a>
				</li>
				<li in:fly={{ y: 200, duration: 1500, delay: 900 }} out:fade>
					<a target="_blank" href="https://wa.me/083896283802">
						<i class="fab fa-fw fa-whatsapp" />
					</a>
				</li>
			</ul>
		</div>
	</Container>
</section>
