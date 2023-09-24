import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import '../globals.css';

export const metadata = {
    title: 'Twine',
    description: 'Twine is a sleek microblogging app that lets you share short posts, reply in threads, and stay connected through real-time conversations. A fresh take on social networking, built for engagement and simplicity.'
}

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang='en'>
                <body className={`${inter.className} bg-dark-1`}>
                    <div className='w-full flex justify-center items-center min-h-screen'>
                        {children}
                    </div>
                </body>
            </html>
        </ClerkProvider>
    )
}