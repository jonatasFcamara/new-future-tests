export type TLoginModal = {
  isVisible: boolean;
  onClose: () => void;
}

export type TOverlay = {
  shadow?: string;
}

export type TModal = TLoginModal & TOverlay;
