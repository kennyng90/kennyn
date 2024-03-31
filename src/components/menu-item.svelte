<script lang="ts">
  import type { MainMenuItem } from '@/sanity/types/header';

  export let mainMenuItem: MainMenuItem;
</script>

<li class="group grid gap-1">
  <a
    class="bg-gradient-to-r bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] sm:from-current sm:to-current"
    href={mainMenuItem.url}>{mainMenuItem.label}</a
  >
</li>
