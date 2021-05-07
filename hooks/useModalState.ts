import { ReactNode, useState } from "react";

interface Return {
  visible: boolean;
  open: () => void;
  close: () => void;
  if: (ReactNode) => ReactNode;
}

/**
 * modal hooks
 * @return open modal on
 * @return close modal off
 * @return if if.(<element/>)
 * */
export default (): Return => {
  const [visible, setVisible] = useState<boolean>(false);

  return {
    visible,
    open: () => {
      setVisible(true);
    },
    close: () => {
      setVisible(false);
    },
    if: (node) => visible && node,
  };
};
