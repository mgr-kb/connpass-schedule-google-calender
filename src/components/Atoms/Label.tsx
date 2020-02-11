import { createComponent } from "@vue/composition-api";

type Props = {
  for: string;
  val: string;
};

export default createComponent({
  props: {
    for: {
      type: String,
      required: true
    },
    val: {
      type: String,
      reqired: true
    }
  },
  setup(props: Props) {
    return () => <label for={props.for}>{props.val}</label>;
  }
});
