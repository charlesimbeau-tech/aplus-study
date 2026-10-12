// Renders **bold** and `code` inside lesson text. Nothing else.
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') ? (
          <strong key={i}>{p.slice(2, -2)}</strong>
        ) : p.startsWith('`') ? (
          <code key={i}>{p.slice(1, -1)}</code>
        ) : (
          p
        ),
      )}
    </>
  )
}
