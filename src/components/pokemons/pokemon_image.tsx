/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";

interface PokemonImageProps {
  id: number;
  size?: number;
  backImage: boolean;
}

export const PokemonImage = component$(
  ({ id, size = 200, backImage = false }: PokemonImageProps) => {
    return (
      <>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            backImage ? "back/" : ""
          }${id}.png`}
          alt="pokemon"
          style={{ width: `${size}px`, height: `${size}px` }}
        />
      </>
    );
  }
);
