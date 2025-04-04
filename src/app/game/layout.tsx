export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <p>はなまるおばけの まるまるなの！</p>
      {children}
    </section>
  );
}
