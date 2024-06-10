import PageFooter from "@/components/page-footer";
import PageHeader from "@/components/page-header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageHeader />
      {children}
      <PageFooter />
    </>
  );
}
