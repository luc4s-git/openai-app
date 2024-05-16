import Link from 'next/link';

const links = [
  { href: '/chat', label: 'chat' },
  { href: '/tours', label: 'tours' },
  { href: '/tours/new-tour', label: 'new tour' },
  { href: '/profile', label: 'profile' },
];

export default function NavLinks() {
  return (
    <ul className="menu">
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link href={link.href} className="capitalize text-lg">
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
