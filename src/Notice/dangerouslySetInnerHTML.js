export default function DangerouslySetInnerHTML() {
  const data = `lorem <b onmouseover="alert('mouseover');">ipsum</b>`;

  return <div dangerouslySetInnerHTML={{ __html: data }} />;
}
