<script lang="ts">
  import { urlFor } from '@/utils/sanity-client';
  import type { AccessibleImage } from '@/sanity/types/accessible-image';

  export let showModal: boolean;
  export let selectedImage: AccessibleImage;  

  const handleWindowKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      showModal = false;
    }
  };

  $: {
    if (showModal) {
      window.addEventListener('keydown', handleWindowKey);
    } else {
      window.removeEventListener('keydown', handleWindowKey);
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
  open={showModal}
  class="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center gap-2 bg-black bg-opacity-75 px-5 text-left"
>
  <em class="text-left text-white">{selectedImage.alt}</em>
  <picture>
    <source srcset={urlFor(selectedImage).format('webp').url()} type="image/webp" />
    <img
      class="h-[600px] w-[800px] cursor-pointer rounded-lg object-contain transition duration-500 sm:group-hover:scale-105 lg:h-[800px] lg:w-full"
      loading="lazy"
      src={urlFor(selectedImage).url()}
      alt={selectedImage.alt}
    />
  </picture>
</dialog>
