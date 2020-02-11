import { createComponent } from "@vue/composition-api";
import Button from "@/components/Atoms/Button";
import InputForm from "@/components/Molecules/InputForm";

export default createComponent({
  setup() {
    return () => (
      <form>
        <Button val="submit" func={() => console.log("click")} />
      </form>
    );
  }
});
