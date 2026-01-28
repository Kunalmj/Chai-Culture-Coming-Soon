const DecorativeElements = () => {
  return (
    <>
      {/* Bottom decorative line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-30">
        <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-accent" />
        <div className="w-3 h-3 rotate-45 border border-accent" />
        <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-accent" />
      </div>
    </>
  );
};

export default DecorativeElements;
