export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <p>ふくろうくんのゲーム！</p>
      {children}
    </section>
  );
}
