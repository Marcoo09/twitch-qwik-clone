import { $, component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./dark-and-status.css?inline";

interface ItemProps {
  whichStatus: string;
  changeStatus: () => {};
}

export const DarkAndStatus = component$<ItemProps>(
  ({ whichStatus, changeStatus }) => {
    const ballState = useSignal(false);

    const handleButton = $(() => {
      if (!whichStatus) return;
      ballState.value = !ballState.value;
      whichStatus === "online" ? changeStatus() : () => {};
      return;
    });

    useStylesScoped$(styles);

    return (
      <div
        class={`button-box ${ballState.value ? "button-true" : ""}`}
        onClick$={handleButton}
      >
        <div class="ball" />
      </div>
    );
  }
);
