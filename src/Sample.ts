export interface ISample {
  input: string
}

export const Sample = (props: ISample) => {
  return 'I am a sample! ' + props.input
}
