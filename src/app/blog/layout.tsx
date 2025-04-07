export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <p>ふくろうくんです！</p>
      {children}
    </section>
  );
}
