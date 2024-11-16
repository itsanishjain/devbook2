export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto">
      <div>{children}</div>
    </div>
  );
}
