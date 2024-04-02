<script script lang="ts">
  import { urlFor } from '@/utils/sanity-client';
  import type { AccessibleImage } from '@/sanity/types/accessible-image';
  import type { ImageGallery } from '@/sanity/types/image-gallery';

  export let imageGallery: Array<ImageGallery> = [];
  export let showModal: boolean;
</script>

<h2 class="mt-7 text-xl font-bold lg:text-2xl">Additional Images</h2>
<ul class="grid gap-x-10 gap-y-1 md:grid-cols-2 lg:grid-cols-3">
  {#each imageGallery as image}
    <li>
      <button
        on:click={() => {
          showModal = true;
        }}
        class="group"
      >
        <div
          class="h-[250px] w-full overflow-hidden rounded-lg border-2 shadow transition focus-visible:outline-black dark:border-2 dark:border-gray-400 dark:focus-visible:outline-white md:hover:border-gray-300 md:hover:shadow-lg md:dark:hover:border-2 md:dark:hover:border-white lg:w-[250px]"
        >
          <picture>
            <source srcset={urlFor(image).format('webp').url()} type="image/webp" />
            <img
              class="h-[250px] w-[400px] cursor-pointer object-cover object-left-top transition duration-500 sm:group-hover:scale-105 lg:h-full lg:w-full"
              src={urlFor(image).url()}
              alt={image.alt}
              loading="lazy"
            />
          </picture>
        </div>
      </button>
    </li>
  {/each}
</ul>
