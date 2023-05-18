import { component$ } from "@builder.io/qwik";

interface ItemProps {
  user: any;
  imageId: number;
}

export const SideBarListItem = component$<ItemProps>(({ imageId, user }) => {
  return (
    <li>
      <div class="item">
        <div class="pp">
          <img src={`https://i.pravatar.cc/5${imageId}`} />
        </div>
        <div class="hover-section">
          <div class="info">
            <div class="username">{user.username}</div>
            <div class="title">{user.game}</div>
          </div>
          <div class="live">
            <div class="live-icon">{/* <FaCircle /> */}</div>
            <span>333</span>
          </div>
        </div>
      </div>
    </li>
  );
});
