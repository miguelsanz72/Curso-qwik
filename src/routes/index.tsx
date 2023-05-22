import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon_image";

export default component$(() => {
  const pokemonid = useSignal(1);
  const backImage = useSignal(false);

  const changePokemon = $((value: number) => {
    if (pokemonid.value + value <= 0) return;
    pokemonid.value += value;
  });

  const setBackImage = $((value: boolean) => {
    backImage.value = value;
  });

  const showPokemon = useSignal(true);

  return (
    <>
      <div class="flex flex-col justify-center items-center w-full">
        <h1 class="text-xl">PokeQwik</h1>

        <span class="text-9xl"> {pokemonid} </span>

        <PokemonImage
          id={pokemonid.value}
          size={200}
          backImage={backImage.value}
          isVisible={showPokemon.value}
        />

        <div class=" flex ">
          <button
            onClick$={() => changePokemon(-1)}
            class="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded mx-2"
          >
            Anterior
          </button>
          <button
            onClick$={() => changePokemon(+1)}
            class="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded mx-2"
          >
            Siguiente
          </button>
          <button
            onClick$={() => setBackImage( !backImage.value )}
            class="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded mx-2"
          >
            Voltear
          </button>

          <button
            onClick$={() => showPokemon.value = !showPokemon.value}
            class="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded mx-2"
          >
            Revelar
          </button>

         
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "PokeQwik",
  meta: [
    {
      name: "description",
      content: "Mi first app with Qwik",
    },
  ],
};
