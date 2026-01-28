const SteamAnimation = () => {
  return (
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-2 opacity-40">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-1 h-6 rounded-full bg-accent/50 animate-steam"
          style={{
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SteamAnimation;
