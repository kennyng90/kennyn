import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import type { ImageGallery } from "@/sanity/types/image-gallery";
import { urlFor } from "@/utils/sanity-client";

interface Props {
  data: ImageGallery;
}

export default function ImageGallery({ data }: Props) {
  return (
    <li>
      <Dialog>
        <DialogTrigger>
          <div className='h-[250px] w-full overflow-hidden rounded-lg border-2 shadow transition focus-visible:outline-black dark:border-2 dark:border-gray-400 dark:focus-visible:outline-white md:hover:border-gray-300 md:hover:shadow-lg md:dark:hover:border-2 md:dark:hover:border-white lg:w-[250px]'>
            <picture>
              <source srcSet={urlFor(data).format("webp").url()} type='image/webp' />
              <img
                className='h-[250px] w-[400px] cursor-pointer object-cover object-left-top transition duration-500 sm:group-hover:scale-105 lg:h-full lg:w-full'
                src={urlFor(data).url()}
                alt={data.alt}
                loading='lazy'
              />
            </picture>
          </div>
        </DialogTrigger>
        <DialogContent className='max-w-5xl'>
          <DialogHeader>{data.alt}</DialogHeader>
          <picture>
            <source srcSet={urlFor(data).format("webp").url()} type='image/webp' />
            <img
              className='h-[600px] w-[800px] cursor-pointer rounded-lg object-contain transition duration-500 sm:group-hover:scale-105 lg:h-[800px] lg:w-full'
              loading='lazy'
              src={urlFor(data).url()}
              alt={data.alt}
            />
          </picture>
        </DialogContent>
      </Dialog>
    </li>
  );
}
