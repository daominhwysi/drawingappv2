declare namespace JSX {
    interface IntrinsicElements {
      'math-field': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        ref?: React.RefObject<HTMLElement>;
        'virtual-keyboard-mode'?: string;
        className?: string; // Hỗ trợ `className`
        placeholder?: string; // Thêm `placeholder`
      };
    }
  }
  