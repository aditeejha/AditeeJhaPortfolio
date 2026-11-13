const TOP = ['OPEN TO INTERNSHIPS', 'AI ENGINEERING', 'LLM AGENTS', 'FULL-STACK', '500+ DSA PROBLEMS', 'WRITER', 'BIT MESRA ’28', 'DEBATER']
const BOTTOM = ['TYPESCRIPT', 'NODE.JS', 'GEMINI API', 'TAVILY SEARCH', 'SQLITE', 'REACT', 'NEXT.JS', 'POSTGRESQL', 'ONNX RUNTIME']

function Tape({ items, className }: { items: string[]; className: string }) {
  const row = [...items, ...items]
  return (
    <div className={`overflow-hidden py-3 ${className}`} aria-hidden>
      <div className="flex w-max animate-marquee whitespace-nowrap font-pixel text-[10px]">
        {row.map((t, i) => (
          <span key={i} className="px-6">
            {t} <span className="opacity-50">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function MarqueeTape() {
  return (
    <div className="relative z-10 my-10 overflow-hidden py-6">
      <Tape items={BOTTOM} className="absolute inset-x-[-5%] top-4 rotate-2 bg-cyan text-void opacity-90" />
      <Tape items={TOP} className="relative -rotate-2 bg-pink text-void shadow-neon-pink" />
    </div>
  )
}
