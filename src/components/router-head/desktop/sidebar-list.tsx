import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./sidebar-list.css?inline";
import { SideBarListItem } from "./sidebar-list-item";

interface ItemProps {}

export const DarkAndStatus = component$<ItemProps>(() => {
  const users: any[] = [];
  useStylesScoped$(styles);

  return (
    <div class="list">
      <ul>
        {users.map((user, index) => {
          if (index > 4) return;
          return <SideBarListItem user={user} key={index} imageId={index} />;
        })}
      </ul>
      <div class="show-more">
        <span>Show More</span>
      </div>
    </div>
  );
});
