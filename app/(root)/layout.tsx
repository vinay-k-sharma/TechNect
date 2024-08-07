import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { Toaster } from '@/components/ui/toaster';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Toaster />
      <Footer />
    </div>
  );
}
