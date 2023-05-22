/* eslint-disable qwik/jsx-img */
import { component$, useSignal, useTask$ } from "@builder.io/qwik";

interface PokemonImageProps {
  id: number;
  size?: number;
  backImage: boolean;
  isVisible?: boolean;
}

export const PokemonImage = component$(
  ({ id, size = 200, backImage = false, isVisible }: PokemonImageProps) => {
    const imageLoaded = useSignal(false);

    useTask$(async ({ track }) => {
      track(() => id);
      imageLoaded.value = false;
    });

    return (
      <>
        <div
          class="flex justify-center items-center"
          style={{ with: `${size}px`, height: `${size}px` }}
        >
          {!imageLoaded.value && <span>Cargando...</span>}

          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              backImage ? "back/" : ""
            }${id}.png`}
            alt="pokemon"
            style={{ width: `${size}px`, height: `${size}px` }}
            onLoad$={() => {
              imageLoaded.value = true;
            }}
            class={[{ hidden: !imageLoaded.value, "brightness-0": isVisible }, 'transition-all']}
          />
        </div>
      </>
    );
  }
);
