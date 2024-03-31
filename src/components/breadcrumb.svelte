<script lang="ts">
  import { onDestroy } from 'svelte';
  import { windowWidthStore } from '@/utils/window-width-store';
  import { generateBreadcrumbs } from '@/utils/generate-breadcrumbs';

  export let className: string;
  export let path: string;

  let crumbs: Array<{ label: string; href: string }> = [];
  let windowWidth: number;

  const handleCurrentPageClick = (event: Event) => {
    event.preventDefault();
  };
  const unsubscribe = windowWidthStore.subscribe((value) => (windowWidth = value));

  onDestroy(() => {
    unsubscribe();
  });

  $: {
    crumbs = generateBreadcrumbs(path);
  }
</script>

<nav aria-label="breadcrumb" class={className}>
  <ol class="flex gap-2">
    {#each crumbs as c, i}
      {#if i !== 1 || windowWidth > 640}
        <li class="group flex gap-2">
          {#if i === crumbs.length - 1}
            <a
              class="pointer-events-none text-gray-500 dark:text-gray-300"
              href={c.href}
              tabindex="-1"
              on:click={i === crumbs.length - 1 ? handleCurrentPageClick : undefined}
              aria-current="location">{c.label}</a
            >
          {:else}
            <a
              class="bg-gradient-to-r bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] sm:from-current sm:to-current"
              href={c.href}>{c.label}</a
            >
            <span aria-hidden="true">></span>
          {/if}
        </li>
      {/if}
    {/each}
  </ol>
</nav>
