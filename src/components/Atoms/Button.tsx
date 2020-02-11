import { createComponent } from "@vue/composition-api";

type Props = {
  val: string;
  func: () => Promise<void>;
};

export default createComponent({
  props: {
    val: {
      type: String,
      reqired: true
    },
    func: {
      type: Function,
      required: true
    }
  },
  setup(props: Props) {
    return () => (
      <button
        class="mx-auto text-base bg-green-300 text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        onClick={() => props.func()}
      >
        {props.val}
      </button>
    );
  }
});
