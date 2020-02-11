import { createComponent } from "@vue/composition-api";
import Logo from "@/components/Atoms/Logo";
import NavList from "@/components/Molecules/NavList";

export default createComponent({
  setup() {
    return () => (
      <nav>
        <Logo />
        <NavList />
      </nav>
    );
  }
});
