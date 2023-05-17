import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';



export default component$(() => {
  return (
    <>
     
      <div class="container container-center container-spacing-xl">
        <h3 class =" text-7xl ">
          You can <span class="highlight">count</span>
          <br /> on me
        </h3>
  
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
