import { writable } from 'svelte/store';

const createWindowWidthStore = () => {
    const store = writable(typeof window !== 'undefined' ? window.innerWidth : 0);
    const { subscribe, set } = store;

    if (typeof window !== "undefined") {
        const updateWidth = () => set(window.innerWidth);
        window.addEventListener('resize', updateWidth);

        if (import.meta.hot) {
            import.meta.hot.dispose(() => {
                window.removeEventListener('resize', updateWidth);
            });
        }
    }

    return {
        subscribe
    }
}

export const windowWidthStore = createWindowWidthStore();
