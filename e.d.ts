import Vue, { Events } from 'vue'

declare module '@vue/runtime-dom' {
  interface InputEvent extends Events['onChange'] {
    target: HTMLInputElement
  }

  export interface InputHTMLAttributes {
    onChange?: (e: InputEvent) => void
  }
}
