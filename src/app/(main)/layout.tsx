import Navbar from '@/components/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Main Page',
    description: 'Esta pagina es el inicio de Redux Practice',
};

export default async function MainLayout({children}: Readonly<{children: React.ReactNode}>) {

    // const session = await auth();

    // console.log(session?.user);
    // if(!session?.user) {
    //     redirect('/auth/login');
    // }

    return (
        <main className='min-h-screen bg-blue-500'>
            <Navbar />
            {children}
        </main>
    );
}