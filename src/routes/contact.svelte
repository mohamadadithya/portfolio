<script>
	import Input from '../components/Input.svelte';
	import Container from '../components/Container.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { fade, fly } from 'svelte/transition';
	import { Notyf } from 'notyf';
	import 'notyf/notyf.min.css';

	const notyf = new Notyf({
		types: [
			{
				type: 'success',
				background: '#F58840'
			}
		]
	});

	let isNull = true,
		isLoading = false,
		username,
		email,
		message;

	const sendMessage = async () => {
		if (username && email && message) {
			try {
				isLoading = true;
				await fetch(
					`https://docs.google.com/forms/d/e/1FAIpQLSfS3mFSozUjtVOX2Ybhh1sSWxot0WRt_4LNKjpeTTTkXoc4Yg/formResponse?usp=pp_url&entry.1509683568=${username}&entry.442800857=${email}&entry.697720677=${message}&submit=Submit`,
					{
						mode: 'no-cors'
					}
				);
			} catch (error) {
				console.log(error);
			} finally {
				isLoading = false;
				notyf.success('Your message has been sent, thank you.');
				(username = ''), (email = ''), (message = '');
			}
		} else {
			(username = ''), (email = ''), (message = '');
		}
	};

	$: username && email && message ? (isNull = false) : (isNull = true);
</script>

<MetaTags title="Mohamad Adithya | Contact" description="Mohamad Adithya's contact information" />

<section class="pt-24">
	<Container classes="h-screen">
		<h1 class="text-3xl font-bold mb-8" transition:fade={{ duration: 500 }}>Contact Me</h1>
		<div
			in:fly={{ y: 200, duration: 1500 }}
			out:fade
			class="p-5 grid md:grid-cols-2 gap-10 items-center bg-custom-black bg-opacity-25 rounded-lg backdrop-filter backdrop-blur-md"
		>
			<form on:submit|preventDefault={sendMessage}>
				<Input name="Username" placeholder="Enter your name" bind:value={username} />
				<Input name="Email Address" placeholder="Enter your email" bind:value={email} />
				<div class="flex flex-col">
					<label for="message">Message</label>
					<textarea
						id="message"
						class="outline-none bg-transparent w-full border-b border-cheese h-48 mt-3"
						placeholder="Enter message"
						bind:value={message}
					/>
				</div>
				<button
					type="submit"
					class="mt-4 bg-cheese text-black w-full p-2.5 rounded-md disabled:opacity-60 disabled:cursor-not-allowed"
					disabled={isNull}
				>
					{#if isLoading}
						<i class="far fa-fw fa-spin fa-spinner" />
					{:else}
						Submit
					{/if}
				</button>
			</form>
			<ul class="flex items-center md:justify-self-center text-3xl md:text-5xl">
				<li in:fly={{ y: 200, duration: 1500, delay: 500 }} out:fade>
					<a
						target="_blank"
						href="https://linkedin.com/in/mohamadadithya"
						class="hover:text-cheese"
					>
						<i class="fab fa-fw fa-linkedin" />
					</a>
				</li>
				<li class="mx-4" in:fly={{ y: 200, duration: 1500, delay: 700 }} out:fade>
					<a target="_blank" href="https://github.com/mohamadadithya" class="hover:text-cheese">
						<i class="fab fa-fw fa-github" />
					</a>
				</li>
				<li in:fly={{ y: 200, duration: 1500, delay: 900 }} out:fade>
					<a target="_blank" href="https://wa.me/083896283802" class="hover:text-cheese">
						<i class="fab fa-fw fa-whatsapp" />
					</a>
				</li>
			</ul>
		</div>
	</Container>
</section>
