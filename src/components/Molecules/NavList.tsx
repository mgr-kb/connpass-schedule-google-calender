import { createComponent } from "@vue/composition-api";
import NavItem from "@/components/Atoms/NavItem";

export default createComponent({
  setup() {
    return () => (
      <ul>
        <NavItem val="TOP" />
        <NavItem val="Googleカレンダー確認" />
      </ul>
    );
  }
});
