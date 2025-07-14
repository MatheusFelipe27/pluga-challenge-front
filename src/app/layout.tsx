import './globals.css';


export const metadata = {
  title: 'Pluga Challenge Front',
  description: 'Desafio técnico da Pluga',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
