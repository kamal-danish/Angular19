interface ImportMeta {
  readonly hot?: {
    accept: (callback?: () => void) => void;
    dispose: (callback: () => void) => void;
  };
}
