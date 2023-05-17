import { component$ } from '@builder.io/qwik';
import { QwikLogo } from '../../icons/qwik';

export default component$(() => {
  return (
    <header class="w-full">
      <div class="flex justify-between items-center px-28 w-full">
        <div class="p-6">
          <a href="/" title="qwik">
            <QwikLogo height={50} width={143} />
          </a>
        </div>
        <ul>
          <li>
            <a href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
              Tutorials
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
