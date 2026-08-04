export default function LightGridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full overflow-hidden" aria-hidden="true">
      {/* Subtle radial light aura at the top center */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-40 blur-[120px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(168, 85, 247, 0.08) 50%, transparent 100%)'
        }}
      />

      {/* Subtle 60px tech grid matching dark mode grid */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
