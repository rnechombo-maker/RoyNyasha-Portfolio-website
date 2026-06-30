const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 13) % 100}%`,
  top: `${(index * 19) % 100}%`,
  delay: `${(index % 7) * 1.1}s`,
  duration: `${18 + (index % 5) * 3}s`
}));

export default function Particles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute h-px w-px rounded-full bg-accent/20 shadow-[0_0_12px_rgba(214,210,196,0.18)] animate-particle-float"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration
          }}
        />
      ))}
    </div>
  );
}
