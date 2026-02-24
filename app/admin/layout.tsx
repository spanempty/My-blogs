export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="p-4">{children}</section>;
  //   <div className="min-h-screen">{children}</div>;
}
