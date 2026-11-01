export type Item = {
  id: string
  text: string
  at: number
  /** When it was ticked off; absent while open. */
  doneAt?: number
  /** When it was taken off the list; absent while it shows. */
  archivedAt?: number
  /** Kept in the list every project shows, not in its own project's. */
  pinned?: boolean
}

declare module 'claude-code' {
  interface EngineInterface {
    todos: { toggle: (args: Record<string, never>) => Promise<void> }
  }

  interface PluginState {
    todos: { open: Item[]; visible: Item[]; isExpanded: boolean }
  }
}
