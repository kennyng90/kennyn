<script lang="ts">
  import MainMenuItem from '@/components/menu-item.svelte';
  import ThemeSwitch from '@/components/theme-switch.svelte';
  import Logo from '@/components/logo.svelte';
  import type { MainMenu } from '@/sanity/types/header';

  let scrollY = 0;
  const className =
    'fixed top-0 left-0 right-0 z-50 h-[80px] md:h-[100px] w-full border-t-0 border bg-opacity-30 backdrop-blur-sm backdrop-filter';

  export let headerData: MainMenu;
</script>

<svelte:window bind:scrollY />

<header>
  <nav
    class={`${className} ${
      scrollY > 0 ? 'border-gray-200 dark:border-transparent' : 'border-transparent'
    }`}
  >
    <div class="mx-auto flex h-full w-full max-w-7xl items-center justify-between p-5 sm:p-10">
      <a href="/" class="text-xl text-black dark:text-white sm:text-3xl">
        <Logo className="w-10 h-10 sm:h-14 sm:w-14" />
      </a>
      <ul class="flex items-center gap-3">
        {#each headerData.menuItems as mainMenuItem}
          <MainMenuItem {mainMenuItem} />
        {/each}
        <li>
          <ThemeSwitch />
        </li>
      </ul>
    </div>
  </nav>
</header>
