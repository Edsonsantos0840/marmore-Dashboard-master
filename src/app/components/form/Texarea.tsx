export default function TextArea({props}) {
    return (
      <>
        <textarea
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.Change}
      />
      </>
    )
  }