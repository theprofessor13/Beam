export function BrandMark({ size = 26 }: { size?: number }) {
  const corner = size * 0.38;
  const stroke = Math.max(2, size * 0.09);
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <span
        className="absolute border-cobalt rounded-tl-md"
        style={{ top: 0, left: 0, width: corner, height: corner, borderWidth: stroke, borderRight: 'none', borderBottom: 'none' }}
      />
      <span
        className="absolute border-cobalt rounded-tr-md"
        style={{ top: 0, right: 0, width: corner, height: corner, borderWidth: stroke, borderLeft: 'none', borderBottom: 'none' }}
      />
      <span
        className="absolute border-cobalt rounded-bl-md"
        style={{ bottom: 0, left: 0, width: corner, height: corner, borderWidth: stroke, borderRight: 'none', borderTop: 'none' }}
      />
      <span
        className="absolute border-cobalt rounded-br-md"
        style={{ bottom: 0, right: 0, width: corner, height: corner, borderWidth: stroke, borderLeft: 'none', borderTop: 'none' }}
      />
    </div>
  );
}
