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
    return () => (
      <li>
        <a href="#">{props.val}</a>
      </li>
    );
  }
});
