import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./sidebar.css?inline";
import { SidebarList } from "./sidebar-list";

interface ItemProps {
  mySize: number;
}

export const Sidebar = component$<ItemProps>(({ mySize }) => {
  const sideBarStatus = useSignal("");

  useStylesScoped$(styles);

  return (
    <div
      class={`sidebar-box ${
        sideBarStatus.value && mySize > 1199 ? "side-open" : ""
      }`}
    >
      <div class="list-title">
        <h1>Followed Channels</h1>
        <div class="title-icon" onClick$={() => {}}>
          {/* <BiArrowFromLeft /> */}
        </div>
        <div class="followed">{/* <BiHeart /> */}</div>
      </div>
      <SidebarList />

      <div class="list-title">
        <h1>Recommended Channels</h1>
        <div class="camera">{/* <MdOutlineVideocam /> */}</div>
      </div>
      <SidebarList />
      <div class="side-search">
        {/* <Search placeholder={"Search to Add Friends"} /> */}
      </div>
    </div>
  );
});
