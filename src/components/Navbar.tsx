import NavLink from './NavLink';
import ThemeSwitch from './ThemeSwitch';

interface Route {
    path: string,
    label: string,
}

const paths: Route[] = [
    {
        path: '/',
        label: 'Home'
    },
    {
        path: '/counter',
        label: 'Counter'
    },
    {
        path: '/information',
        label: 'Information'
    }
];

export default function Navbar() {

    return (
        <nav className='bg-purple-500 dark:bg-purple-200 py-5 px-10'>
            <ul className='list-none flex gap-5'>
                {
                    paths.map((path, i) => (
                        <li key={path.label+i}>
                            <NavLink route={path}/>
                        </li>
                    ))
                }

                <li>
                    <ThemeSwitch />
                </li>
            </ul>
        </nav>
    );
}
