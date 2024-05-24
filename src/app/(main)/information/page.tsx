import { auth, signOut } from '@/auth';

export default async function page() {

    const session = await auth();
    
    return (
        <div>
            page information

            <pre>
                {JSON.stringify(session, null, 4)}
            </pre>

            <form action={async() => {
                'use server';

                await signOut({
                    redirectTo: '/'
                });
            }}>
                <button type='submit' className='py-2 px-3 ml-5 roudned-md bg-yellow-300'>
                    logout
                </button>
            </form>

        </div>
    );
}
