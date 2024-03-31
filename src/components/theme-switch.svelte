<script lang="ts">
  import { onMount } from 'svelte';

  let darkMode = true;

  function toggleTheme() {
    darkMode = !darkMode;
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    updateTheme();
  }

  function updateTheme() {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  onMount(() => {
    const storedTheme = localStorage.getItem('theme');
    darkMode =
      storedTheme === 'dark' ||
      (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    updateTheme();
  });
</script>

<div class="flex items-center">
  <button
    aria-hidden="true"
    tabindex="-1"
    on:click={toggleTheme}
    aria-pressed={darkMode}
    class="my-auto h-6 w-6 rounded-full bg-current"
  >
    <span class="sr-only">{`${darkMode ? 'toggle light mode' : 'toggle dark mode'}`}</span>
  </button>
</div>
