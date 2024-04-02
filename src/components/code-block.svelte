<script lang="ts">
  import { Highlight } from 'svelte-highlight';
  import typescript from 'svelte-highlight/languages/typescript';
  import atomOneDark from 'svelte-highlight/styles/atom-one-dark';

  export let code: string;

  let isCopied: boolean = false;

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
    isCopied = true;
    setTimeout(() => {
      isCopied = false;
    }, 3000); // Reset the text after 1 second
  };
</script>

<svelte:head>
  {@html atomOneDark}
</svelte:head>

<div class="relative overflow-x-scroll sm:overflow-hidden">
  <Highlight class="[&_code]:rounded-xl" language={typescript} code={code} />
  {#if isCopied}
    <span aria-hidden="true" class="group absolute right-4 top-4 hidden text-white sm:block"
      >Copied!</span
    >
  {:else}
    <button
      aria-hidden="true"
      class="group absolute right-4 top-4 hidden text-gray-400 sm:block"
      on:click={copyCodeToClipboard}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6 transition-colors duration-200 group-hover:stroke-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
        />
      </svg>
    </button>
  {/if}
</div>
