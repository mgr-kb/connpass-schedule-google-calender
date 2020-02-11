import { createComponent } from "@vue/composition-api";

type Props = {
  val: string;
};

export default createComponent({
  props: {
    val: {
      type: String,
      reqired: true
    }
  },
  setup(props: Props) {
    return () => <h1>{props.val}</h1>;
  }
});
